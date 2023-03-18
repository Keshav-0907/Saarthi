import React from 'react';
import img from "../Images/Details.jpg";
import './Home.css'
import Booking from '../Booking/Booking';
import Features from '../Features/Features';


const Home = () => {
  return (

  
        <>
      <div className='hp-main'>
        <div className='hp-cont'>
          <div className='homepage-cont'>

            <div className='homepage-head'>
              <h1> Book an <span className='highlight'> <p>Ambulance</p></span>in just 2 clicks </h1>
            </div>

            <div className='homepage-text'>
              <p>Booking an Ambulance was never this easy, now you can book ambulance in some clicks & can directly connect with your Ambulance Driver</p>
            </div>

            <a href='#Book'> <button className='btn-home'> Book Now</button> </a>
          </div>
          <img className='hp-img' src={img} alt='err'></img>
        </div>

        <div className='hp-about'>

          <div className='hp-about-head'>
            <h1>About Us</h1>
          </div>

          <div className='hp-about-text'>
            <p>Booking an Ambulance was never this easy, now you can book ambulance in some clicks & can directly connect with your Ambulance DriverBooking an Ambulance was never this easy, now you can book ambulance in some clicks & can directly connect with your Ambulance DriverBooking an Ambulance was never this easy, now you can book ambulance in some clicks & can directly connect with your Ambulance DriverBooking an Ambulance was never this easy, now you can book ambulance in some clicks & can directly connect with your Ambulance DriverBooking an Ambulance was never this easy, now you can book ambulance in some clicks & can directly.
            </p>
          </div>

        </div>
      </div>

      <section id='feature'>
        <Features />
      </section>

      <section id='Book'>
        <Booking />
      </section></>
      

  )
}

export default Home