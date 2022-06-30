import React from 'react';

//components
import Announcement from '../components/Announcement';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Caregories from '../components/Caregories';
import Footer from '../components/Footer';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';

function Home() {
  return (
    <>
      <Announcement />
      <div className='container'>
        <Header />
        <Slider />
        <Caregories />
        <Products />
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}

export default Home;
