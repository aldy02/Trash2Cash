import {
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
  Box
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BankCard from '../components/BankCard';

const steps = [
  { title: 'Choose Trash Bank' },
  { title: 'Trash Validation' },
  { title: 'Confirmation of Retrieval' },
]

const TrashPickup = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  })

  const [trashBankDatas, setTrashBankDatas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://659cb07f633f9aee7907cf7e.mockapi.io/trash-2-cash/api/bank-sampah');
        setTrashBankDatas(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  console.log(trashBankDatas);

  return (
    <div>
      <div className="px-10">
        <h1 className="font-bold text-2xl pt-6 pb-4">Mari Mengolah Sampah Menjadi Cuan Bersama Kami</h1>
        <iframe className='h-64 w-full'
          title="Current Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.8444981505824!2d116.83418621432783!3d-1.2622993359491928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323623e18f13e041%3A0x1d9ef4cdef6da70e!2sBSB%20Mall!5e0!3m2!1sen!2sid!4v1643288365965!5m2!1sen!2sid"
          allowFullScreen
        ></iframe>

        {/* Stepper Started */}
        <div className='my-6'>
          <Stepper index={activeStep} colorScheme='teal'>
            {steps.map((step, index) => (
              <Step key={index}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink='0'>
                  <StepTitle>{step.title}</StepTitle>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </div>
        {/* Stepper End */}

        {/* Input Search */}
        <div className='flex items-center justify-center flex-col w-full mt-[58px]'>
          <div className="relative w-2/3">
            <input
              type="text"
              placeholder="Choose your nearest trash bank"
              className='w-full py-2 pl-11 pr-5 rounded-full border-2 border-gray-400'
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-gray-400"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
          <div className='sorting-container w-2/3 mt-6'>
            <span className='border-[1px] border-[#DCFFDC] bg-[#DCFFDC] text-[#65B741] py-2 px-4 rounded-xl ml-3'>Open</span>
            <span className='border-[1px] border-[#7B7B7B] text-[#7B7B7B]  py-2 px-4 rounded-xl ml-3'>Nerby</span>
            <span className='border-[1px] border-[#7B7B7B] text-[#7B7B7B]  py-2 px-4 rounded-xl ml-3'>Popular</span>
            <span className='border-[1px] border-[#7B7B7B] text-[#7B7B7B]  py-2 px-4 rounded-xl ml-3'>All Banks</span>
          </div>
        </div>

        {/* Bank List Started */}
        <div className='w-full grid grid-cols-3 gap-y-8 gap-x-9 mt-16'>
          {trashBankDatas.map((trashBankData) => (
            <BankCard key={trashBankData.id}
              bankName={trashBankData.title}
              openHour={trashBankData.open_hour}
              closeHour={trashBankData.close_hour}
              distance={trashBankData.distance}
              bankId={trashBankData.id}
            />
          ))}
        </div>
        {/* Bank List End*/}
      </div>
    </div>
  );
};

export default TrashPickup;