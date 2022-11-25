// Import the functions you need from the SDKs you need
import { initializeApp } from '@firebase/app';
import { getAnalytics } from 'firebase/analytics';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/functions';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: 'AIzaSyAgdy9iOkGFIvn6DbLLmeUYqIchrRkRhoE',
  authDomain: 'rentium-74b95.firebaseapp.com',
  databaseURL:
    'https://rentium-74b95-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'rentium-74b95',
  storageBucket: 'rentium-74b95.appspot.com',
  messagingSenderId: '288851401275',
  appId: '1:288851401275:web:b00562914989a244da1a1e',
  measurementId: 'G-6JL8JNV3PC',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function GoogleLogin() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      window.location.href = '/';
    })
    .catch(console.error);
}
