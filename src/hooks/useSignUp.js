import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
const useSignUp = () => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const register = async (email, password) => {
    setIsLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error);
        // ..
      })
      .finally(() => {
        setIsLoading(false);
      });
    // try {
    //   // Panggil fungsi registrasi dari Firebase
    //   await getAuth.createUserWithEmailAndPassword(email, password);
    //   setError(null); // Bersihkan error jika registrasi berhasil
    // } catch (error) {
    //   setError(error.message); // Tangkap pesan error jika registrasi gagal
    // } finally {
    //   setIsLoading(false);
    // }
  };

  return { register, error, isLoading, user };
};

export default useSignUp;
