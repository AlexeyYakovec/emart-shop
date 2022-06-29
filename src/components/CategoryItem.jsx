import React from 'react';

const CategoryItem = ({ item }) => {
  return (
    <div className='categoryItem'>
      <div className='categoryItem-img'>
        <img className='' src={item.img} alt='' />
      </div>

      <div className='categoryItem-info'>
        <h3>{item.title}</h3>
        <button className='btn-primary categoryItem-btn'>shop now</button>
      </div>
    </div>
  );
};

export default CategoryItem;
