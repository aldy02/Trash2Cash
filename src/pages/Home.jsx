import HomePageHero from '../assets/HomePageHero.svg';
import { useNavigate } from 'react-router-dom';
import useAuthStatus from '../hooks/useAuthStatus';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();

  const [isSignedIn] = useAuthStatus();

  useEffect(() => {
    if (isSignedIn == false) {
      navigate('/sign-in');
    }
  }, [isSignedIn, navigate]);

  return (
    <>
      <div className="home-container mx-auto ">
        <h1 className="text-center text-3xl font-bold mt-4">
          Page Under Construction
        </h1>
        <img className="w-[550px] mx-auto" src={HomePageHero} alt="" />
      </div>
    </>
  );
};

export default Home;
