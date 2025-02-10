import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBE81hVWpnvkvk3tdiPZbUgFxsGeioq0X8",
    authDomain: "kashvi-creation-4a6f6.firebaseapp.com",
    projectId: "kashvi-creation-4a6f6",
    storageBucket: "kashvi-creation-4a6f6.appspot.com", // Corrected the storageBucket URL
    messagingSenderId: "420392667464",
    appId: "1:420392667464:web:09ec89c7bb8c03c22b4b7d",
    measurementId: "G-EKXYEKFMXM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
