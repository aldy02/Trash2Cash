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
    Box,
    Select
} from '@chakra-ui/react'
import React, { useState } from 'react';
import TrashIcon from '../assets/TrashIcon.svg'
import { Link, useParams } from "react-router-dom";

const steps = [
    { title: 'Choose Trash Bank' },
    { title: 'Trash Validation' },
    { title: 'Confirmation of Retrieval' },
]

const TrashPickupValidation = () => {
    const { bankId } = useParams();
    const { activeStep } = useSteps({
        index: 2,
        count: steps.length,
    })

    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    const handleConfirmClick = () => {
        alert('It Worked, Just To Make Sure This Button Work')
    };
    return (
        <div className='px-10'>
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

            {/* Validation Section */}
            <div className=' px-8'>

                <div className='mt-[58px] grid grid-cols-2 gap-6'>
                    {/* Image */}
                    <div className='image-container'>
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
                    <div className='detail-container'>
                        <Select placeholder='Choose Trash Type' focusBorderColor='green.500' size='md'>
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                            <option value='option4'>Option 4</option>
                            <option value='option5'>Option 5</option>
                        </Select>
                        <textarea
                            rows="4"
                            className=" my-4 border-2 border-[#7B7B7B] rounded-lg block w-full p-2.5 resize-none h-32"
                            placeholder='Trash description'
                        ></textarea>
                        <p className='w-full text-justify text-sm'>lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem
                            ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
                            dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor
                            sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet
                        </p>
                    </div>
                </div>
                <Link to={`/pickup/${bankId}/confirmation`}>
                    <button className='bg-[#FFB534] hover:bg-[#EFA42B] py-2 w-full text-[#FBF6EE] font-semibold rounded-lg text-lg my-10'>
                        CONFIRM
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TrashPickupValidation;