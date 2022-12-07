import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAfnu212-XgisAOox38GIue0MByo9dLDF4",
    authDomain: "gotmclub-f8973.firebaseapp.com",
    projectId: "gotmclub-f8973",
    storageBucket: "gotmclub-f8973.appspot.com",
    messagingSenderId: "11943177391",
    appId: "1:11943177391:web:0b817a30f21787b062f85a",
    measurementId: "G-HTEYYK25CG"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const signInPopup = signInWithPopup();

export { auth, provider, signInPopup };
export default db;