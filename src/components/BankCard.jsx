import React, { useState } from 'react';
import { Link } from "react-router-dom";

const BankCard = ({ bankName, openHour, closeHour, distance, bankId, bankAddress }) => {
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
            className={`relative w-[450px] h-[250px]  animation2  ${isBankOpen ? 'bg-[#f8f7f7] border-[3px] border-[#f8f7f7]' : 'bg-[#f0efef] border-2 lg:border-[3px] border-[#f0efef]'} p-8 w-full rounded-2xl hover:border-[3px] hover:border-[#FFB534]`} onMouseEnter={() => setButtonVisibility(true)} onMouseLeave={() => setButtonVisibility(false)}>
            <h2 className='text-base lg:text-xl overflow-y-hidden h-[29px] font-semibold mb-1'>{bankName}</h2>
            <span className={`rounded-sm mr-2 px-2 ${isBankOpen ? 'bg-[#DCFFDC] text-[#65B741]' : 'bg-[#FFD4D4] text-[#FF5252]'} lg:text-xs text-[10px] font-medium py-1`}>
                {isBankOpen ? 'Open' : 'Close'}
            </span>
            <span className={`rounded-sm text-[10px] lg:text-xs px-2 ${isBankOpen ? 'bg-[#DCFFDC] text-[#65B741]' : 'bg-[#FFD4D4] text-[#FF5252]'} font-medium py-1`}>{openHour} - {closeHour} WITA</span>
            <p className='mt-3 h-[60px] overflow-y-hidden text-xs lg:text-sm text-justify'>
                <strong className='font-medium'>{distance} m</strong> {bankAddress}
            </p>
            {isButtonVisible && (
                <Link to={`/pickup/${bankId}`}>
                    <button className="bg-[#FFB534] text-[#FBF6EE] w-full py-2 mt-5 rounded-lg font-semibold hover:bg-[#EFA42B] transition duration-300">
                        SELANJUTNYA
                    </button>
                </Link>
            )}
        </div>
    );
};

export default BankCard;