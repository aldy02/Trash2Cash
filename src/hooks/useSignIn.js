import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../utils/firebase-config';
const useSignUp = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (email, password) => {
    setLoading(true);
    const auth = getAuth(app);
    // createUserWithEmailAndPassword(auth, email, password)
    signInWithEmailAndPassword(auth, email, password)
      // eslint-disable-next-line no-unused-vars
      .then((userCredential) => {
        setSuccess(true);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { handleSignUp, error, success, loading };
};

export default useSignUp;
