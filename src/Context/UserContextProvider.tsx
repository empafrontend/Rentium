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
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

interface User {
  username: string;
  password: string;
}

interface GoogleUser {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

interface UserContextValue {
  user: GoogleUser;
  handleSignIn: (user: User) => void;
  handleSignUp: (user: User) => void;
  handleSignOut: () => void;
  handleGoogleSignIn: () => void;
}

export const UserContext = createContext<UserContextValue>({
  user: { displayName: '', email: '', photoURL: '', uid: '' },
  handleSignIn: () => {},
  handleSignUp: () => {},
  handleSignOut: () => {},
  handleGoogleSignIn: () => {},
});

const UserProvider: FC<PropsWithChildren> = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<GoogleUser>({
    displayName: '',
    email: '',
    photoURL: '',
    uid: '',
  });

  const handleSignIn = (user: User) => console.log('signing in', user); // TODO: add function
  const handleSignUp = (user: User) => console.log('signing up', user); // TODO: add function

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider).then(() => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser({
          displayName: currentUser!.displayName!,
          photoURL: currentUser!.photoURL!,
          email: currentUser!.email!,
          uid: currentUser!.uid,
        });
        navigate('/my-page');
      });
    });
    // TODO: error handling
  };

  const handleSignOut = async () =>
    await signOut(auth).then(() => {
      setUser({ displayName: '', email: '', photoURL: '', uid: '' });
      if (user !== null) navigate('/');
    });

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
