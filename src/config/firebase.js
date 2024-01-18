// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'trash2cash-ebb4a.firebaseapp.com',
  projectId: 'trash2cash-ebb4a',
  storageBucket: 'trash2cash-ebb4a.appspot.com',
  messagingSenderId: '463559729756',
  appId: '1:463559729756:web:6431e61cdee223d890fc99',
  measurementId: 'G-72739CXM9Z',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
