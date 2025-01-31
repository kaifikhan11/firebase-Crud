import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// ✅ Fixed Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJ7qYTyMNFG5JDOmJnWjdWaIm3CqQYfno",
  authDomain: "fir-series-6596e.firebaseapp.com",
  projectId: "fir-series-6596e",
  storageBucket: "fir-series-6596e.appspot.com", // ✅ Corrected the storageBucket URL
  messagingSenderId: "231253742943",
  appId: "1:231253742943:web:196f4b72d4f4cb8fbe92ea"
};

// ✅ Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
