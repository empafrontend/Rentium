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
  useContext,
  useEffect,
  useState,
} from 'react';
import { db } from '../firebase.js';
import { useUser } from './UserContextProvider';

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
  rejectOffer: (id: string) => void;
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
  rejectOffer: () => {},
});

const AdProvider: FC<PropsWithChildren> = (props) => {
  const { user } = useUser();
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

  useEffect(() => {
    getAds();
    // console.log('getAds() returns:', ads);
  }, []);

  /** Gets all data from db ad collection */
  const getAds = async () => {
    const adData = await getDocs(adsCollectionRef);
    setAds(adData.docs.map((doc) => ({ ...(doc.data() as Ad), id: doc.id })));
  };

  /** Gets a single documents from db ad collection */
  const getOneAd = async (id: string) => {
    const docRef = doc(db, 'ads', id);
    const docSnap = await getDoc(docRef);
    docSnap.exists()
      ? setSingleAd(docSnap.data() as Ad)
      : console.log('Data not found'); // TODO: do something...
  };

  ///////// FOR TESTING ONLY
  // useEffect(() => {
  //   getOneAd('9S1WP0BrmMHIKMAKWh04');
  //   // console.log('getOneAd() returns:', singleAd);
  // }, []);

  /** Adds new ad entry to db ad collection */
  const createAd = async (values: Ad) => {
    const newAd = {
      ...values,
      author: user.displayName,
      authorId: user.uid,
      isAvailable: true as Boolean,
      bookingRequests: [],
      createdAt: serverTimestamp(),
    };
    await addDoc(adsCollectionRef, newAd);
  };

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
  //     title: "Santa's boots lalala",
  //   });
  // }, []);

  /** Updates the variable "isAvailable" in a single doc */
  const updateAdStatus = async (id: string) => {
    const docRef = doc(db, 'ads', id);
    setSelectedAd((await getDoc(docRef).then((ref) => ref.data())) as Ad);
    await updateDoc(docRef, {
      isAvailable: selectedAd?.isAvailable == true ? false : true,
    });
  };
  ///////// FOR TESTING ONLY - this will be called continuously once uncommented
  //   updateAdStatus('7TENcfLgExXjxgh7by2S');

  /** Removes a document from the db ad collection */
  const removeAd = async (id: string) => {
    const docRef = doc(db, 'ads', id);
    await deleteDoc(docRef);
  };
  ///////// FOR TESTING ONLY
  // deleteAd('SKiiovFeRNLfqVoVBnpi');

  const acceptOffer = async (id: string, requestor: string) => {
    /////// DO NOT DELETE, WORKING ON IT
    // const docRef = doc(db, 'ads', id);
    // console.log((await getDoc(docRef).then((ref) => ref.data())) as Ad);
    // //setSelectedAd((await getDoc(docRef).then((ref) => ref.data())) as Ad);

    // console.log(selectedAd);
    // const index = selectedAd.bookingRequests!.indexOf(requestor);
    // selectedAd.bookingRequests!.splice(index);

    // console.log(selectedAd);

    // await updateDoc(docRef, {
    //   isAvailable: false,

    //   bookingRequests:

    // });
    console.log('accepting offer', id);
  };

  const rejectOffer = (id: string) => {
    console.log('rejecting offer', id);
    // TODO: Remove ad from bokningsförfrågningarna
  };

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
