import React from 'react';

//components
import Announcement from '../components/Announcement';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Caregories from '../components/Caregories';

function Home() {
  return (
    <>
      <Announcement />
      <div className='container'>
        <Header />
        <Slider />
        <Caregories />
      </div>
    </>
  );
}

export default Home;
