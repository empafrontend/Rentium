import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';

interface NavigationContextValue {
  filterNavigation: boolean;
  setFilterNavigation: React.Dispatch<React.SetStateAction<boolean>>;
  showFreeAds: boolean;
  setShowFreeAds: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavigationContext = createContext<NavigationContextValue>({
  filterNavigation: false,
  setFilterNavigation: () => undefined,
  showFreeAds: false,
  setShowFreeAds: () => undefined,
});

const NavigationContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filterNavigation, setFilterNavigation] = useState<boolean>(false);
  const [showFreeAds, setShowFreeAds] = useState<boolean>(false);
  // console.log(filterNavigation);
  return (
    <NavigationContext.Provider
      value={{
        filterNavigation,
        setFilterNavigation,
        showFreeAds,
        setShowFreeAds,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
export const useNavi = () => useContext(NavigationContext);
