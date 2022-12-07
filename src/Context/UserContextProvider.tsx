/* eslint-disable */ // delete this line when functionality is added in all functions
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../firebase';

interface User {
  username: string;
  password: string;
}
interface UserContextValue {
  currentUser: any;
  handleSignIn: (user: User) => void;
  handleSignUp: (user: User) => void;
  handleSignOut: () => void;
  handleGoogleSignIn: () => void;
}

export const UserContext = createContext<UserContextValue>({
  currentUser: undefined,
  handleSignIn: () => {},
  handleSignUp: () => {},
  handleSignOut: () => {},
  handleGoogleSignIn: () => {},
});

const UserProvider: FC<PropsWithChildren> = (props) => {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<any>();
  const handleSignIn = (user: User) => console.log('signing in', user); // TODO: add function
  const handleSignUp = (user: User) => console.log('signing up', user); // TODO: add function

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then(() => {
        navigate('/my-page');
      })
      .then(() => {
        toast.success('Du är inloggad!', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(`Inloggningen misslyckades. (${errorCode})`, {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  };

  const handleSignOut = async () =>
    await signOut(auth)
      .then(() => {
        setCurrentUser(undefined);
        if (!currentUser) navigate('/');
      })
      .then(() => {
        toast.success('Du är utloggad!', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });

  return (
    <UserContext.Provider
      value={{
        currentUser,
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
