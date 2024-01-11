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
      <h1 className="font-bold text-2xl pt-6 pb-4">Mari Mengolah Sampah Menjadi Cuan Bersama Kami</h1>

      <div className='w-full my-8 grid grid-cols-3 gap-10 px-8'>
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
