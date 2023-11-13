import React from 'react'
// import { BsFillPencilFill } from "react-icons/bs";
import './Marksheet.css'
import SemMarks from './SemMarks';


const Marksheet = (props) => {
  return (
   <div className='wrap2'>

<h1 className='header'>Student Marksheet</h1>
<br />
<span className='student'>{props.name ? `Student - ${props.name}` : "Login please"}</span>
{/* <span className='student'>{props.scholar ? `Student - ${props.scholar}` : "Login please"}</span> */}
<SemMarks semester={1} />    
<SemMarks semester={2} />    
<SemMarks semester={3} />    
<SemMarks semester={4} />    

   </div>
  )
}

export default Marksheet
