import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='header-container d-flex align-items-center justify-content-between'>
      <div className='img-side-div'>
        <img src='amazon.png' alt='logo'/>
      </div>
      <div className='text-side-div'>
        <a href='/home'>Home</a>
        <a href='/home'>Orders</a>
        <a href='/home'>About</a>
        <a href='/home'>Blog</a>
      </div>
    </div>
  );
};

export default Header;