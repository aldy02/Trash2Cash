import React, { useState } from 'react';

const BankCard = ({ bankName, openHour, closeHour, distance }) => {
    const currentTime = new Date();

    const openHourArray = openHour.split(':');
    const closeHourArray = closeHour.split(':');

    const bankOpenTime = new Date();
    bankOpenTime.setHours(parseInt(openHourArray[0], 10));
    bankOpenTime.setMinutes(parseInt(openHourArray[1], 10));

    const bankCloseTime = new Date();
    bankCloseTime.setHours(parseInt(closeHourArray[0], 10));
    bankCloseTime.setMinutes(parseInt(closeHourArray[1], 10));

    const isBankOpen = currentTime >= bankOpenTime && currentTime <= bankCloseTime;

    const [isButtonVisible, setButtonVisibility] = useState(false);

    return (
        <div
            className={`relative w-[450px] ${isBankOpen ? 'bg-[#f8f7f7] border-[3px] border-[#f8f7f7]' : 'bg-[#f0efef] border-[3px] border-[#f0efef]'} p-8 rounded-2xl hover:border-[3px] hover:border-[#FFB534]`} onMouseEnter={() => setButtonVisibility(true)} onMouseLeave={() => setButtonVisibility(false)}>
            <h2 className='text-xl font-semibold mb-1'>{bankName}</h2>
            <span className={`rounded-sm text-xs mr-2 px-2 ${isBankOpen ? 'bg-[#DCFFDC] text-[#65B741]' : 'bg-[#FFD4D4] text-[#FF5252]'} font-medium py-1`}>
                {isBankOpen ? 'Open' : 'Close'}
            </span>
            <span className={`rounded-sm text-xs px-2 ${isBankOpen ? 'bg-[#DCFFDC] text-[#65B741]' : 'bg-[#FFD4D4] text-[#FF5252]'} font-medium py-1`}>{openHour} - {closeHour} WITA</span>
            <p className='mt-3 text-sm text-justify'>
                <strong className='font-medium'>{distance} m</strong> - Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec id tincidunt velit, fermentum dapibus sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos.
            </p>
            {isButtonVisible && (
                <button className="bg-[#FFB534] text-[#FBF6EE] w-full py-2 mt-5 rounded-lg font-semibold hover:bg-[#EFA42B] transition duration-300">
                   NEXT
                </button>
            )}
        </div>
    );
};

export default BankCard;