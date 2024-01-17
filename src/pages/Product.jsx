import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { Link } from "react-router-dom";

const Product = () => {
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
      <h1 className="animation1 font-semibold text-base sm:text-lg py-6 sm:font-bold lg:text-2xl lg:pt-6 lg:pb-4">Mari Mengolah Sampah Menjadi Cuan Bersama Kami</h1>

      <div className='w-full mt-2 mb-8 lg:my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-7 lg:px-8'>
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <ProductCard key={product.id}
              image={product.image}
              title={product.title}
              sold={product.total_sold}
              price={product.price}
            />
        </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
