import React from 'react';

import { IoMdArrowDropright, IoMdArrowDropleft } from 'react-icons/io';

const Slider = () => {
  return (
    <div className='slider-container container hidden'>
      <div className='arrow-border arrow-left' direction='left'>
        <IoMdArrowDropleft size={28} />
      </div>

      <div className='slide-wrapper'>
        <div className='img-container'>
          <img src='./img/slide-1.jpg' alt='' />
        </div>
        <div className='info-container'>
          <h1 className='info-title'>summer sal</h1>
          <p className='info-desc'>don't composise on style! get flat 30% off for new arrivals</p>
          <button className='btn-primary info-btn '>show now</button>
        </div>
      </div>

      <div className='slide-wrapper'>
        <div className='img-container'>
          <img src='./img/slide-1.jpg' alt='' />
        </div>
        <div className='info-container'>
          <h1 className='info-title'>summer sal</h1>
          <p className='info-desc'>don't composise on style! get flat 30% off for new arrivals</p>
          <button className='btn-primary info-btn '>show now</button>
        </div>
      </div>
      <div className='arrow-border arrow-right' direction='right'>
        <IoMdArrowDropright size={28} />
      </div>
    </div>
  );
};

export default Slider;
