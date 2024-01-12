import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductListCard from '../components/ProductListCard';
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://659cb07f633f9aee7907cf7e.mockapi.io/trash-2-cash/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='px-10'>
            <h1 className="animation2 font-bold text-[#455A64] text-4xl pt-8 pb-4">Product List</h1>

            <div className='animation1 flex items-center justify-center w-full my-3'>
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
                <Link to={`/admin/product/id`} className='w-1/3'>
                    <div className='rounded-2xl bg-[#FFB534] hover:bg-[#EFA42B] text-white font-semibold flex py-[10px] ml-3 justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 13H13V20H11V13H4V11H11V4H13V11H20V13Z" fill="white" />
                        </svg>
                        <p className='ml-4'>ADD PRODUCT</p>
                    </div>
                </Link>
            </div>

            <div className='mt-[50px] grid grid-cols-2 gap-9 px-6'>
                {products.map((product) => (
                    <ProductListCard key={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        stock={product.stock}
                        id={product.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
