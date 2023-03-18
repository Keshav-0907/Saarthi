import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Images/logo.png'




const Navbar = () => {

  return (
    
        <div className='nav-main'>
          <div className='nav-logo'>
            <a href='/'><img className='logo-img' src={logo} alt='err'/></a>
              
          </div>

          <div className='nav-links'>
            <ul>            

              <li><Link to='/' spy={true} smooth={true} offset={50} duration={500}> Home </Link></li>
              <li><a href ='/' spy={true} smooth={true} offset={50} duration={500}> About</a></li>
              <li><a href ='#feature' spy={true} smooth={true} offset={50} duration={500}> Features</a></li>
              <li><Link to='/' spy={true} smooth={true} offset={50} duration={500}> Testimonials </Link></li>
              <li><Link to='/' spy={true} smooth={true} offset={50} duration={500}> Contact Us </Link></li>
            </ul>
          </div>

          <div>
            {/* <button onClick={()=>loginWithRedirect()}> Admin Login</button> */}
              <Link to='/login'><button className='nav-btn'>Ambulance Owners</button></Link> 
          </div>
      </div>
  )
}

export default Navbar