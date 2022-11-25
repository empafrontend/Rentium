import { createContext, FC, PropsWithChildren, useContext } from 'react';

interface User {
  username: string;
  password: string;
}

interface UserContextValue {
  // TODO: add one for current cookie session too
  handleSignIn: (user: User) => void;
  handleSignUp: (user: User) => void;
  handleSignOut: (user: User) => void;
}

export const UserContext = createContext<UserContextValue>({
  handleSignIn: () => {},
  handleSignUp: () => {},
  handleSignOut: () => {},
});

const UserProvider: FC<PropsWithChildren> = (props) => {
  const handleSignIn = (user: User) => console.log('signing in', user); // TODO: add function
  const handleSignUp = (user: User) => console.log('signing up', user); // TODO: add function
  const handleSignOut = (user: User) => console.log('signing out', user); // TODO: add function

  return (
    <UserContext.Provider value={{ handleSignIn, handleSignUp, handleSignOut }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export const useUser = () => useContext(UserContext);
