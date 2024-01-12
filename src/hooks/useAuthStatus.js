import { useState } from 'react';
import { app } from '../utils/firebase-config';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

const useAuthStatus = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      alert('already sign in');
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  });
  return [isSignedIn];
};

export default useAuthStatus;
