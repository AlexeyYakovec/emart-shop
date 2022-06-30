import React from 'react';

import { FiSend } from 'react-icons/fi';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1 className='newsletter-title'>News</h1>
      <p className='newsletter-desc'>Get timely updates from your favorite products.</p>

      <div className='newsletter-input-wrapper'>
        <input type='text' name='' id='' placeholder='Enter emal...' />
        <button>
          <FiSend size={22} className='send' />
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
