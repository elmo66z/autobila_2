
import { BrowserRouter as Link, Routes, Route } from 'react-router-dom';
import Login from '../login';
import Register from '../register';
import Nav from '../navbar';
import Add from './add_products';
import Show from './show';

function Admin() {
  return (
    <>
        <Routes>
          <Route path='/Login' element={<Login/>} />
          <Route path='/Register' element={<Register/>}/>
        </Routes>
        <Nav />
        <Show/>
        {/* <Add/> */}
    </>
  )
}
export default Admin;
