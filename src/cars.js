import './css.css';
import Data_c from './json/car_custom.json';
import './assets/css/templatemo-sixteen.css';
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
import Login from './login';
import Footer from './Footer';
import Nav from './navbar';
import { Link } from 'react-router-dom';
import Nav_cat from './nav_cat';
import './cars.css';
import Luxur from './carslogo';

const Cars = () => {
    return (
        <>

            <header>
                <Nav />
            </header>
            <div className="back" >
                <div class="product">
                    <div class="product__images">
                        <h7>For Cars akhi :)</h7>
                    </div>
                </div>
                <Luxur/>
            </div>
            <Footer />
        </>

    );

}

export default Cars;
