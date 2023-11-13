import React from 'react'
 import {useNavigate } from 'react-router-dom';
// import { getAuth,  signInWithEmailAndPassword  } from "firebase/auth";


import './Profile.css'

const Profile = (props) => {

    const navigate = useNavigate();
 


    const handlePasswordChange = async () => {
       navigate('/changePassword')
      };

    //   const handleLanguageChange= () =>{

    //   }

      const handleLogout = async () => {
         navigate('/');
      };


  return (
    <div className='wrap' >


     <div className='profile'>
     <div  className='heading'>
       <h2> Student Profile</h2>
       </div >
       <div className='user-info'>
        <p>UID:  {props.id ? `${props.id}`:"No Id"} </p>
        <p>Email: {props.email ? `${props.email}`:"No email"}</p>
        </div>

       <div className='mainpart'>

       <div className='subpart'>
      
       
        <button className='subpart-btn' onClick={handlePasswordChange}>Change Password</button>
      </div>

      {/* <div className='subpart'>
        <h3>Switch Language</h3>
      
        <button onClick={handleLanguageChange}>Switch Language</button>
      </div> */}


      <div className='subpart'>
      
        <button className='subpart-btn' onClick={handleLogout}>Logout</button>
      </div>
       </div>
     </div>


    </div>
  )
}

export default Profile
