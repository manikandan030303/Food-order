import React, { useState } from 'react'
import './LoginPopup.css'

import cancel from '../Assets/cancel1.png'
export default function LoginPopup({loginpopup,setLoginpopup}) {
    const [currState,setCurrState]=useState("Sign Up")
  return (
    <>
       <div className='login-popup'>
      <form action="" className='login-popup-container'>
          <div className="login-popup-title">
          <h2>{currState}</h2>
          <img src={cancel} onClick={()=>setLoginpopup(false)} height={40} alt="" />
          </div>
          <div className="login-popup-inputs">
              {currState==="Login"?<></>: <input type="text" placeholder='Enter Name' required />}
             
              <input type="email" placeholder='Enter email'required />
              <input type="passwword" placeholder='Enter password'required />
          </div>
          <button>{currState==="Sign Up"?"Create account":"Login"}</button>
          <div className="login-popup-condition">
              <input type="checkbox" required />
              <p>by accepting all the terms and codition& privacy policy</p>
                 </div>
                 {currState==="Login"?<p>Create a new Account <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>:<p>Already have an account <span onClick={()=>setCurrState("Login")}>Login Now</span></p>}
                 
                 
      </form>
  </div>
    
    </>
   
   

  )
}
