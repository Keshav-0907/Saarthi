import React from 'react'
import img from '../Images/hosp.png'
import {useState,useEffect} from 'react'
import { addDoc } from 'firebase/firestore'
import {db} from "../Firebase";
import {collection, getDocs} from "firebase/firestore"
import './Booking.css'
import { Link } from 'react-router-dom'


const Booking = () => {

    const [newName, setnewName] = useState("")
    const [newPhone, setnewPhone] = useState("")
    const [type, settype] = useState("")
    const [newAddress, setnewAddress] = useState("")
    const userCollectionRef = collection(db, "users")
    const [users,setusers]=useState([]);

    useEffect(()=> {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef);;
            setusers(data.docs.map((doc) => ({...doc.data(),id:doc.id })))
        };
        getUsers();
    })


    const createUser = async() => {
        await addDoc(userCollectionRef, {name:newName, phone:newPhone, address:newAddress, type:type})
        console.log(alert("Booking Request Sent"))
    }


    return (

    <>
    <div className='book-head'>
        <h2> Book an Ambulance Now</h2>
        <p> We are dedicated to serve you <br/>
 best medical services</p>
    </div>
    <div className='booking-main'>
        <div>
            <img className='book-logo' src={img} alt='err'></img>
            {users.name}
        </div>

        <div className='booking-cont'>
            <div className='book-inputs'>
            <h2>Book Now !!</h2>
                
                <input 
                    name='name'
                    className='log-inp' 
                    type='text' 
                    onChange={(event) => {
                        setnewName(event.target.value);
                    }}
                    placeholder='Name'/>

                <input 
                    name='phone'
                    className='log-inp' 
                    type='number' 
                    onChange={(event) => {
                        setnewPhone(event.target.value);
                    }}
                    placeholder='Phone Number'/>


                <input 
                    name='address'
                    className='log-inp' 
                    type='text'
                    onChange={(event) => {
                        setnewAddress(event.target.value);
                    }}

                    placeholder='Your Current Location'/>

                    <select label='Address' className='log-select' name="ambulance" id="amb" onChange={(event) => {
                        settype(event.target.value);
                    }}>
                        <option value=" - "> ---Select type of Ambulance --</option>
                        <option value="Basic Ambulance"> Basic Ambulance </option>
                        <option value="ICU Ambulance"> ICU Ambulance </option>
                        <option value="Dead Body Ambulance">Dead Body Ambulance</option>
                    </select>

                    <Link to='/waiting'><button className='book-bt' onClick={createUser}>Submit</button></Link>
                    
            </div>
            
        </div>  
    </div>
    </>
  )
}

export default Booking
