/* eslint-disable */ // delete this line when functionality is added in all functions
import {
  addDoc,
  arrayRemove,
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
import { auth, db } from '../firebase.js';

export interface Ad {
  author?: string;
  authorId?: string;
  bookingRequests?: string[];
  requestor?: string;
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

interface AdContextValue {
  ads: Ad[];
  singleAd: Ad;
  selectedAd: Ad;
  getAds: () => Promise<unknown>;
  getOneAd: (id: string) => Promise<unknown>;
  createAd: (values: Ad) => Promise<unknown>;
  updateAdStatus: (id: string) => Promise<unknown>;
  removeAd: (id: string) => Promise<unknown>;
  acceptOffer: (id: string, requestor: string) => Promise<unknown>;
  rejectOffer: (id: string, requestor: string) => void;
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
  selectedAd: {
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
  updateAdStatus: (id) => Promise.resolve(),
  removeAd: () => Promise.resolve(),
  acceptOffer: (id, requestor) => Promise.resolve(),
  rejectOffer: (id, requestor) => {},
});

const AdProvider: FC<PropsWithChildren> = (props) => {
  const navigate = useNavigate();

  const adsCollectionRef = collection(db, 'ads');
  const [ads, setAds] = useState<Ad[]>([]);
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
  // this selectedAd state is for accepting or rejecting booking requests as well as removing ad
  const [selectedAd, setSelectedAd] = useState<Ad>({
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
    console.log('calling ads');
  }, []);

  /** Gets a single documents from db ad collection */
  const getOneAd = useCallback(async (id: string) => {
    const docRef = doc(db, 'ads', id);
    const docSnap = await getDoc(docRef);
    docSnap.exists()
      ? setSingleAd(docSnap.data() as Ad)
      : console.log('Data not found'); // TODO: do something...
  }, []);

  ///////// FOR TESTING ONLY
  // useEffect(() => {
  //   getOneAd('9S1WP0BrmMHIKMAKWh04');
  //   // console.log('getOneAd() returns:', singleAd);
  // }, []);

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

  ///////// FOR TESTING ONLY
  ///////// *** IF YOU CALL THIS, remember to remove from database after!
  // useEffect(() => {
  //   console.log('called');
  //   createAd({
  //     category: 'shoes',
  //     description: 'jingle bells jingle bells jingle bells rock!',
  //     endDate: '2022-01-01',
  //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcfw1vik_3tGuayJWzN8q-ls3OADSufDCV8UYX03GQIhz00zCPuWL5dEHQNexk63hLrO4&usqp=CAU',
  //     location: 'Centrala Göteborg',
  //     price: 999,
  //     startDate: '2022-12-25',
  //     title: "Santa's boots lalalala",
  //   });
  // }, []);

  /** Updates the variable "isAvailable" in a single doc */
  const updateAdStatus = useCallback(async (id: string) => {
    const docRef = doc(db, 'ads', id);
    setSelectedAd((await getDoc(docRef).then((ref) => ref.data())) as Ad);
    await updateDoc(docRef, {
      isAvailable: selectedAd?.isAvailable == true ? false : true,
    });
  }, []);
  ///////// FOR TESTING ONLY - this will be called continuously once uncommented
  //   updateAdStatus('7TENcfLgExXjxgh7by2S');

  /** Removes a document from the db ad collection */
  const removeAd = useCallback(async (id: string) => {
    const docRef = doc(db, 'ads', id);
    await deleteDoc(docRef).then(() => getAds());
  }, []);
  ///////// FOR TESTING ONLY
  // deleteAd('SKiiovFeRNLfqVoVBnpi');

  /** Accepts a booking request */
  const acceptOffer = useCallback(async (id: string, requestor: string) => {
    const docRef = doc(db, 'ads', id);
    await updateDoc(docRef, {
      isAvailable: false,
      bookingRequests: arrayRemove(requestor),
    }).then(() => getAds());
  }, []);

  /** Rejects a booking request */
  const rejectOffer = useCallback(async (id: string, requestor: string) => {
    const docRef = doc(db, 'ads', id);
    await updateDoc(docRef, {
      bookingRequests: arrayRemove(requestor),
    }).then(() => getAds());
  }, []);

  return (
    <AdContext.Provider
      value={{
        ads,
        singleAd,
        selectedAd,
        getAds,
        getOneAd,
        createAd,
        updateAdStatus,
        removeAd,
        acceptOffer,
        rejectOffer,
      }}
    >
      {props.children}
    </AdContext.Provider>
  );
};

export default AdProvider;
export const useAd = () => useContext(AdContext);
