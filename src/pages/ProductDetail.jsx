import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AlarmIcon from '../assets/AlarmIcon.svg'
import LocationIcon from '../assets/LocationIcon.svg'
import CarIcon from '../assets/CarIcon.svg'

const ProductDetail = () => {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const [clickedSize, setClickedSize] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://659cb07f633f9aee7907cf7e.mockapi.io/trash-2-cash/api/products/${productId}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [productId]);

  const handleClick = (size) => {
    setClickedSize(size);
  };

  const getBorderColor = (size) => {
    return clickedSize === size ? '#65B741' : '#263238';
  };

  return (
    <div className='px-10'>
      <div className='grid grid-cols-3 gap-6 mt-8'>
        <div className='animation6 w-full flex justify-center flex-col items-center'>
          <img className='rounded-2xl' src={data.image} alt="Product Image" />
          <div className='flex mt-3 w-3/4 justify-center items-center'>
            <div>
              <img className='rounded-lg' src={data.image} alt="Variant1 Image" />
            </div>
            <div className='mx-2'>
              <img className='rounded-lg' src={data.image} alt="Variant2 Image" />
            </div>
            <div>
              <img className='rounded-lg' src={data.image} alt="Variant3 Image" />
            </div>
          </div>
        </div>

        <div className='animation5 ml-1 p-2 w-full'>
          <h2 className='text-2xl font-bold text-[#263238]'>{data.title}</h2>
          <p className='my-4 text-[#7B7B7B]'>{data.total_sold} sold</p>
          <h1 className='text-3xl font-bold text-[#263238]'>Rp {data.price}0</h1>
          <hr className="border-t-1 border-[#bdbdbd] mt-5 mb-3" />
          <p className='mb-4 text-[#7B7B7B]'>Size</p>
          <div className='flex flex-row'>
            <div className='hover:cursor-pointer bg-[#EBEBEB] w-12 h-12 rounded-xl flex justify-center items-center mr-2 text-[#b4b2b2]'>XS</div>
            <div
              className={`hover:cursor-pointer border w-12 h-12 rounded-xl flex justify-center items-center mr-2 text-[#263238]`}
              onClick={() => handleClick('S')}
              style={{ borderColor: getBorderColor('S') }}>
              S
            </div>
            <div
              className={`hover:cursor-pointer border w-12 h-12 rounded-xl flex justify-center items-center mr-2 text-[#263238]`}
              onClick={() => handleClick('M')}
              style={{ borderColor: getBorderColor('M') }}>
              M
            </div>
            <div
              className={`hover:cursor-pointer border w-12 h-12 rounded-xl flex justify-center items-center mr-2 text-[#263238]`}
              onClick={() => handleClick('XL')}
              style={{ borderColor: getBorderColor('XL') }}>
              XL
            </div>
          </div>
          <hr className="border-t-1 border-[#bdbdbd] mt-6 mb-5" />
          <p className='text-[#7B7B7B]'>Stock: <span className="text-[#65B741]">{data.stock}</span></p>
          <p className='mt-[6px] text-[#7B7B7B]'>
            Category: <span className="text-[#65B741]">{data.category}</span></p>
          <hr className="border-t-1 border-[#bdbdbd] mt-5" />
        </div>

        <div className='animation6 h-[90%] border border-[#bdbdbd] rounded-3xl flex flex-col'>
          <div className='border-b border-[#bdbdbd] flex items-center px-6 py-5'>
            <div className='w-[72px] h-[72px] bg-gray-300 rounded-full'></div>
            <div className='ml-3'>
              <h1 className='text-xl font-medium text-[#263238]'>Trash2Cash Aksesoris</h1>
              <div className='w-[102px] p-1 flex justify-center items-center bg-[#DCFFDC] text-[#65B741] text-sm mt-2'>
                <p>Official Store</p>
              </div>
            </div>
          </div>
          <div className='border-b border-[#bdbdbd] flex items-center px-6 py-5'>
            <div>
              <div className='flex'>
                <div className='mt-1'>
                  <img src={LocationIcon} alt="Location Icon" />
                </div>
                <div className='ml-3'>
                  <p className='text-[#CBCACA]'>Store Location</p>
                  <p className='text-[#455A64]'>Banjarbaru- <span className='font-semibold'>South Borneo</span></p>
                </div>
              </div>
              <div className='mt-5'>
                <div className='flex'>
                  <div className='mt-1'>
                    <img src={AlarmIcon} alt="Alarm Icon" />
                  </div>
                  <div className='ml-3'>
                    <p className='text-[#CBCACA]'>Operation Hours</p>
                    <p className='text-[#455A64]'>Open: <span className='font-semibold'>08:00 - 23:00 WITA</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex items-center px-6 py-5'>
            <div>
              <h3 className='text-[#263238] font-semibold'>Shipping Method</h3>
              <div className='flex mt-2'>
                <div className='mt-1'>
                  <img src={CarIcon} alt="Car Icon" />
                </div>
                <div className='ml-3'>
                  <p className='text-[#263238]'>Courier Delivery</p>
                  <p className='text-[#263238]'>Products will be delivered via shipping courier</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='animation3 p-8 bg-gray-100 my-9 rounded-xl'>
        <p className='font-medium'>Description:</p>
        <p>Sebuah gelang yang dibuat dari sisa sampah metal yang telah diolah sedemikian rupa sehingga menjadi
          aksesoris yang cocok dipakai dimana saja serta nyaman digunakan.</p>
      </div>
    </div>
  );
};

export default ProductDetail;