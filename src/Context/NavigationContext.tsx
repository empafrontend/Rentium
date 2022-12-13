import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

interface NavigationContextValue {
  isFilteredView: boolean;
  setIsFilteredView: React.Dispatch<React.SetStateAction<boolean>>;
  showFreeAds: boolean;
  setShowFreeAds: React.Dispatch<React.SetStateAction<boolean>>;
  isLandingPage: boolean;
  setIsLandingPage: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavigationContext = createContext<NavigationContextValue>({
  isFilteredView: false,
  setIsFilteredView: () => undefined,
  showFreeAds: false,
  setShowFreeAds: () => undefined,
  isLandingPage: true,
  setIsLandingPage: () => undefined,
});

const NavigationContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isFilteredView, setIsFilteredView] = useState<boolean>(false);
  const [showFreeAds, setShowFreeAds] = useState<boolean>(false);
  const [isLandingPage, setIsLandingPage] = useState<boolean>(true);
  // console.log(isFilteredView);
  return (
    <NavigationContext.Provider
      value={{
        isFilteredView,
        setIsFilteredView,
        showFreeAds,
        setShowFreeAds,
        isLandingPage,
        setIsLandingPage,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
export const useNavi = () => useContext(NavigationContext);
