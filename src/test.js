import './assets/css/templatemo-sixteen.css';
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
//import Login from './login';
import Footer from './Footer';
import Nav from './navbar';
import Data_a from './json/Accessories.json';
import { useParams } from 'react-router-dom';


const Checkout = () => {

    const {productt} = useParams();
    const thisproduct = Data_a.find(pro => pro.title === productt);
    console.log(productt)
        
    return (
        <>
            <header>
                <Nav />
            </header>
            <div className="div-item">
                <h1>/ Checkout / {thisproduct.title} </h1>
                <div className="prod_de">
                    <div className="col-item">
                        <h1>{thisproduct.price}</h1>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Checkout 

///////
                                    <div className='btns'>
                                        <a className='add_cart' onClick={() => handleAddToCart(thisproduct.title)} >add to cart</a>
                                        <Link to={`/Checkout${thisproduct.title}`} params={thisproduct.title}>
                                            <a className='buy_now' >buy now</a>
                                        </Link>
                                    </div>


    const handleAddToCart = (name) => {
        setCart( [...cart,name],setcount(count + 1))
        console.log('cart',cart)
      }

////

                <Link to="/Cart">
                    <div class="navbar-toggler-1" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-bag" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
                        <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
                    </svg>
                        <i>{count}</i>
                    </div>
                </Link>
