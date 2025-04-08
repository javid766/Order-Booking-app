import React from 'react';
import ProductCard from '../ProductCard';
import { FlashsaleProductsData } from '../../utils/data';

const FlashsaleProducts = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 velmld-parent'>
      {FlashsaleProductsData.map((item, index) => (
        <ProductCard key={index} item={item} />
      ))}
    </div>
  );
};

export default FlashsaleProducts;
