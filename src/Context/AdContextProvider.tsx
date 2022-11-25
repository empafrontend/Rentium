import { createContext, FC, PropsWithChildren, useContext } from 'react';

interface Ad {
  // according to firebase data
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
  acceptOffer: (title: string) => void;
  rejectOffer: (title: string) => void;
  removeAd: (title: string) => void;
}

export const AdContext = createContext<AdContextValue>({
  acceptOffer: () => {},
  rejectOffer: () => {},
  removeAd: () => {},
});

const AdProvider: FC<PropsWithChildren> = (props) => {
  const acceptOffer = (title: string) => {
    console.log('accepting offer', title);
    // TODO: Update item status in db
  };

  const rejectOffer = (title: string) => {
    console.log('rejecting offer', title);
    // TODO: Remove ad from bokningsförfrågningarna
  };

  const removeAd = (title: string) => {
    console.log('deleting ad', title);
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
