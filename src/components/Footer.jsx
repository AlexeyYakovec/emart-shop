import React from 'react';

const data = [
  {
    title: 'Support',
    linkOne: 'Buyer Help',
    linkTwo: 'Shipping and Payment',
    linkThree: 'Returns',
    linkFour: 'Loyalty Program',
  },
  {
    title: 'Information',
    linkOne: 'Contacts',
    linkTwo: 'Stores',
    linkThree: 'Blog',
    linkFour: 'Jobs',
  },
];

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-body'>
        <div className='footer-body-item'>footer</div>
        <div className='footer-body-item'>footer</div>
        {data.map((item) => (
          <div className='footer-body-item'>
            <h3 className='footer-title'>{item.title}</h3>
            <ul className='footer-list'>
              <li className='footer-list-item'>{item.linkOne}</li>
              <li className='footer-list-item'>{item.linkTwo}</li>
              <li className='footer-list-item'>{item.linkThree}</li>
              <li className='footer-list-item'>{item.linkFour}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
