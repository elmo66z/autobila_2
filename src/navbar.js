import { Link, useNavigate } from "react-router-dom";
import "./assets/css/templatemo-sixteen.css";
import './assets/css/templatemo-sixteen.css';
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
import { signOut } from "firebase/auth";
import { auth } from "./firebasee/firebase_config";
import cartContext from "./context/context";
import { useContext } from "react";




const Nav = () => {

    const {cart} = useContext(cartContext)

    const history = useNavigate();
    const Login_out = () => {
         signOut(auth).then(
            val=>{
                console.log(val)
                history('/Login')
            }
         )
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg ">
                <div class="container">
                    <a target="_blank" href="https://www.instagram.com/el_mo66z/" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler-brand-instagram" width="26" height="26" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                            <path d="M16.5 7.5l0 .01"></path>

                        </svg>
                    </a>
                    <Link to="/">
                        <a class="navbar-brand" href="index.html"><h2><svg preserveAspectRatio="xMidYMid meet" data-bbox="10 55 180 90" viewBox="10 55 180 90" height="50" width="50" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img" aria-label="Homepage">
                        </svg><em>autobila</em></h2></a>
                    </Link>
                    <div className="icons">

                        <Link to="/Cart">
                            <div class="navbar-toggler-1" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-bag" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z"></path>
                                <path d="M9 11v-5a3 3 0 0 1 6 0v5"></path>
                            </svg>
                            <i><i>{cart.length}</i></i>
                            </div>
                        </Link>
                        <div  onClick={Login_out} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                                <path d="M9 12h12l-3 -3"></path>
                                <path d="M18 15l3 -3"></path>
                            </svg>
                        </div>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto navbar-light">
                            <li class="nav-item active nav-Light">
                                <Link to="/">
                                <a class="nav-link" href="#">Home</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/All Products">
                                    <a class="nav-link" href="#">Products</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Cars">
                                    <a class="nav-link" href="#">Cars</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Nav;