import React from 'react'
import './Footer.css'
import img from '../Images/logo.png'

const Footer = () => {
  return (
    <div className='footer-main' id='feature'>
        <div className='footer-logo'>
            <img className='logo-img' src={img} alt='err'></img>
            <p>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud equip ex ea commodo consequat... Read More</p>
        </div>
        <div className='footer-cont'>
            <div className='donate'>
                <div className='donate-text'>
                    <h1> Donate </h1>
                </div>
                
                <div className='donate-para'>
                    <p>You can transform lives of hundreds of street children today by donating. No amount is too small or big. Every penny of your support will go into saving someones childhood.No amount is too small or big.</p>
                </div>

                <div className='donate-btn'>

                </div>
                
            </div>
            <div className='contact'>
                <h1> Contact </h1>
                <div className='contact-items'>
                    <div className='item'>
                        <p><span className='highlight'>Address :  </span>D-24, 3rd floor, , New Delhi - 110025 </p> 
                    </div>
                    <div className='item'>
                        <p><span className='highlight'> Mail : </span> mailme@abcd.com </p> 
                    </div>
                    <div className='item'>
                        <p><span className='highlight'> Phone No. :  </span> 1234567890 </p>
                    </div>
                    
                    
                </div>
            </div>
            
        </div>
        <div className='footer-links'>
                <a href='/'>Home</a>
                <a href='/'>About Us</a>
                <a href='/'>Teams</a>
                <a href='/'>Volunteers</a>
                <a href='/'>Donate Us</a>
                <a href='/'>Privacy Policy </a>
                <a href='/'>Sitemap</a>
                <a href='/'>Terms of Use</a>
                <a href='/'>Home</a>
            </div>
    </div>
  )
}

export default Footer