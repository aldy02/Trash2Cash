import { useNavigate } from 'react-router-dom';
import useAuthStatus from '../hooks/useAuthStatus';
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from '../config/firebase';
import Coins from '../assets/Coins.svg'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'


const Home = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);

  const [isSignedIn] = useAuthStatus();

  useEffect(() => {
    if (isSignedIn == false) {
      navigate('/sign-in');
    }
  }, [isSignedIn, navigate]);

  return (
    <>
      <div className="px-6 lg:px-10">
        <h1 className="text-xl font-bold mt-6">
          Hai, John :)
        </h1>
        <div className='flex items-center mt-1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#226630">
            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
          </svg>
          <p className='text-gray-500 ml-2'>Balikpapan, East Borneo</p>
        </div>
        <div className='flex'>
          <div className='bg-[#36886a] text-white mt-5 mr-4 w-full rounded-2xl p-5'>
            <div className='flex text-gray-800'>
              <div className='mr-3'>
                <div className='rounded-full bg-white w-16 h-16'></div>
              </div>
              <div className='text-sm flex flex-col text-white justify-center'>
                <h2 className='font-bold'>John Doe | Level 2</h2>
                <div className='flex items-center text-xs'>
                  <img className='mr-2 w-6' src={Coins} alt="Coins" />
                  <p>Coins 37.456</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='ml-3 mt-5'>
          <StatGroup>
            <Stat>
              <StatLabel>Total</StatLabel>
              <StatNumber>56.7 Kg</StatNumber>
              <StatHelpText>
                <StatArrow type='increase' />
                23.36%
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>Earned</StatLabel>
              <StatNumber>Rp 567K</StatNumber>
              <StatHelpText>
                <StatArrow type='increase' />
                23.36%
              </StatHelpText>
            </Stat>

            <Stat>
              <StatLabel>Spend</StatLabel>
              <StatNumber>Rp 260K</StatNumber>
              <StatHelpText>
                <StatArrow type='decrease' />
                5.26%
              </StatHelpText>
            </Stat>
          </StatGroup>
        </div>
      </div>
    </>
  );
};

export default Home;
