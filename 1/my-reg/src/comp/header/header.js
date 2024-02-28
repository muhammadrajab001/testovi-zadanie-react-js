import React, { useState } from 'react';
import header from './header.css'
const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header>
      <div className='cart_nav'>
        <div className='nav_cart'>
          <h3 className='cart_text'>Наша команда</h3>
          <p className='cart_text_1'>Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые ложатся на их плечи, и умеющие находить выход из любых, даже самых сложных ситуаций.</p>
          <button className='button' onClick={handleShow}>Вход</button>
        </div>
      </div>
      {show && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={handleClose}>&times;</span>
            <h2 className='reg'> Регистрация</h2>
            <form className='form'>
              <label className='text_3'>Имя</label>
              <input className='text_1' type='text' placeholder='Артур' />
              <label  className='text_3'>Электронная почта</label>
              <input className='text_1' type='email' placeholder='example@mail.ru' />
              <label  className='text_3'>Пароль</label>
              <input className='text_1' type='password' placeholder='' />
              <label  className='text_3'>Подтвердите пароль</label>
              <input className='text_1' type='password' placeholder='' />
              <button className='text_6' type='submit'>Зарегистрироваться</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
