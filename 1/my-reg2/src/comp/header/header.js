import React from 'react';
import './header.css';

const Header = () => {
  const handleHomePage = () => {
    const newSiteUrl = 'http://localhost:3000/'; 
    window.open(newSiteUrl, '_self'); 
  };

  const handleRegistrationForm = () => {
    const registrationUrl = 'http://localhost:3000/registration';
    window.open(registrationUrl, '_blank'); 
  }

  return (
    <header className='header'>
      <div className='cart_header'>
        <div className='header_cart'>
          <button className='but_1' onClick={handleHomePage} type='button'>Назад</button>

          <h3 className='cart_text'>Артур Королёв</h3>
          <h3 className='cart_text_1'>Партнер</h3>
          <button className='btn_3' onClick={handleRegistrationForm} type='button'>Выход</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
