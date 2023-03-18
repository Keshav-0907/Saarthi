import React from 'react'
import './Waiting.css'
import { Link } from 'react-router-dom'

const Waiting = () => {
  return (
    <><div className="App">
          <div className='head'>
              <h1>Please be patient</h1>
              <p>Ambulance driver will contact you soon</p>
          </div>

          <div className='chat-amb'>
            <h2> Chat with ambulance driver</h2>
            <Link to='/message'><button className='chat-btn'>Chat Now</button></Link>
          </div>
      </div>
      <header className="App-header">
              <img src='https://cdn-icons-png.flaticon.com/512/64/64724.png' className="App-logo" alt="logo" />
     </header>

      <div className='links'>
        <div className='cont'>
            <img className='cont-img' src='https://upload.wikimedia.org/wikipedia/commons/a/a1/Snake_Bite_injury.jpg' width='300px' alt='err'></img>
            <h2> Snake Bite </h2>
            <a href='https://www.cdc.gov/disasters/snakebite.html' target="_blank" rel="noreferrer"><p> Click Here </p></a>
        </div>
        <div className='cont'>
            <img className='cont-img' src='https://www.parents.com/thmb/vWIiiKyTnEQ5O33E4lTRxwxLwDA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1310443783-2000-3fe0eb1818e84997915c83fc14e58777.jpg' width='300px' alt='err'></img>
            <h2> Pregnency </h2>
            <a href='https://health.ucsd.edu/news/features/pages/2016-01-05-36-pregnancy-tips-listicle.aspx' target="_blank" rel="noreferrer"><p> Click Here </p></a>
        </div>
        <div className='cont'>
            <img className='cont-img' src='https://www.esafety.com/wp-content/uploads/2016/12/first-aid-1080x675.jpeg'  width='300px' alt='err'></img>
            <h2> Snake Bite </h2>
            <a href='https://www.nhs.uk/conditions/first-aid/' target="_blank" rel="noreferrer"><p> Click Here </p></a>
        </div>
      </div>
      </>
  )
}

export default Waiting