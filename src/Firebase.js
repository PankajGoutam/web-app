import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQh_L9R-qiXpZzlaw9QoDTztG0flvv51U",
  authDomain: "my-portfolio-50def.firebaseapp.com",
  projectId: "my-portfolio-50def",
  storageBucket: "my-portfolio-50def.firebasestorage.app",
  messagingSenderId: "439020730546",
  appId: "1:439020730546:web:f99359d94b422df6cef1ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);