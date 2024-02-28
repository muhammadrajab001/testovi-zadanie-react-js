import React, { useState } from 'react';
import './image.css';
import imag1 from './Card.svg';
import img1 from './Card (1).svg'
import img2 from './Card (2).svg'
import img3 from './Card (3).svg'
import img4 from './2.svg'
import img5 from './3.svg'
import img6 from './4.svg'
import img7 from './5.svg'
const Image = () => {
  const [isOpen, setOpen] = useState(false);

  const openNewSite = () => { 
    const newSiteUrl = 'http://localhost:3001/'; // Замените на URL, который нужно открыть
    window.open(newSiteUrl, '_blank');  // Открыть новое окно с указанным URL
  };

  return (
    <div className='all_picture'>
      <img src={imag1} alt='' onClick={openNewSite} />
      <img src={img1} alt=''  ></img>
      <img src={img2} alt=''></img>
      <img src={img3} alt=''></img>
      <div>
      <img src={img4} alt=''></img>
      <img src={img5} alt=''></img>
      <img src={img6} alt=''></img>
      <img src={img7} alt=''></img>
        
      </div>
      <header className='header'>
        <button className='menu-button' onClick={() => setOpen(!isOpen)}>
          <nav className={isOpen ? 'active' : ''}></nav>
        </button>
        <section>
       
        </section>
      </header>
      <select className='product'>
        <option  value={1}>Показать еще</option>
      </select>
    </div>
  );
};

export default Image;
