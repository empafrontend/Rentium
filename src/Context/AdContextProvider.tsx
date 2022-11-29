/* eslint-disable */ // delete this line when functionality is added in all functions
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
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

export interface Ad {
  author: string;
  bookingRequests?: string[];
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
}

interface AdContextValue {
  // ads: Ad[];
  acceptOffer: (id: string) => void;
  rejectOffer: (id: string) => void;
  removeAd: (id: string) => void;
}

export const AdContext = createContext<AdContextValue>({
  acceptOffer: () => {},
  rejectOffer: () => {},
  removeAd: () => {},
});

const AdProvider: FC<PropsWithChildren> = (props) => {
  const adsCollectionRef = collection(db, 'ads');
  const [ads, setAds] = useState<Ad[]>([]);
  const [singleAd, setSingleAd] = useState<Ad>();
  const [selectedAd, setSelectedAd] = useState<Ad>();

  useEffect(() => {
    getAds();
    // console.log('getAds() returns:', ads);
  }, []);

  // Gets all data from db ad collection
  const getAds = async () => {
    const adData = await getDocs(adsCollectionRef);
    setAds(adData.docs.map((doc) => ({ ...(doc.data() as Ad), id: doc.id })));
  };

  // Gets a single documents from db ad collection
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

  // Adds new ad entry to db ad collection
  const createAd = async (values: Ad) => {
    const newAd = {
      ...values,
      isAvailable: true as Boolean,
      bookingRequests: [],
    };
    await addDoc(adsCollectionRef, newAd);
  };

  ///////// FOR TESTING ONLY. IF YOU CALL THIS, remember to remove from database after!
  // useEffect(() => {
  // createAd({
  //   author: 'milliecheung',
  //   category: 'shoes',
  //   description: 'jingle bells jingle bells jingle bells rock!',
  //   endDate: '2022-01-01',
  //   img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png',
  //   location: 'Centrala Göteborg',
  //   price: 999,
  //   startDate: '2022-12-25',
  //   title: "Santa's boots",
  // });
  //}, []);

  // Updates the variable "isAvailable" in a single doc
  const updateAdStatus = async (id: string) => {
    const docRef = doc(db, 'ads', id);
    setSelectedAd((await getDoc(docRef).then((ref) => ref.data())) as Ad);
    await updateDoc(docRef, {
      isAvailable: selectedAd?.isAvailable == true ? false : true,
    });
  };

  ///////// FOR TESTING ONLY
  // useEffect(() => {
  //   updateAdStatus('7TENcfLgExXjxgh7by2S');
  // }, []);

  // Removes a document from the db ad collection
  const deleteAd = async (id: string) => {
    const docRef = doc(db, 'ads', id);
    await deleteDoc(docRef);
  };

  ///////// FOR TESTING ONLY
  // deleteAd('SKiiovFeRNLfqVoVBnpi');

  const acceptOffer = (id: string) => {
    console.log('accepting offer', id);
    // TODO: Update item status in db
  };

  const rejectOffer = (id: string) => {
    console.log('rejecting offer', id);
    // TODO: Remove ad from bokningsförfrågningarna
  };

  const removeAd = (id: string) => {
    console.log('deleting ad', id);
    // TODO: Delete item from db
  };

  return (
    <AdContext.Provider value={{ acceptOffer, rejectOffer, removeAd }}>
      {props.children}
    </AdContext.Provider>
  );
};

export default AdProvider;
export const useAd = () => useContext(AdContext);
