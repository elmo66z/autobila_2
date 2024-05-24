import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import cartContext from './context/context';
import Footer from './Footer';
import './checkout.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './navbar';
import Top from './totop';
import Load from './load';


const Checkout = () => {
    const { cart, setCart } = useContext(cartContext);

    

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
    });



    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    const navigate = useNavigate();

    const handleCheckout = () => {
        console.log('Form Data:', formData);
        console.log('Order Items:', cart);
        toast.success('Checkout successful!');
        setCart([]);
        navigate('/');
    };

    return (
        <>
            <header>
                <Nav />
                <Top />
            </header>
            {isLoading ? (
                <Load />
            ) : (
                <>
                    <div className="checkall" >
                        <h2 className='l21cart'>ORDER SUMMARY</h2>
                        <span></span>
                        <p className='p1'>Quantity</p>
                        <p className='p2'>Price</p>
                        <p className='p3'>Total</p>
                        <div className="checkout-container">
                            {cart.map((product) => (
                                <div className="order-summary">
                                    <div className="order-item" key={product.title}>
                                        <img src={product.image} />
                                        <div className='tt'>
                                            <p className='namme'>{product.title}</p>
                                            <p className='qaun'>×{product.quantity}</p>
                                            <p className='price1'>${product.price * product.quantity}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <span className='span2'></span>
                            <div className='bo'>
                                <p>ITEMS TOTAL : ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</p>
                            </div>

                        </div>

                        <div className='paiment'>
                            <form action="#" className='cardd'>
                                <div className='righttt'>
                                    <div>
                                        <br></br>
                                        <p>By clicking on ‘Pay and Place Order’, you agree (i) to make your purchase from International
                                             E-commerce Solutions Morocco Ltd as merchant of record for this transaction, subject to
                                              International E-commerce Solutions Morocco Ltd’s Terms of Sale;
                                            (ii) that your information will be handled by International E-commer
                                            ce Solutions Morocco Ltd in accordance with the International E-commerce
                                            Solutions Morocco Ltd Privacy Policy;
                                            <br></br>
                                            <br></br>
                                            <br></br>
                                            <label class="form-check-w" for='card'>
                                                <input id="card" class="form-check-input" type="checkbox" value="" />
                                                I read and agree to the Terms of Sale.
                                            </label>

                                            <div className="actions">
                                                <button className='btns' onClick={handleCheckout}>Pay and place order</button>
                                                <br></br>
                                                <Link to="/cart" className='g'>Back to Cart</Link>
                                            </div>
                                        </p>

                                    </div>
                                </div>

                                <h1>SHIPPING METHOD</h1>
                                <p>Please choose your payment method</p>
                                <span className='span1'></span>
                                <div className="cards">
                                    <img src="http://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png" />
                                    <img id='im' src="http://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Master-Card-icon.png" />
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label" for='card'>
                                        Pay ${cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)} with credit card
                                    </label>
                                </div>
                                <div id="form-card" class="form-field">
                                    <label for="cc-number">Card number:</label>
                                    <input id="cc-number" maxlength="19" placeholder="1111 2222 3333 4444" />
                                </div>
                                <div id="form-date" class="form-field">
                                    <label for="expiry-month">Expiry date:</label>
                                    <div id="date-val">
                                        <select id="expiry-month" required>
                                            <option id="trans-label_month" value="" default="default" selected="selected">Month</option>
                                            <option value="1">01</option>
                                            <option value="2">02</option>
                                            <option value="3">03</option>
                                            <option value="4">04</option>
                                            <option value="5">05</option>
                                            <option value="6">06</option>
                                            <option value="7">07</option>
                                            <option value="8">08</option>
                                            <option value="9">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                        </select>
                                        <select id="expiry-year" required>
                                            <option id="trans-label_year" value="" default="" selected="selected">Year</option>
                                            <option value="2018">18</option><option value="2019">19</option><option value="2020">20</option><option value="2021">21</option><option value="2022">22</option><option value="2023">23</option><option value="2024">24</option><option value="2025">25</option><option value="2026">26</option><option value="2027">27</option><option value="2028">28</option><option value="2029">29</option><option value="2030">30</option><option value="2031">31</option><option value="2032">32</option><option value="2033">33</option><option value="2034">34</option><option value="2035">35</option><option value="2036">36</option><option value="2037">37</option><option value="2038">38</option><option value="2039">39</option><option value="2040">40</option><option value="2041">41</option><option value="2042">42</option><option value="2043">43</option><option value="2044">44</option><option value="2045">45</option><option value="2046">46</option><option value="2047">47</option></select>
                                    </div>
                                </div>
                                <div id="form-sec-code" class="form-field">
                                    <label for="sec-code">Security code:</label>
                                    <input type="password" maxlength="3" placeholder="123" required />
                                </div>
                            </form>
                        </div>
                    </div>
                    <ToastContainer />
                    <Footer />
                </>
            )}
        </>
    );
};

export default Checkout;
