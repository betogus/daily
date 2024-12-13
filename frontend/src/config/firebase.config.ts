// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseOptions } from "firebase/app";
import * as auth from "firebase/auth";

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};


export const appFirebase = initializeApp(firebaseConfig);
export const authFirebase = auth.getAuth(appFirebase);

