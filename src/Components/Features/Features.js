import React from 'react'
import './Features.css'

const Features = () => {
  return (
    <div className='services-main'>

      <div className='services-head'>
        <h1>Features</h1>
      </div>
          
        <div className='features-list'>

          <div className='feature'>
              <div>
                <img className='feature-icon' src='https://cdn-icons-png.flaticon.com/512/5579/5579459.png' alt='err'></img>
              </div>
            <div className='feature-head'>
              <h4>Hassle Free </h4>
            </div>
            <div className='feature-text'>
              <p>Book ambulance hassle-free without any tension</p>
            </div>
          </div>

          <div className='feature'>
              <div>
                <img className='feature-icon' src='https://cdn-icons-png.flaticon.com/512/2783/2783484.png' alt='err'></img>
              </div>
            <div className='feature-head'>
              <h4> Tracking </h4>
            </div>
            <div className='feature-text'>
              <p> Availablity of realtime location to both driver and patient</p>
            </div>
          </div>

          <div className='feature'>
              <div>
                <img className='feature-icon' src='https://cdn-icons-png.flaticon.com/512/950/950237.png' alt='err'></img>
              </div>
            <div className='feature-head'>
              <h4> Communication </h4>
            </div>
            <div className='feature-text'>
              <p> Easy communication with Ambulance Driver </p>
            </div>
          </div>
          

          <div className='feature'>
              <div>
                <img className='feature-icon' src='https://cdn-icons-png.flaticon.com/512/2906/2906274.png' alt='err'></img>
              </div>
            <div className='feature-head'>
              <h4> Database </h4>
            </div>
            <div className='feature-text'>
              <p> Availablity of Hospital Database to Driver</p>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Features