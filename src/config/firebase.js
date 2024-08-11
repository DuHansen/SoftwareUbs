import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBuHsQHIOyfpW_FNyQvkv7vEUO1ksviVrE",
  authDomain: "apisus-87f69.firebaseapp.com",
  databaseURL: "https://apisus-87f69-default-rtdb.firebaseio.com",
  projectId: "apisus-87f69",
  storageBucket: "apisus-87f69.appspot.com",
  messagingSenderId: "614422471069",
  appId: "1:614422471069:web:32f437bc0d162984ee8f74",
  measurementId: "G-JCLZTQJ016"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// USE A VERSÃO MODULAR DO FIREBASE!!!
export const auth = getAuth(app);
export const database = getDatabase(app);
