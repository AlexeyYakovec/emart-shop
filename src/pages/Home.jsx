import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';

function Home() {
  return (
    <>
      <Announcement />
      <div className='container'>
        <Navbar />
        <Slider />
        Homepage
      </div>
    </>
  );
}

export default Home;
