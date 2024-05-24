import './login/main.css'
import {auth} from './firebasee/firebase_config';
//import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { useState } from 'react';


function Register (){

    //const [showalert,Setshowalert] = useState(false);
    
    const history = useNavigate() ;

    //const navigationtoLogin = () => { 
        //history("/Login")
    //}


    const Sign_in = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((data) => {
                console.log(data, "authData");
                toast.success('bsa7tek !', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
                history('/Login');
                
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
     

    return (
        <>
        <ToastContainer/>
            <h2 className='logo'><em>autobila</em></h2>
        <div className='Login'>
            <form className='from1' onSubmit={(e)=>Sign_in(e)}>
                <h3>Register Here</h3>

                <label for="username">Username</label>
                <input type="text" placeholder="Username" name='Username'  id="Username" />

                <label for="password">email</label>
                <input type="text" placeholder="email"name='email' id="email" />

                <label for="password">Password</label>
                <input type="password" placeholder="Password"name='password' id="password" />

                    <input type='submit' className='btn'  class="btn" value="Register"/>
        </form>
        </div>
        </>
      );
    }

export default Register ;
