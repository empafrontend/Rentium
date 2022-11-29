/* eslint-disable */ // delete this line when functionality is added in all functions
import { collection, getDocs } from '@firebase/firestore';
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
  bookingRequests: string[];
  category: string;
  description: string;
  endDate: string;
  id: string;
  img: string;
  isAvailable: boolean;
  location: string;
  price: number;
  startDate: string;
  title: string;
}

interface AdContextValue {
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

  useEffect(() => {
    const getAds = async () => {
      const adData = await getDocs(adsCollectionRef);
      setAds(adData.docs.map((doc) => ({ ...(doc.data() as Ad), id: doc.id })));
      console.log(ads);
    };
    getAds();
  }, []);

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
