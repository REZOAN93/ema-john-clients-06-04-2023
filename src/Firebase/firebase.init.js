// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBftMoVHo56OtNaFIRKyanHcUaTeO4wp4Q",
  authDomain: "email-password-auth-45bfa.firebaseapp.com",
  projectId: "email-password-auth-45bfa",
  storageBucket: "email-password-auth-45bfa.appspot.com",
  messagingSenderId: "525431582195",
  appId: "1:525431582195:web:50c367ef2e453436d63686",
  measurementId: "G-8K3J6R8N00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;