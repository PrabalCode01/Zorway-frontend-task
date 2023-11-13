import React from 'react'
import {useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth'
import { database } from '../../firebase';

import './Changepass.css'

const PasswordChange = () => {
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emailval = e.target.email.value;
        sendPasswordResetEmail(database,emailval).then(data=>{
            alert("Check your gmail")
            navigate('/login')
        }).catch(err=>{
            alert(err.code)
        })
    }


    const handleback= ()=>{
      navigate('/profile')
    }
  return (
    <div className='wrap'>
    <div  className="card">
        
    <h1> Change Password</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input placeholder='Enter your email' name = "email" /><br/>
        <button>Change</button>

      </form>
      <br></br>
      <button onClick={handleback}>Back to Profile</button>
    </div>

    </div>
  )
}

export default PasswordChange
