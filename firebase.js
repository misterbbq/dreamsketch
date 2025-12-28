import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB3tvgqG5F3_zpVH7bdKyzxJZNGDmZtJho",
  authDomain: "dreamsketch-6d030.firebaseapp.com",
  projectId: "dreamsketch-6d030",
  storageBucket: "dreamsketch-6d030.firebasestorage.app",
  messagingSenderId: "949626846732",
  appId: "1:949626846732:web:85d364e805301ebe8a3829"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

signInAnonymously(auth);
