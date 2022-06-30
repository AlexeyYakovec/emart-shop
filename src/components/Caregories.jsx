import React from 'react';

import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Caregories = () => {
  return (
    <div className='categories'>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Caregories;
