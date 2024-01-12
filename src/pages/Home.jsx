import HomePageHero from '../assets/HomePageHero.svg';
import { useNavigate } from 'react-router-dom';
import useAuthStatus from '../hooks/useAuthStatus';
import { useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../utils/firebase-config';

const Home = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);

  const [isSignedIn] = useAuthStatus();

  useEffect(() => {
    if (isSignedIn == false) {
      navigate('/sign-in');
    }
  }, [isSignedIn, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/sign-in');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <>
      <div className="home-container mx-auto ">
        <h1 className="text-center text-3xl font-bold mt-4">
          Page Under Construction
        </h1>
        <img className="w-[550px] mx-auto" src={HomePageHero} alt="" />
        <div className="button-container w-full flex justify-center">
          <Button colorScheme="red" onClick={handleLogout} className="">
            Sign Out
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
