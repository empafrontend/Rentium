/* eslint-disable */ // delete this line when functionality is added in all functions
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from '@firebase/firestore';
import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth, db } from '../firebase.js';
import { useUser } from './UserContextProvider';

export interface Ad {
  author?: string;
  authorId?: string;
  bookingRequests?: BookingRequest[];
  requestor?: BookingRequest;
  category: string;
  description: string;
  endDate: string;
  id?: string;
  img: string;
  isAvailable?: boolean;
  location: string;
  price: number;
  startDate: string;
  title: string;
  createdAt?: any | string;
}
export interface BookingRequest {
  uid: string;
  displayName: string;
  isAccepted?: boolean;
  isRejected?: boolean;
}

interface AdContextValue {
  ads: Ad[];
  singleAd: Ad;
  getAds: () => Promise<unknown>;
  getOneAd: (id: string) => Promise<unknown>;
  createAd: (values: Ad) => Promise<unknown>;
  updateIsAvailableTrue: (id: string) => Promise<unknown>;
  updateIsAvailableFalse: (id: string) => Promise<unknown>;
  removeAd: (id: string) => Promise<unknown>;
  acceptOffer: (id: string, requestor: BookingRequest) => Promise<unknown>;
  rejectOffer: (id: string, requestor: BookingRequest) => void;
  sendOffer: (id: string) => void;
  adsFromCurrentUser: () => any;
  generateAcceptedReq: () => any;
  generatePendingReq: () => any;
  generateRejectedReq: () => any;
  generateSentRequests: () => any;
}

export const AdContext = createContext<AdContextValue>({
  ads: [],
  singleAd: {
    category: '',
    description: '',
    endDate: '',
    img: '',
    isAvailable: true,
    location: '',
    price: 0,
    startDate: '',
    title: '',
  },
  getAds: () => Promise.resolve(),
  getOneAd: (id) => Promise.resolve(),
  createAd: (values) => Promise.resolve(),
  updateIsAvailableTrue: (id) => Promise.resolve(),
  updateIsAvailableFalse: (id) => Promise.resolve(),
  removeAd: () => Promise.resolve(),
  acceptOffer: (id, requestor) => Promise.resolve(),
  rejectOffer: (id, requestor) => {},
  sendOffer: (id) => Promise.resolve(),
  adsFromCurrentUser: () => {},
  generateAcceptedReq: () => {},
  generatePendingReq: () => {},
  generateRejectedReq: () => {},
  generateSentRequests: () => {},
});

const AdProvider: FC<PropsWithChildren> = (props) => {
  const navigate = useNavigate();
  const adsCollectionRef = collection(db, 'ads');
  const [ads, setAds] = useState<Ad[]>([]);
  const { currentUser } = useUser();
  // this singleAd state is for rendering a single ad (but it may not be needed - depends on how the data is being rendered)
  const [singleAd, setSingleAd] = useState<Ad>({
    category: '',
    description: '',
    endDate: '',
    img: '',
    isAvailable: true,
    location: '',
    price: 0,
    startDate: '',
    title: '',
  });

  const getAds = useCallback(async () => {
    const adData = await getDocs(adsCollectionRef);
    setAds(adData.docs.map((doc) => ({ ...(doc.data() as Ad), id: doc.id })));
  }, []);

  /** Gets a single documents from db ad collection */
  const getOneAd = useCallback(async (id: string) => {
    const docRef = doc(db, 'ads', id);
    const docSnap = await getDoc(docRef);
    docSnap.exists()
      ? setSingleAd({ ...(docSnap.data() as Ad), id: id })
      : console.log('Data not found'); // TODO: do something...
  }, []);

  /** Adds new ad entry to db ad collection */
  const createAd = useCallback(async (values: Ad) => {
    const newAd = {
      ...values,
      author: auth.currentUser!.displayName,
      authorId: auth.currentUser!.uid,
      isAvailable: true as Boolean,
      bookingRequests: [],
      createdAt: serverTimestamp(),
    };
    await addDoc(adsCollectionRef, newAd)
      .then(() => {
        navigate('/');
        // TODO: toast
      })
      .catch((error) => {
        console.log(error);
        // TODO: toast
      });
  }, []);

  /** Updates the variable "isAvailable" to true in a single doc */
  const updateIsAvailableTrue = useCallback(async (id: string) => {
    const docRef = doc(db, 'ads', id);
    await updateDoc(docRef, {
      isAvailable: true,
    }).then(() => getAds());
  }, []);

  /** Updates the variable "isAvailable" to false in a single doc */
  const updateIsAvailableFalse = useCallback(async (id: string) => {
    const docRef = doc(db, 'ads', id);
    await updateDoc(docRef, {
      isAvailable: false,
    }).then(() => getAds());
  }, []);

  /** Removes a document from the db ad collection */
  const removeAd = useCallback(async (id: string) => {
    const docRef = doc(db, 'ads', id);
    await deleteDoc(docRef).then(() => getAds());
  }, []);

  /** Accepts a booking request */
  const acceptOffer = useCallback(
    async (adId: string, requestor: BookingRequest) => {
      const docRef = doc(db, 'ads', adId);
      const docSnap = await getDoc(docRef);
      const ad = docSnap.data();
      const selectedReq = ad!.bookingRequests.filter(
        (req: any) => req.uid === requestor.uid
      );
      selectedReq[0].isAccepted = true;
      selectedReq[0].isRejected = false;

      await updateDoc(docRef, {
        isAvailable: false,
        bookingRequests: ad!.bookingRequests,
      }).then(() => getAds());
    },
    []
  );

  /** Rejects a booking request */
  const rejectOffer = useCallback(
    async (adId: string, requestor: BookingRequest) => {
      const docRef = doc(db, 'ads', adId);
      const docSnap = await getDoc(docRef);
      const ad = docSnap.data();
      const selectedReq = ad!.bookingRequests.filter(
        (req: BookingRequest) => req.uid === requestor.uid
      );
      selectedReq[0].isRejected = true;
      selectedReq[0].isAccepted = false;

      await updateDoc(docRef, {
        bookingRequests: ad!.bookingRequests,
      }).then(() => getAds());
    },
    []
  );

  const sendOffer = useCallback(async (adId: string) => {
    const docRef = doc(db, 'ads', adId);
    const docSnap = await getDoc(docRef);
    const ad = docSnap.data();

    // check duplicate
    const duplicate = ad!.bookingRequests.some(
      (req: BookingRequest) => req.uid === auth.currentUser?.uid
    );
    if (duplicate) {
      toast.warning(
        'Du kan inte skicka mer än en förfrågan till samma annons.',
        { position: toast.POSITION.BOTTOM_CENTER }
      );
      return;
    }
    const requestor = {
      displayName: auth.currentUser!.displayName || auth.currentUser!.email!,
      uid: auth.currentUser!.uid,
    };
    const newList: BookingRequest[] = [];
    newList.push(requestor);

    await updateDoc(docRef, {
      bookingRequests: newList,
    }).then(() => {
      getOneAd(adId);
      toast.success('Din bokningsförfrågan har blivit skickad.', {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    });
  }, []);

  const adsFromCurrentUser = () =>
    ads.filter((ad) => ad.authorId === auth.currentUser!.uid);

  const generateSentRequests = () => {
    if (auth.currentUser) {
      const adsFromOthers = ads.filter(
        (ad) => ad.authorId !== auth.currentUser!.uid
      );
      return adsFromOthers.flatMap((ad) =>
        ad.bookingRequests
          ?.filter((req) => req.uid === auth.currentUser!.uid)
          .map(() => ad)
      );
    }
    return;
  };

  const generatePendingReq = () => {
    return adsFromCurrentUser().flatMap((ad) =>
      ad.bookingRequests
        ?.filter(
          (req) => req.isAccepted === undefined && req.isRejected === undefined
        )
        .map((req) => {
          return {
            ...ad,
            requestor: { uid: req.uid, displayName: req.displayName },
          };
        })
    );
  };

  const generateAcceptedReq = () => {
    return adsFromCurrentUser().flatMap((ad) =>
      ad.bookingRequests
        ?.filter((req) => req.isAccepted === true)
        .map((req) => {
          return {
            ...ad,
            requestor: { uid: req.uid, displayName: req.displayName },
          };
        })
    );
  };

  const generateRejectedReq = () => {
    return adsFromCurrentUser().flatMap((ad) =>
      ad.bookingRequests
        ?.filter((req) => req.isRejected === true)
        .map((req) => {
          return {
            ...ad,
            requestor: { uid: req.uid, displayName: req.displayName },
          };
        })
    );
  };

  return (
    <AdContext.Provider
      value={{
        ads,
        singleAd,
        getAds,
        getOneAd,
        createAd,
        updateIsAvailableTrue,
        updateIsAvailableFalse,
        removeAd,
        acceptOffer,
        rejectOffer,
        sendOffer,
        adsFromCurrentUser,
        generateAcceptedReq,
        generatePendingReq,
        generateRejectedReq,
        generateSentRequests,
      }}
    >
      {props.children}
    </AdContext.Provider>
  );
};

export default AdProvider;
export const useAd = () => useContext(AdContext);
