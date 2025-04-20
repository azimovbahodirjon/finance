import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwBotsLozx5RcSt1H4-nwKtvFLj0G5JGk",
  authDomain: "finance-71eeb.firebaseapp.com",
  projectId: "finance-71eeb",
  storageBucket: "finance-71eeb.firebasestorage.app",
  messagingSenderId: "119717048884",
  appId: "1:119717048884:web:5048441bc5f9da5c439061",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
