import {
    Step,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    StepDescription,
    Stepper,
    useSteps,
    Box,
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';

const steps = [
    { title: 'Choose Trash Bank' },
    { title: 'Trash Validation' },
    { title: 'Confirmation of Retrieval' },
]

const stepsConfirmation = [
    { title: 'Checking', description: 'Admin is checking your trash' },
    { title: 'Planning', description: 'Admin is planning for trash pickup' },
    { title: 'Ongoing', description: 'Driver is on the way' },
    { title: 'Trash Received', description: 'Trash has been received' },
]

const TrashPickupConfirmation = () => {

    const { activeStep: activeStep1 } = useSteps({
        index: 3,
        count: steps.length,
    })


    const [currentStep, setCurrentStep] = useState(1);

    const handleStepClick = (index) => {
        setCurrentStep(index + 1);
    };
    const { activeStep } = useSteps({
        index: currentStep,
        count: stepsConfirmation.length,
    })

    const [note, setNote] = useState('');

    useEffect(() => {
        switch (currentStep) {
            case 1:
                setNote('Admin is checking your trash');
                break;
            case 2:
                setNote('Admin is planning for trash pickup');
                break;
            case 3:
                setNote('Driver is on the way');
                break;
            case 4:
                setNote('Trash has been received');
                break;
            default:
                setNote('');
        }
    }, [currentStep]);

    return (
        <div className="px-10">
            <h1 className="animation1 font-semibold text-base md:text-lg py-6 lg:font-bold lg:text-2xl lg:pt-6 lg:pb-4">Mari Mengolah Sampah Menjadi Cuan Bersama Kami</h1>
            <iframe className='animation2 w-full h-48 md:h-52 lg:h-64'
                title="Current Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.8444981505824!2d116.83418621432783!3d-1.2622993359491928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323623e18f13e041%3A0x1d9ef4cdef6da70e!2sBSB%20Mall!5e0!3m2!1sen!2sid!4v1643288365965!5m2!1sen!2sid"
                allowFullScreen
            ></iframe>

            <div className='hidden lg:block lg:my-6 animation1'>
                <Stepper index={activeStep1} colorScheme='teal'>
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

            <div className='mt-[58px] ml-4 xl:w-2/3 lg:w-4/5 md:ml-0 md:w-full lg:mx-auto animation3'>
                <div className='md:hidden mb-20'>
                    <Stepper index={currentStep} colorScheme='teal' orientation="vertical" height='350px' gap='0'>
                        {stepsConfirmation.map((step, index) => (
                            <Step key={index} onClick={() => handleStepClick(index)}>
                                <StepIndicator>
                                    <StepStatus
                                        complete={<StepIcon />}
                                        incomplete={<StepNumber />}
                                        active={<StepNumber />}
                                    />
                                </StepIndicator>

                                <Box flexShrink='0'>
                                    <StepTitle>{step.title}</StepTitle>
                                    <StepDescription>{step.description}</StepDescription>
                                </Box>

                                <StepSeparator />
                            </Step>
                        ))}
                    </Stepper>
                </div>
                <div className='hidden md:block'>
                    <Stepper index={currentStep} colorScheme='teal'>
                        {stepsConfirmation.map((step, index) => (
                            <Step key={index} onClick={() => handleStepClick(index)}>
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
            </div>
            <div className='hidden md:block animation2 p-8 bg-gray-100 border-green-600 border-2 w-1/2 items-center mx-auto my-14 border-dotted'>
                <h3 className='font-semibold mb-1'>Note:</h3>
                <p>{note}</p>
            </div>
        </div>
    );
};

export default TrashPickupConfirmation;
