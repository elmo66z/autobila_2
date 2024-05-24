import './css.css';
import Data from  './json/all.json';
import './assets/css/templatemo-sixteen.css';
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
import Login from './login';
import Footer from './Footer';
import Nav from './navbar';
import { Link } from 'react-router-dom';
import Nav_cat from './nav_cat';
import Load from './load';
import React, { useState, useEffect } from 'react';
import {  useMycontect } from './context/context';

const Accessories = () => {

    const [data, setData] = useState([]);
    const count = Data.length ;
    const [isLoading, setIsLoading] = useState(true);


    useEffect(()=>{
        const filterdata = Data["accessories"]
        setData(filterdata)
    })

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
            <div className="back">
                <div className="div-item">
                    <Nav_cat />
                    <h1>/ Accessories</h1>
                    {isLoading ? (
                        <Load />
                    ) : (
                        <div className="row-item" onClick={() => {
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        }}>
                            <div className="col-item">
                                <h3 className="lenght">{count} Products</h3>
                                {data.map((data_a, ind) => {
                                    return (
                                        <Link to={`/DetailsAccessoires/${data_a.title}`} key={ind}>
                                            <div className="product-card">
                                                <div className="product-image">
                                                    <img width="250px" src={data_a.image} alt={data_a.title} />
                                                </div>
                                                <div className="details">
                                                    <h1 className="name">{data_a.title}</h1>
                                                    <span className="price">Price: $ {data_a.price}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Accessories;
