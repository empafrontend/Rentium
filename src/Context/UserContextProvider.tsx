/* eslint-disable */ // delete this line when functionality is added in all functions
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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
    await signInWithPopup(auth, provider)
      .then((result) => {
        setUser({
          displayName: result.user.displayName!,
          photoURL: result.user.photoURL!,
          email: result.user.email!,
          uid: result.user.uid,
        });
        navigate('/my-page');
      })
      .then(() => {
        toast.success('Du är inloggad!', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      })
      .catch((error) => {
        // TODO!
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        toast.error('Inloggningen misslyckades.', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
      });
  };

  const handleSignOut = async () =>
    await signOut(auth)
      .then(() => {
        setUser({ displayName: '', email: '', photoURL: '', uid: '' });
        if (user !== null) navigate('/');
      })
      .then(() => {
        toast.success('Du är utloggad!', {
          position: toast.POSITION.BOTTOM_CENTER,
        });
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
