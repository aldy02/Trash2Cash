import React from 'react';
import NotFoundErr from '../assets/NotFoundErr.svg'

const NotFound = () => {
  return (
    <div className='animation3 flex justify-center items-center'>
      <img className='w-[580px] mt-36' src={NotFoundErr} alt="404 Page Not Found" />
    </div>
  );
};

export default NotFound;