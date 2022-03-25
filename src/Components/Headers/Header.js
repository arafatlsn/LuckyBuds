import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='header-container d-flex align-items-center justify-content-between p-5'>
      <div className='img-side-div'>
        <img src='amazon.png' alt='logo'/>
      </div>
      <div className='text-side-div'>
        <a href='/home' className='mx-2'>Home</a>
        <a href='/home' className='mx-2'>Orders</a>
        <a href='/home' className='mx-2'>About</a>
        <a href='/home' className='mx-2'>Blog</a>
      </div>
    </div>
  );
};

export default Header;