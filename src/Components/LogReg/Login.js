import React, { useEffect }  from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../Firebase"
import firebase from "../Firebase"
import './LogReg.css'
import 'firebase/auth'; 



const Login = () => {

    const [loginemail, setloginemail] = useState("")
    const [loginpassword, setloginpassword] = useState("")
  

    const login = async() => {
      try{
        const user = await signInWithEmailAndPassword(auth, loginemail, loginpassword)
        console.log(user)
        console.log(alert("Succesfully Logged In !! "))
      } catch (error) {
        console.log(error.message);
        console.log(alert("Please recheck the Email/password "))
      }
    }

    const [user, setuser]=useState({});
    onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser)
    })

    useEffect(() => {
      firebase.auth().onAuthStateChanged(setuser);
    }, []);
    

  return (
  <>
  <div className='login-main'>

    <div className='login-logo'>
      <img className='login-img' src='https://cdn-icons-png.flaticon.com/512/8109/8109306.png' alt='err'/>
    </div>

      <div className='login-1'>

        <div className='login-head'>
          <h2> Welcome Back !! </h2>
          <p> Login here </p>
        </div>
          <input className='log-inp' type="email" placeholder="User Name" onChange={(event) => { setloginemail(event.target.value) } } />
          <input className='log-inp' type="password" placeholder="Password" onChange={(event) => { setloginpassword(event.target.value) } } />
          <button onClick={login} className='login-bt'> Log In </button>
          {/* <h4> User logged in: {user?.email} </h4> */}
          <div>
            {user ? (
              <><p>Please Proced to the Dashboard</p><Link to='/dashboard'> <button className='dashboard-btn'> <img className='dash-pic' src='https://cdn-icons-png.flaticon.com/512/3408/3408591.png' alt=''></img>  Driver Dashboard</button>  </Link></>
              
            ) : (
              <><p> Username : keshav@g.com </p><p> Password : 123456 </p></>
            )}
          </div>


          {/* <div>
            <p className='login-text'> Not Registered ?? <Link to='/register'>Click</Link>  </p> 
          </div> */}

      </div>

  </div>
    </>
  )
}

export default Login;