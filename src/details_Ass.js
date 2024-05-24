import './assets/css/templatemo-sixteen.css';
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
//import Login from './login';
import Footer from './Footer';

import Nav from './navbar';
import Data_a from './json/Accessories.json';
import { Link, useParams } from 'react-router-dom';
import Nav_cat from './nav_cat';
import './cart.css';
import Load from './load';
import React, { useState, useEffect, useContext } from 'react';
import cartContext from './context/context';
import Top from './totop';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Detalis_Ass= () => {

    const {producttitle} = useParams();
    const thisproduct = Data_a.find(prod => prod.title === producttitle);


    const {setCart} = useContext(cartContext)

    // const Addtocart = (pro) => {
    //     setCart(prev => [...prev,pro]);
    //     Setincart(true)
    // };
    // const Addtocart = () => {
    //     setCart(prev => {
    //       const updatedCart = [...prev, thisproduct];
    //       console.log("Added to Cart:", thisproduct); // Log the entire product object
    //       return updatedCart;
    //     });
      
    //     Setincart(true);
    //   };
      const Addtocart = () => {
        setCart(prev => {
          const existingProductIndex = prev.findIndex(item => item.title === thisproduct.title);
      
          if (existingProductIndex !== -1) {
            // If the product already exists in the cart, update its quantity
            const updatedCart = [...prev];
            updatedCart[existingProductIndex].quantity += 1;
            console.log("Updated Cart:", updatedCart);
            return updatedCart;
          } else {
            // If the product is not in the cart, add it with quantity 1
            const updatedCart = [...prev, { ...thisproduct, quantity: 1 }];
            console.log("Added to Cart:", thisproduct);
            return updatedCart;
          }
        });
      
        Setincart(true);
        toast.success('🛒 Item added to cart!', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
      };
      
    


    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 700);
    }, []);

    const [incart,Setincart] = useState(false)

    const [randomProducts, setRandomProducts] = useState([]);  



    const fetchRandomProducts = () => {
        try {
            setRandomProducts(Data_a);
        } catch (error) {
            console.error('Error setting random products:', error);
        }
    };

    useEffect(() => {
        fetchRandomProducts();
    }, []);

    const handleProductClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 700); 
    };

    
    return (
        <>
            <header>
            <Top />
                <Nav />
            </header>
            <div className="div-item">
                <Nav_cat />
                <h1>/  Accessories / {thisproduct.title}</h1>
                {isLoading ? (
                    <Load />
                ) : (
                    <div className="prod_de">
                        <div className="col-item">
                            <img className='img_pro' src={thisproduct.image} />
                            <div className='div_pro'>
                                <h1 className='title_pro'>{thisproduct.title}</h1>
                                <h2 className='price'>Price : $ {thisproduct.price}</h2>
                                    <h1 className='details_pro'>
                                        {thisproduct.details}
                                        I'm a product detail. I'm a great place to add more information about your product such as sizing, material, care and cleaning instructions. This is also a great space to write what makes this product special and how your customers can benefit from this item. Buyers like to know what they’re getting before they purchase, so give them as much information as possible so they can buy with confidence and certainty.
                                    </h1>
                                    <div className='btns'>
                                        <a className='add_cart' inverted="true" onClick={() => { Addtocart(thisproduct.title) }}>
                                            ADD TO CART
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="random-products-slider">
                    <h2>Random Products</h2>
                    <br></br>
                    <div className="slider-container" onClick={() => {
                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                    }} >
                        {randomProducts.map((product, index) => (
                            <Link to={`/DetailsAccessoires/${product.title}`} key={index}>
                                <div className="slider-slide" onClick={handleProductClick}>
                                    <img src={product.image} alt={product.title} />
                                    <h3>{product.title}</h3>
                                    <p>{product.details}</p>
                                    <p>Price: ${product.price}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <ToastContainer />
                {isLoading && <Load />}
            </div>
            <Footer />
        </>
    )

}

export default Detalis_Ass;