import React,{ useState } from 'react'
import { NavLink } from "react-router-dom";

import './DashHome.css'
import Sidebar from './Sidebar';

const DashHome = (props) => {

    const [menuOpen, setMenuOpen] = useState(false);
    console.log(props.scholar)
  
  return (
   <>
    


    <nav>
   <div className='detail'>
   <h4 className='uut'>{props.name ? `Welcome - ${props.name}` : "Login please"}</h4>
    {/* <h4 className='uut'>{props.scholar ? `Welcome - ${props.scholar}` : "Login please"}</h4> */}
   </div>
    
    <div className="menu" onClick={() => setMenuOpen(menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>


      <ul className={menuOpen ? "" : "open"}>
        <li>
          <NavLink to="/">Logout</NavLink>
        </li>
        </ul>
    </nav>
 
     <Sidebar/>
     
    

   </>
  )
}

export default DashHome
