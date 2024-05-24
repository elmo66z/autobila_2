import './login/main.css'
import {auth ,GooglePovider} from './firebasee/firebase_config';
//import { useState } from 'react';
import { signInWithEmailAndPassword,signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
//import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
//import { useState } from 'react';


function Login (){


    useEffect(() => {
        const parallax = (event) => {
          document.querySelectorAll(".parallax-wrap span").forEach((shift) => {
            const position = shift.getAttribute("value");
            const x = (window.innerWidth - event.pageX * position) / 90;
            const y = (window.innerHeight - event.pageY * position) / 90;
    
            shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
          });
        };
    
        document.addEventListener("mousemove", parallax);
    
        // Cleanup the event listener when the component unmounts
        return () => {
          document.removeEventListener("mousemove", parallax);
        };
      }, []);

    const navigate = useNavigate()

    const Sign_in = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((data) => {
                console.log(data, "authData");
                toast.success('Welcome '+email+' !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                navigate('/');
            })
            .catch((error) => {
                toast.error(error.message + '!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
    }

    const Sign_in_google = (e) => {
        e.preventDefault()

        signInWithPopup(auth, GooglePovider).then(
            data => {
                console.log(data, "authData")
                navigate('/')
            }


        );

    }

    return (
        <>
            <ToastContainer />
            <h2 className='logo'><em>autobila</em></h2>
            <div className='Login'>
                <form className='loginForm' onSubmit={(e) => Sign_in(e)}>
                    <h3 className='formHeading'>Login Here</h3>

                    <label htmlFor='Email' className='formLabel'>
                        Email
                    </label>
                    <input
                        type='text'
                        placeholder='Email'
                        name='email'
                        id='Email'
                        className='formInput'
                    />

                    <label htmlFor='password' className='formLabel'>
                        Password
                    </label>
                    <input
                        type='password'
                        placeholder='Password'
                        name='password'
                        id='password'
                        className='formInput'
                    />

                    <input
                        type='submit'
                        className='formBtn btn'
                        value='Login'
                    />
                    <Link to='/Register' className='formLink'>
                        <a className='regi'>Register Now</a>
                    </Link>
                    {/* <Link to='/Admin' className='formLink'>
                        <a className='adminLink'>Admin</a>
                    </Link> */}
                    <a className='googleBtn' onClick={Sign_in_google}>
                            <img
                                className='googleIcon' width="20px"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1920px-Google_%22G%22_logo.svg.png" // Replace with your actual path
                                alt='Google Icon'
                            />
                            <a>Sign in with Google</a>
                    </a>
                </form>
            </div>

        </>
      );
    }

export default Login ;
