import './css.css';
import Data from './json/all.json';
import './assets/css/templatemo-sixteen.css';
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
import Login from './login';
import Footer from './Footer';
import Nav from './navbar';
import { Link } from 'react-router-dom';
import Load from './load';
import React, { useState, useEffect } from 'react';
import Nav_cat from './nav_cat';


const Products = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        const filterdata = Data["wheels"]
        setData(filterdata)
    })

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
                    <h1>/ Wheels & Rims</h1>
                    {isLoading ? (
                        <Load />
                    ) : (
                        <div className="row-item" onClick={() => {
                            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                        }}>

                            <div className="col-item">
                                <h3 className='lenght'>{count1} Products</h3>
                                {data.map((data, key) => {
                                    return (
                                        <Link to={`/DetailsWheels/${data.title}`}>
                                            <div className="product-card" key={key}>
                                                <div className="product-image">

                                                    <img width="250px" src={data.image} alt={data.title} />
                                                </div>
                                                <div className='details'>
                                                    <h1 className="name">{data.title}</h1>
                                                    <span className='price'>Price : ${data.price}</span>
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

export default Products;
