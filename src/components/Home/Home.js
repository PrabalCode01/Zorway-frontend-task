import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";

import manitLogo from '../assets/manitLogo.png'
import './Home.css';
import Banner from '../Banner';

const Home = (props) => {

    const [menuOpen, setMenuOpen] = useState(false);
  return (  
<>
    <nav>
        
        <img src={manitLogo} alt="" width="63px" />
        <Link to="/" className="title">
        MANIT - Student Portal
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
        {/* <li>
        <h4 className='uut'>{props.name ? `Welcome - ${props.name}` : "Login please"}</h4>
        </li> */}
       
      </ul>

    </nav>

  <Banner/>
    </>
  )
}

export default Home
