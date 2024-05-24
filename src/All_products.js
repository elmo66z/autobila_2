import Data from './json/all.json';
import './assets/css/templatemo-sixteen.css';
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
//import Login from './login';
import Footer from './Footer';
import Nav from './navbar';
//import { Link } from 'react-router-dom';
import Nav_cat from './nav_cat';
import { Link } from 'react-router-dom';
import Top from './totop';
import { useState } from 'react';
import Load from './load';
import { useEffect } from 'react';
import { data } from 'jquery';


const All_Products = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const filterdata = [
            ...Data["wheels"],
            ...Data["engine"],
            ...Data["accessories"],
            ...Data["bodyparts"],
        ];

        setData(filterdata);
    }, [Data]);

    const count = data.length;

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);


    const [currentPage, setCurrentPage] = useState(1);

    const productsPerPage = 6;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
    const pageCount = Math.ceil(data.length / productsPerPage);

    const changePage = (page) => {
        setCurrentPage(page);
    };


    return (
        <>
            <header>
                <Nav />
                <Top />
            </header>
            <div className="back" >


                <div className="div-item">
                    <Nav_cat />
                    <h1>/All Products</h1>
                    {isLoading ? (
                        <Load />
                    ) : (
                        <>
                            <div className="pagination1" onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }}>
                                {Array.from({ length: pageCount }).map((_, index) => (
                                    <div className='btnpagination'>
                                        <button
                                            key={index}
                                            onClick={() => changePage(index + 1)}
                                            className={currentPage === index + 1}>

                                            {index + 1}
                                        </button>
                                    </div>


                                ))}
                            </div>
                            <div className="row-item">
                                <div className="col-item" onClick={() => {
                                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                }}>
                                    <h3 className='lenght'>{count} Products</h3>
                                    {currentProducts.map((data, key) => {
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

                            <div className="pagination" onClick={() => {
                                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                            }}>
                                {Array.from({ length: pageCount }).map((_, index) => (
                                    <div className='btnpagination'>
                                        <button
                                            key={index}
                                            onClick={() => changePage(index + 1)}
                                            className={currentPage === index + 1}>

                                            {index + 1}
                                        </button>
                                    </div>


                                ))}
                            </div>


                        </>

                    )
                    }


                </div>

            </div>
            <Footer />
        </>

    );

}

export default All_Products;
