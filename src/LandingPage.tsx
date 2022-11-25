import { Container } from '@mui/material';
import firebase from 'firebase/compat/app';
import { firebaseConfig, GoogleLogin } from './firebase';

firebase.initializeApp(firebaseConfig);

function LandingPage() {
  return (
    <Container>
      <button onClick={GoogleLogin}>Logga in med Google</button>
    </Container>
  );
}

export default LandingPage;
