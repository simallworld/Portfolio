import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBbdx5eiA4WC3GLGR7FBc6DNlqFixtWyN4",
  authDomain: "portfolio-contact-b748c.firebaseapp.com",
  projectId: "portfolio-contact-b748c",
  storageBucket: "portfolio-contact-b748c.appspot.com", // ✅ fixed here
  messagingSenderId: "217616985732",
  appId: "1:217616985732:web:a6743d6f75aad86cf6dcd1",
  measurementId: "G-4FCQWH5GK4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only if supported (browser)
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((yes) => {
    if (yes) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
