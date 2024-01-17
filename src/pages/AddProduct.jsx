import { Select } from '@chakra-ui/react'
import React, { useState } from 'react';
import TrashIcon from '../assets/TrashIcon.svg'
import AddIcon from '../assets/AddIcon.svg'
import CancelIcon from '../assets/CancelIcon.svg'


const AddProduct = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    const handleConfirmClick = () => {
        alert('It Worked, Just To Make Sure This Button Work. Later This Action Will Send Data To The Database Via Api')
    };


    const [dataList, setDataList] = useState([]);
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleRemoveData = (index) => {
        const updatedDataList = [...dataList];
        updatedDataList.splice(index, 1);
        setDataList(updatedDataList);
    };

    const handleAddData = () => {
        if (inputData.trim() !== '') {
            setDataList([...dataList, inputData]);
            setInputData('');
        }
    };
    return (
        <div className='px-10'>
            <h1 className="animation3 font-bold text-xl lg:text-2xl pt-6 lg:pb-4 pb-2">Product Information</h1>

            <div className='lg:px-8'>
                <div className='mt-4 grid md:grid-cols-2 gap-6'>
                    {/* Image */}
                    <div className='animation6 image-container'>
                        {/* Upload */}
                        <div className='flex items-center justify-center w-full'>
                            <label
                                htmlFor='dropzone-file'
                                className='flex flex-col items-center justify-center w-full border-2 border-[#7B7B7B] border-dashed rounded-lg cursor-pointer bg-white'
                            >
                                {selectedImage ? (
                                    <div className='flex flex-col items-center justify-center py-1 preview'>
                                        <img src={URL.createObjectURL(selectedImage)} alt='Selected Trash' />
                                    </div>
                                ) : (
                                    <div className='flex flex-col items-center justify-center py-9 preview'>
                                        <div className='border-[10px] rounded-full border-[#E4E4E4] p-3'>
                                            <img src={TrashIcon} alt='Trash Icon' className='w-28' />
                                        </div>
                                        <p className='mb-2 font-medium text-[#7B7B7B] text-center mt-4'>
                                            Please make sure your image <br /> clearly shows your trash
                                        </p>
                                    </div>
                                )}
                                <input
                                    id='dropzone-file'
                                    type='file'
                                    className='hidden'
                                    onChange={handleImageChange}
                                />
                            </label>
                        </div>
                        {/* Button */}
                        <button onClick={handleConfirmClick} className='bg-[#7B7B7B] hover:bg-[#686666] text-white font-medium rounded-lg w-full mt-5 py-2'>UPLOAD</button>
                    </div>

                    {/* Detail */}
                    <div className='animation5 detail-container lg:text-base text-sm'>
                        <Select placeholder='Choose Trash Type' focusBorderColor='green.500' size='md'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                            <option value='option4'>Option 4</option>
                            <option value='option5'>Option 5</option>
                        </Select>
                        <textarea
                            rows="4"
                            className=" my-4 border-2 border-[#7B7B7B] rounded-lg block w-full p-2.5 h-32"
                            placeholder='Trash description'
                        ></textarea>
                        <input
                            type="text"
                            placeholder='Product Price'
                            className="mb-4 border-2 border-[#7B7B7B] rounded-lg p-2.5 w-full"
                        />
                        <input
                            type="text"
                            placeholder='Stock'
                            className="border-2 mb-4 border-[#7B7B7B] rounded-lg p-2.5 w-full"
                        />
                        <div className='border-2 border-[#7B7B7B] rounded-lg p-2.5 w-full'>
                            <input className='focus:outline-none p-2.5 w-full' type="text" value={inputData} onChange={handleInputChange} placeholder='Size Variant' />
                            <div className='flex'>
                                <div className='flex bg-red'>
                                    {dataList.map((data, index) => (
                                        <div onClick={() => handleRemoveData(index)} className='hover:bg-gray-200 cursor-pointer flex justify-center items-center px-3 rounded-md mr-2 bg-[#F5F5F5]' key={index}>
                                            <p className='mr-1'>{data}</p>
                                            <img src={CancelIcon} alt="Cancel Icon" />
                                        </div>
                                    ))}
                                </div>
                                <img className='bg-[#F5F5F5] p-2 hover:bg-gray-200' onClick={handleAddData} src={AddIcon} alt="Add Icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={handleConfirmClick} className='animation2 bg-[#FFB534] hover:bg-[#EFA42B] py-2 w-full text-[#FBF6EE] font-medium lg:font-semibold rounded-lg text-lg my-10'>
                    CONFIRM
                </button>
            </div>
        </div>
    );
};

export default AddProduct;
