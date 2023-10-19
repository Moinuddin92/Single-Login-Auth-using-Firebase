import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBR32GfGWGn82DiKooKn9DhjO8Ygw78_gg",
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "single-login-auth",
  messagingSenderId: "884803871132"
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
