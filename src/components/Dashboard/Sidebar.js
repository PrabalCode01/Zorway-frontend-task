import React, {useState} from 'react'
import {
    FaTh,
    FaBars,
    FaRegChartBar,
   
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Sidebar.css'




const Sidebar = ({children}) => {
    

    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/timetable",
            name:"TimeTable",
            icon:<FaRegChartBar/>
        },
        {
            path:"/attendence",
            name:"Attendence",
            icon:<FaRegChartBar/>
        },
        {
            path:"/marksheet",
            name:"Marksheet",
            icon:<FaRegChartBar/>
        },
        {
            path:"/profile",
            name:"Profile",
            icon:<FaRegChartBar/>
        },
    
    ]


    return (
    <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className='sidebar'>
            <div  className='top-section'>
                {/* <div>
                <h1 style={{display: isOpen ? "flex" : "none"}} className='logo'>MANIT</h1
                </div> */}
                <div style={{marginLeft: isOpen ? "70px" : "14px", marginTop:isOpen?"10px":"10px", marginBottom:isOpen?"5px":"5px" }} className='bars'>
                    <FaBars onClick={toggle}/>

                </div>

            </div>
            {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
    </div>
  )
}

export default Sidebar
