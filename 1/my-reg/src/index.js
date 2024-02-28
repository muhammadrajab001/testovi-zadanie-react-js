import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './comp/header/header';
import Image from './comp/img/image';
import Main from './comp/main/main';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <>
  
   <Header/>
   <Image/>
   <Main/>
   </>
  </React.StrictMode>
);
