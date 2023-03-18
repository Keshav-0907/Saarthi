import App from './App';

import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter, Route, Routes} from "react-router-dom"

import Navbar from './Components/Navbar/Navbar'
import Home from './Components//Home/Home'
import Footer from './Components/Footer/Footer'
import LoginButton from './Components/LoginButton';
import Login from './Components/LogReg/Login';
import Register from './Components/LogReg/Register';
import Booking from './Components/Booking/Booking';
import Dashboard from './Components/Dashboard/Dashboard'
import Waiting from './Components/Waiting/Waiting';
import Patientinfo from './Components/Patientinfo/Patientinfo';
import Message from './Components/Message/Message';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/message' element={<Message/>}/>
        <Route path='/log' element={<LoginButton/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/waiting' element={<Waiting/>}/>
        <Route path='/patientinfo/:pid' element={<Patientinfo/>}/>


      </Routes>
      <Footer/>
    </div>
  </BrowserRouter>
);


export default App
