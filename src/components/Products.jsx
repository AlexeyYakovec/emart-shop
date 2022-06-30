import React from 'react';

//dataBase
import { popularProducts } from '../data';

import Product from './Product';

const Products = () => {
  return (
    <div className='products'>
      {popularProducts.map(({ id, img, brand, shoeType, title, price }) => (
        <Product key={id} img={img} brand={brand} shoeType={shoeType} title={title} price={price} />
      ))}
    </div>
  );
};

export default Products;
