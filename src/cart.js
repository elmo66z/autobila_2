import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Nav from './navbar';
import { useContext } from 'react';
import cartContext from './context/context';
import { Link } from 'react-router-dom';
import "./cart.css";
import Load from './load';
import Top from './totop';

const Cart = () => {
    const { cart, setCart } = useContext(cartContext);
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    const decreaseQuantity = (productTitle) => {
        const updatedCart = cart
            .map(product =>
                product.title === productTitle
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
            .filter(product => product.quantity > 0); // Remove products with quantity 0
        setCart(updatedCart);
    };

    const increaseQuantity = (productTitle) => {
        const updatedCart = cart.map(product =>
            product.title === productTitle
                ? { ...product, quantity: product.quantity + 1 }
                : product
        );
        setCart(updatedCart);
    };

    const removeProduct = (productTitle) => {
        const updatedCart = cart.filter(product => product.title !== productTitle);
        setCart(updatedCart);
    };




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
                <Top />
            </header>
            <div className='Cartall'>
                {isLoading ? (
                    <Load />
                ) : (
                    <>
                        {
                            cart.length === 0 ? (
                                <div className='empty-cart'>
                                    <h1>Your Cart is Empty</h1>
                                </div>
                            ) : (
                                <>

                                    {cart.map((product) => (
                                        <div className='card' >
                                            <div key={product.title}>
                                                <div>
                                                    <img className='imgs' src={product.image} alt={product.title} />
                                                    <div className='elements'>
                                                        <div className='ele1'>
                                                            <h1>{product.title}</h1>
                                                            <h2>Price: $ {product.price}</h2>
                                                            <div className='Q'>
                                                                <p>Quantity : {product.quantity}</p>
                                                                <button onClick={() => increaseQuantity(product.title)} ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-plus" width="20" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg></button>
                                                                <button onClick={() => decreaseQuantity(product.title)}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-minus" width="20" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l14 0" /></svg></button>
                                                                <button onClick={() => removeProduct(product.title)} className='delete' ><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="22" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></button>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <h1 className='h1cart'>Your Cart</h1>
                                    <div className='righ'>
                                        <h1>ORDER SUMMARY</h1>
                                        <h2>Subtotal <a>${totalPrice.toFixed(2)}</a> </h2>
                                        <h2>Delivery  <a>FREE</a></h2>
                                        <span>You have unlocked free delivery!</span>
                                        <h2>Total <a>${totalPrice.toFixed(2)}</a> </h2>
                                        <br></br>
                                        <Link to="/checkout" className='Pay'>
                                            PAYMENT
                                        </Link>
                                    </div>
                                </>
                            )
                        }
                    </>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Cart;