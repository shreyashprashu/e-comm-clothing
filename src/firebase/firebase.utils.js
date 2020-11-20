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

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider =new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle =()=> auth.signInWithPopup(provider);
export default firebase;