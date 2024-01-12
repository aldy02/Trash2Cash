import { useState, useEffect } from 'react';
import { app } from '../config/firebase';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

const useAuthStatus = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.info(user);
        setIsSignedIn(true);
      } else {
        setIsSignedIn(false);
      }
    });

    return () => unsubscribe();
  }, [auth]);
  return [isSignedIn];
};

export default useAuthStatus;
