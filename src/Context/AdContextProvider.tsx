import { createContext, FC, PropsWithChildren, useContext } from 'react';

export interface Ad {
  // according to firebase data but can be changed
  title: string;
  text: string;
  price: number;
  location: string;
  img: string;
  category: string;
  status: boolean;
  author: string;
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
