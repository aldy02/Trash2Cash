import React from 'react';

const PickupConfirmation = () => {
    
    const handleClick = () => {
        alert(`It Worked, Just To Make Sure This Button Work. We Will Add The Advanced Functionality Later!`);
    };

    return (
        <div className="lg:px-10 px-8">
            <h1 className="animation2 font-bold text-[#455A64] text-[26px] lg:text-4xl pt-6 lg:pt-8 lg:pb-4">Pickup Conformation List</h1>

            <div className='animation1 w-full my-3'>
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search Product"
                        className='w-full py-2 pl-11 rounded-2xl border-2 border-gray-400'
                    />
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-gray-400"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </div>
                </div>
            </div>

            <div className='animation3 grid md:grid-cols-2 gap-9 my-10 px-6 justify-center'>
                {/* Item1 */}
                <div className='bg-gray-50 hover:bg-gray-100 px-6 py-7 shadow-md rounded-md'>
                    <div className='flex'>
                        <div className='image-cintainer w-36 h-36 bg-gray-300 rounded-xl flex items-center justify-center mr-8'>
                            <p>Photo Here</p>
                        </div>
                        <div className='detail flex flex-col justify-center'>
                            <h2 className='font-bold text-[#263238] text-xl lg:text-[26px]'>Aldy Rahman</h2>
                            <hr className="border-t-1 border-[#bdbdbd] my-3" />
                            <div className='flex text-sm lg:text-base'>
                                <div className='mr-6'>
                                    <p className='text-[#7B7B7B]'>Customer Location</p>
                                    <p className='text-[#181818] font-medium'>Jl. Dahlina Raya 2</p>
                                </div>
                                <div>
                                    <p className='text-[#7B7B7B]'>Trash Bank Location</p>
                                    <p className='text-[#181818] font-medium'>Jl. Ahmad Yani</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick} className='mt-6 text-[#7B7B7B] font-semibold hover:border-black hover:text-black border-2 border-[#7B7B7B] py-2 rounded-lg w-full'>Confirmation of Retrieval</button>
                </div>
                {/* Item2 */}
                <div className='bg-gray-50 hover:bg-gray-100 px-6 py-7 shadow-md rounded-md'>
                    <div className='flex'>
                        <div className='image-cintainer w-36 h-36 bg-gray-300 rounded-xl flex items-center justify-center mr-8'>
                            <p>Photo Here</p>
                        </div>
                        <div className='detail flex flex-col justify-center'>
                            <h2 className='font-bold text-[#263238] text-[26px]'>Aldy Rahman</h2>
                            <hr className="border-t-1 border-[#bdbdbd] my-3" />
                            <div className='flex'>
                                <div className='mr-6'>
                                    <p className='text-[#7B7B7B]'>Customer Location</p>
                                    <p className='text-[#181818] font-medium'>Jl. Dahlina Raya 2</p>
                                </div>
                                <div>
                                    <p className='text-[#7B7B7B]'>Trash Bank Location</p>
                                    <p className='text-[#181818] font-medium'>Jl. Ahmad Yani</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick} className='mt-6 text-[#7B7B7B] font-semibold hover:border-black hover:text-black border-2 border-[#7B7B7B] py-2 rounded-lg w-full'>Confirmation of Retrieval</button>
                </div>
                {/* Item3 */}
                <div className='bg-gray-50 hover:bg-gray-100 px-6 py-7 shadow-md rounded-md'>
                    <div className='flex'>
                        <div className='image-cintainer w-36 h-36 bg-gray-300 rounded-xl flex items-center justify-center mr-8'>
                            <p>Photo Here</p>
                        </div>
                        <div className='detail flex flex-col justify-center'>
                            <h2 className='font-bold text-[#263238] text-[26px]'>Aldy Rahman</h2>
                            <hr className="border-t-1 border-[#bdbdbd] my-3" />
                            <div className='flex'>
                                <div className='mr-6'>
                                    <p className='text-[#7B7B7B]'>Customer Location</p>
                                    <p className='text-[#181818] font-medium'>Jl. Dahlina Raya 2</p>
                                </div>
                                <div>
                                    <p className='text-[#7B7B7B]'>Trash Bank Location</p>
                                    <p className='text-[#181818] font-medium'>Jl. Ahmad Yani</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick} className='mt-6 text-[#7B7B7B] font-semibold hover:border-black hover:text-black border-2 border-[#7B7B7B] py-2 rounded-lg w-full'>Confirmation of Retrieval</button>
                </div>
                {/* Item4 */}
                <div className='bg-gray-50 hover:bg-gray-100 px-6 py-7 shadow-md rounded-md'>
                    <div className='flex'>
                        <div className='image-cintainer w-36 h-36 bg-gray-300 rounded-xl flex items-center justify-center mr-8'>
                            <p>Photo Here</p>
                        </div>
                        <div className='detail flex flex-col justify-center'>
                            <h2 className='font-bold text-[#263238] text-[26px]'>Aldy Rahman</h2>
                            <hr className="border-t-1 border-[#bdbdbd] my-3" />
                            <div className='flex'>
                                <div className='mr-6'>
                                    <p className='text-[#7B7B7B]'>Customer Location</p>
                                    <p className='text-[#181818] font-medium'>Jl. Dahlina Raya 2</p>
                                </div>
                                <div>
                                    <p className='text-[#7B7B7B]'>Trash Bank Location</p>
                                    <p className='text-[#181818] font-medium'>Jl. Ahmad Yani</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick} className='mt-6 text-[#7B7B7B] font-semibold hover:border-black hover:text-black border-2 border-[#7B7B7B] py-2 rounded-lg w-full'>Confirmation of Retrieval</button>
                </div>
                {/* Item5 */}
                <div className='bg-gray-50 hover:bg-gray-100 px-6 py-7 shadow-md rounded-md'>
                    <div className='flex'>
                        <div className='image-cintainer w-36 h-36 bg-gray-300 rounded-xl flex items-center justify-center mr-8'>
                            <p>Photo Here</p>
                        </div>
                        <div className='detail flex flex-col justify-center'>
                            <h2 className='font-bold text-[#263238] text-[26px]'>Aldy Rahman</h2>
                            <hr className="border-t-1 border-[#bdbdbd] my-3" />
                            <div className='flex'>
                                <div className='mr-6'>
                                    <p className='text-[#7B7B7B]'>Customer Location</p>
                                    <p className='text-[#181818] font-medium'>Jl. Dahlina Raya 2</p>
                                </div>
                                <div>
                                    <p className='text-[#7B7B7B]'>Trash Bank Location</p>
                                    <p className='text-[#181818] font-medium'>Jl. Ahmad Yani</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick} className='mt-6 text-[#7B7B7B] font-semibold hover:border-black hover:text-black border-2 border-[#7B7B7B] py-2 rounded-lg w-full'>Confirmation of Retrieval</button>
                </div>
                {/* Item6 */}
                <div className='bg-gray-50 hover:bg-gray-100 px-6 py-7 shadow-md rounded-md'>
                    <div className='flex'>
                        <div className='image-cintainer w-36 h-36 bg-gray-300 rounded-xl flex items-center justify-center mr-8'>
                            <p>Photo Here</p>
                        </div>
                        <div className='detail flex flex-col justify-center'>
                            <h2 className='font-bold text-[#263238] text-[26px]'>Aldy Rahman</h2>
                            <hr className="border-t-1 border-[#bdbdbd] my-3" />
                            <div className='flex'>
                                <div className='mr-6'>
                                    <p className='text-[#7B7B7B]'>Customer Location</p>
                                    <p className='text-[#181818] font-medium'>Jl. Dahlina Raya 2</p>
                                </div>
                                <div>
                                    <p className='text-[#7B7B7B]'>Trash Bank Location</p>
                                    <p className='text-[#181818] font-medium'>Jl. Ahmad Yani</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClick} className='mt-6 text-[#7B7B7B] font-semibold hover:border-black hover:text-black border-2 border-[#7B7B7B] py-2 rounded-lg w-full'>Confirmation of Retrieval</button>
                </div>
            </div>
        </div>
    );
};

export default PickupConfirmation;