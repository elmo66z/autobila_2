import './css.css';
import Data from './json/all.json';
import './assets/css/templatemo-sixteen.css';
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
//import Login from './login';
import Footer from './Footer';
import Nav from './navbar';
import { Link } from 'react-router-dom';
import Nav_cat from './nav_cat';
import React, { useState, useEffect } from 'react';
import Load from './load';


const Engine = () => {


    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        
        const filteredData = Data['engine'] || [];

        setData(filteredData);
        setCount(filteredData.length);
    }, ["engine"]);


    const count1 = Object.keys(Data).length ;

    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 700);
    }, []);



    return (
        <>
            <header>
                <Nav />
                
            </header>
            <div className="back" >

                <div className="div-item">
                    <Nav_cat />
                    <h1>/ Engine</h1>
                    {isLoading ? (
                        <Load />
                    ) : (
                        <div className="row-item" onClick={() => {
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        }}>

                                <div className="col-item">
                                    <h3 className='lenght'>{count1} Products</h3>
                                    {data.map((item, index) => (
                                        <Link to={`/Detail${"engine"}/${item.title}`} key={index}>
                                            <div className="product-card">
                                                <div className="product-image">
                                                    <img width="250px" src={item.image} alt={item.title} />
                                                </div>
                                                <div className='details'>
                                                    <h1 className="name">{item.title}</h1>
                                                    <span className='price'>Price: $ {item.price}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}

                                </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>

    );

}

export default Engine;
