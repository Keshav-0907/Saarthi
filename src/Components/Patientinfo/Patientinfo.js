import React, { Fragment } from 'react'
import './Patientinfo.css'
import { useState, useEffect } from 'react';
import { collection } from "firebase/firestore"
import {db } from "../Firebase";
import { useParams } from 'react-router-dom';
import "firebase/database";
import { getDocs } from 'firebase/firestore';
import "firebase/firestore";


const Patientinfo = () => {

  const id = useParams();
  console.log(id)

  const [users, setusers] = useState([]);
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);;
      setusers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    getUsers();
  }, [userCollectionRef])

  return (
    <>
    <div>
    {users.map((user => <div className='calls' key={user.id}>
        {user.name}
        {user.id}
        {user.phone}
        {user.address}

      </div>))
      }
    </div>
    
    <div className='cont-main'>
        <div className='info'>
          <div className='info-head'>
            <h1> Patient Details</h1>
          </div>
          <div className='info-main'>
            <p> Name : <span className='info-high'>Vidushi</span> </p>
            <p> Phone Number : <span className='info-high'>8800134039</span></p>
            <p> Address : <span className='info-high'>D-1103, City Apartments, Ghaziabad</span> </p>
          </div>
          <div className='links'>
            <a href='https://wa.me/+918800134039' target="_blank" rel="noreferrer">
              <img className='icon' src='https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png' width='100px' alt='err' />
            </a>
            <a href='https://www.google.com/maps/dir//D+1103+City+Apartment+Ghaziabad/@28.6488662,77.4556115,13z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x390cf20bc3774085:0xa040af1fc14121b3!2m2!1d77.4906311!2d28.6487954!3e3' target="_blank" rel="noreferrer">
              <img className='icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/1200px-Google_Maps_icon_%282015-2020%29.svg.png' width='100px' alt='err' />
            </a>



          </div>
        </div>

        <div className='map'>
          <iframe title='map' className='map-cont' src="https://www.google.com/maps/d/u/0/embed?mid=1Jm5cThaFp47HoVnC5rdb8PHmF7vCKZU&ehbc=2E312F" width="640" height="480"></iframe>
        </div>
      </div></>
  )
}
export default Patientinfo