import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: meta.env.API_KEY,
  authDomain: meta.env.AUTH_DOMAIN,
  projectId: meta.env.PROJECT_ID,
  storageBucket: meta.env.STORAGE_BUCKET,
  messagingSenderId: meta.env.MESSAGING_SENDER_ID,
  appId: meta.env.APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {auth , provider}