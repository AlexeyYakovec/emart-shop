import React from 'react';
import Carousel from 'better-react-carousel';

const dataSlide = [
  {
    title: 'man`s',
    desc: "don't composise on style! get flat 30% off for new arrivals",
    img: './img/slide-1.jpg',
  },
  {
    title: 'woman`s',
    desc: "don't composise on style! get flat 30% off for new arrivals",
    img: './img/slide-2.jpg',
  },
  {
    title: 'shop info',
    desc: "don't composise on style! get flat 30% off for new arrivals",
    img: './img/slide-3.jpg',
  },
];

const Slider = () => {
  return (
    <div className='slider-container'>
      <Carousel cols={1} rows={1} gap={5} loop={true} autoplay={5000}>
        {dataSlide.map(({ title, desc, img }) => (
          <Carousel.Item>
            <div className='carousel-wrapper flex'>
              <img src={img} alt='' />
              <div className='info-container'>
                <h1 className='info-title'>{title}</h1>
                <p className='info-desc'>{desc}</p>
                <button className='btn-primary info-btn '>SHOP NOW</button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
