import React from 'react';

const Product = ({ img, brand, title, price }) => {
  return (
    <div className='product-wrapper'>
      <div className='product-img'>
        <img src={img} alt='' />
      </div>
      <div className='product-info'>
        <h3 className='product-info-brand'>{brand}</h3>
        <h5 className='product-info-title'>{title}</h5>
        <h5 className='product-info-price'>{price} P.</h5>
      </div>
    </div>
  );
};

export default Product;
