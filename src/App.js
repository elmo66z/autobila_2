import './assets/css/templatemo-sixteen.css';
import "./assets/css/fontawesome.css";
import "./assets/css/templatemo-sixteen.css";
import Home from './home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './wheels';
import Engine from './engine';
import Accessories from './Accessories';
import BodyParts from './BodyParts';
import DetailsWheels from './wheels_details';
import AllProducts from './All_products';
import DetailsEngine from './Engine_details';
import DetailsAss from './details_Ass';
import DetailsBody from './Details_body';
import Login from './login';
import Cart from './cart';
import Cars from './cars';
import Register from './register';
import Admin from './admin/admin';
import Not from './notfound';
import cartContext from './context/context';
import { useContext, useState } from 'react';
import Checkout from './checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Lux.css';

function App() {

  const [cart,setCart] = useState([]);

  return (
    <>
    <cartContext.Provider value={{ cart, setCart }}>
      <Router>
        <Routes>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/checkout'element={<Checkout/>}/>
          <Route path='/Login' element={<Login/>} />
          <Route path='/Not found' element={<Not/>}/>
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/Register' element={<Register/>}/>
          <Route path='/' exact element={<Home />} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Wheels & Rims' element={<Products />} />
          <Route path='/Engine' element={<Engine />} />
          <Route path='/Accessories' element={<Accessories />} />
          <Route path='/BodyParts' element={<BodyParts />} />
          <Route path='/All Products' element={<AllProducts/>}/>
          <Route path="/DetailsWheels/:producttitle" element={<DetailsWheels/>}/>
          <Route path="/DetailEngine/:producttitle" element={<DetailsEngine/>}/>
          <Route path='/DetailsAccessoires/:producttitle' element={<DetailsAss />}/>
          <Route path='/DetailsBodyparts/:producttitle' element={<DetailsBody/>}/>
          <Route path='/Cars' element={<Cars/>}/>
          <Route path="*" element={<Not/>} />
        </Routes>
      </Router>
    </cartContext.Provider>
        <ToastContainer 
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </>
  )
}

export default App;
