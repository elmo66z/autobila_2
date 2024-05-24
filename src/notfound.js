import './assets/css/templatemo-sixteen.css';
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
import Category from './category';
import Footer from './Footer';
import Nav from './navbar';
import Banner from './banner';
//import { useEffect } from 'react';
//import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useLocation } from 'react-router-dom';
import Top from './totop';
import React, { useState, useEffect } from 'react';
import Load from './load';


function Not() {



  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);


  return (
    <>
      {isLoading ? (
        <Load />
      ) : (
        <>
          <header>
            <Nav  />
            <Top />
          </header>
          <h5>404 Not Found</h5>
        </>
      )}
    </>
  )

  
  }
  
  export default Not;
  