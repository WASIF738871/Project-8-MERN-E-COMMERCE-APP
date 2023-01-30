import { Route, Routes } from 'react-router-dom';
import './App.css';
import Buynow from './components/buynow/Buynow';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Navebar from './components/header/Navebar';
import MainComponent from './components/home/MainComponent';
import Newnav from './components/newNavBar/Newnav';
import Signin from './components/signup_singin/Signin';
import Signup from './components/signup_singin/Signup';



function App() {
  return (
   <>
   <Navebar/>
   <Newnav/>
   <Routes>
    <Route path='/' element ={<MainComponent/>}/>
    <Route path='/login' element ={<Signin/>}/>
    <Route path='/register' element ={<Signup/>}/>
    <Route path='/getproductsone/:id' element ={<Cart/>}/>
    <Route path='/buynow' element ={<Buynow/>}/>
   </Routes>
   <Footer/>
   </>
  );
}

export default App;
