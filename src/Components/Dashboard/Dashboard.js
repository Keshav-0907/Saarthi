import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { auth, db } from '/Users/keshavmalik/Desktop/Projects/Ambulance/saarthi1/src/Components/Firebase.js';
import { signOut, onAuthStateChanged} from "firebase/auth";
import { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import './Dashboard.css'

function Ambulance() {

  const [users, setusers] = useState([]);
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);;
      setusers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    getUsers();
  }, [userCollectionRef])

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    console.log(alert(" Booking Deleted Succesfully. Please Reload"))
  }

  const logout = async () => {
    await signOut(auth)
    console.log(alert("Logged Out Succesfully "))
  }

  const [user, setuser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser)
  })



  return (
    <><div className='cont-maine'>
      <div className='cont-id'>
        <div>
          <h1> User Name: {user?.email} </h1>
          {/* <Button variant="contained">Contained</Button> */}

          <Link to='/'><button className='sinout-btn' onClick={() => logout()}>Sign Out</button></Link>
        </div>

        <Link to='/message'><button className='chat-btn'>Chat Now</button></Link>


      </div>
      <div className='head'>
        <h2> Live Booking's</h2>
      </div>
      <table>
        <thead className='t-headdd'>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Current Location</th>
          <th>Type </th>
          <th>Status</th>
        </thead>
      </table>
      {users.map((user => <div className='calls' key={user.id}>
        <p className='user-name'> {user.name}</p>
        <p className='user-name'> {user.phone}</p>
        <p className='user-name'><a target='_blank' href={`https://www.google.com/maps/place/${user.address}`} rel="noreferrer"> Navigate </a> </p>
        <p className='user-name'> {user.type}</p>
        <p>
          <select label='Address' className='log-select' name="ambulance" id="cars">
            <option value="Basic Ambulance"> Ride Pending </option>
            <option value="ICU Ambulance"> Completed  </option>
          </select></p>

        <p><button onClick={() => { deleteUser(user.id); }} className='delete-btn'> Delete </button></p>
        {/* <p><Link to={`/patientinfo/${user.id}`}> <button className='accept-btn'>{user.name}</button> </Link></p> */}

      </div>))}
    </div>
        <div className='map'>
          <></>
          <iframe title='map' className='map-cont' src="https://www.google.com/maps/d/u/0/embed?mid=1Jm5cThaFp47HoVnC5rdb8PHmF7vCKZU&ehbc=2E312F" width="1400" height="480"></iframe>
        </div>
      

    </>

  )
}



export default Ambulance;