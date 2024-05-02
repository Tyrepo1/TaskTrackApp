import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC_KAkXb2LEYUduFA17aEmzEmeRQBmAM2Y",
  authDomain: "taskapp2-9cf37.firebaseapp.com",
  projectId: "taskapp2-9cf37",
  storageBucket: "taskapp2-9cf37.appspot.com",
  messagingSenderId: "536483021125",
  appId: "1:536483021125:web:cf4293c86a55f6c9453e2c",
  measurementId: "G-WMX12ZH0BH"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);