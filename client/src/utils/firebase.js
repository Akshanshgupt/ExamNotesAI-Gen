
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-e7436.firebaseapp.com",
  projectId: "authexamnotes-e7436",
  storageBucket: "authexamnotes-e7436.firebasestorage.app",
  messagingSenderId: "385356659874",
  appId: "1:385356659874:web:75f2ad6b37b9d02becabfb",
  measurementId: "G-D9HHWESNLC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth,provider}