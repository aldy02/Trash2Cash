import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../utils/firebase-config';
const useSignIn = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (email, password) => {
    setLoading(true);
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      // eslint-disable-next-line no-unused-vars
      .then((userCredential) => {
        setSuccess(true);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { handleSignIn, error, success, loading };
};

export default useSignIn;
