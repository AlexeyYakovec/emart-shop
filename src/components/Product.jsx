import React from 'react';

import { ImStarEmpty } from 'react-icons/im';
import { BsBag } from 'react-icons/bs';

const Product = ({ img, brand, title, price }) => {
  return (
    <div className='product-wrapper'>
      <div className='product-img'>
        <img src={img} alt='' />
      </div>
      <div className='product-info'>
        <div className='product-info-icons'>
          <ImStarEmpty size={18} className='product-star' />
          <BsBag size={18} className='product-bag' />
        </div>
        <h3 className='product-info-brand'>{brand}</h3>
        <h5 className='product-info-title'>{title}</h5>
        <h5 className='product-info-price'>{price} P.</h5>
      </div>
    </div>
  );
};

export default Product;
