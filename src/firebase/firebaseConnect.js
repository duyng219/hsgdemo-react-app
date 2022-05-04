import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyw-4vv53e_WjNtBquYY48YcdR9FaGm90",
  authDomain: "hoasen-88165.firebaseapp.com",
  projectId: "hoasen-88165",
  storageBucket: "hoasen-88165.appspot.com",
  messagingSenderId: "430346490556",
  appId: "1:430346490556:web:5bf371015678240b36b6b9",
  measurementId: "G-9VRVWZV781",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
