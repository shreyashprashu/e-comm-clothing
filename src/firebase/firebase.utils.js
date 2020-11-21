import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/firebase-auth';

const config={
    apiKey: "AIzaSyCbRZrJsL0DXeMYPOTu6o-V-AbfrTXlz4k",
    authDomain: "crown-db-34e5a.firebaseapp.com",
    databaseURL: "https://crown-db-34e5a.firebaseio.com",
    projectId: "crown-db-34e5a",
    storageBucket: "crown-db-34e5a.appspot.com",
    messagingSenderId: "306203020543",
    appId: "1:306203020543:web:dbe0049bc506a3abced0ca",
    measurementId: "G-D0G920410X"
}

firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle =()=> auth.signInWithPopup(provider);
export default firebase;