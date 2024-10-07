 import Navbar from './Components/Navbar'
 import { React} from "react";
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Footer from './Components/Footer';
import { AppDownload } from './Components/AppDownload';
  import { useState } from 'react';
import LoginPopup from './Components/LoginPopup'
function App() {
  const [loginpopup,setLoginpopup]=useState(false);
  const handleOrderPopup =()=>{
    setLoginpopup(!loginpopup);
  };

  return (
    <div className="App">
      { loginpopup?<LoginPopup/>:<></>}
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      </BrowserRouter>
      <AppDownload/>
            <Footer/>
         
    </div>
  );
}

export default App;
