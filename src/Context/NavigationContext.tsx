import { createContext, FC, PropsWithChildren, useState } from 'react';

export const NavigationContext = createContext<any>(null);

const NavigationContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filterNavigation, setFilterNavigation] = useState<boolean>(false);
  const [showFreeAds, setShowFreeAds] = useState<boolean>(false);
  console.log(filterNavigation);
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
