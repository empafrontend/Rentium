import { createContext, FC, PropsWithChildren, useState } from 'react';

export const NavigationContext = createContext<any>(null);

const NavigationContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [filterNavigation, setFilterNavigation] = useState<boolean>(true);
  console.log(filterNavigation);
  return (
    <NavigationContext.Provider
      value={{
        filterNavigation,
        setFilterNavigation,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
