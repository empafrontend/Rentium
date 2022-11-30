/* eslint-disable */ // delete this line when functionality is added in all functions
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
//import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged} from "firebase/auth"

interface User {
  username: string;
  password: string;
}

interface UserContextValue {
  // TODO: add one for current cookie session too
  user: any;
  handleSignIn: (user: User) => void;
  handleSignUp: (user: User) => void;
  handleSignOut: () => void;
  handleGoogleSignIn: () => void;
}

export const UserContext = createContext<UserContextValue>({
  user: {},
  handleSignIn: () => {},
  handleSignUp: () => {},
  handleSignOut: () => {},
  handleGoogleSignIn: () => {},
});

const UserProvider: FC<PropsWithChildren> = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>({});
  const handleSignIn = (user: User) => console.log('signing in', user); // TODO: add function
  const handleSignUp = (user: User) => console.log('signing up', user); // TODO: add function
  const handleSignOut = async () => await signOut(auth); // TODO: add function

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    //await signInWithRedirect(auth, provider);

    // TODO: error handling
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user !== null) {
      navigate('/my-page');
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
        handleSignIn,
        handleSignUp,
        handleSignOut,
        handleGoogleSignIn,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
export const useUser = () => useContext(UserContext);
