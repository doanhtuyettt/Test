import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyD5QeVKAGN-gDNTTuymVRgYX5JZ2EybNpY",
  authDomain: "test-2ba65.firebaseapp.com",
  projectId: "test-2ba65",
  storageBucket: "test-2ba65.appspot.com",
  messagingSenderId: "874164035646",
  appId: "1:874164035646:web:c604bd1799e4a94ed8b16f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app)
export default app;