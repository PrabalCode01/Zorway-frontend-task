import React from 'react'
import { BsFillPencilFill } from "react-icons/bs";
import './Table.css'

const Table = () => {
  return (
    <div className='table-wrap'>
   
        <table className='table'>

            <thead>
                <tr>
                    <th>Day</th>
                    <th  className="expand">Classes</th>
                    <th>Actions</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>Monday</td>
                    <td className='class'>
                        <tr>10:00 - 11:00 : ITC</tr>
                        <tr>11:00 - 12:00 : Control Systems</tr>
                        <tr>12:00 - 01:00 : Data Structures</tr>
                        <tr>2:00 -  4:00  : Batch1(Lab1) Batch2(Lab2) Batch3(Lab3) </tr>
                    </td>
                    <td>
                        <span className='actions'><BsFillPencilFill/></span>
                    </td>
                </tr>
                <tr>
                    <td>Tuesday</td>
                    <td className='class' >
                    <tr>09:00 - 10:00 : Communication System</tr>
                        <tr>10:00 - 11:00 : Telecom Switching</tr>
                        <tr>11:00 - 12:00 : VLSI Design</tr>
                        <tr>12:00 - 01:00 : Data Structures</tr>
                        <tr>02:00 - 03:00 : Data Structures</tr>
                        <tr>03:00 -  05:00  : Batch1(Lab2) Batch2(Lab3) Batch3(Lab1) </tr>
                    </td>
                    <td>
                        <span className='actions'><BsFillPencilFill/></span>
                    </td>
                </tr>
                <tr>
                    <td>Wednesday</td>
                    <td className='class'>
                    <tr>09:00 - 10:00 : Control Systems</tr>
                        <tr>10:00 - 11:00 : Communication Systems</tr>
                        <tr>11:00 - 12:00 :  Telecom Switching</tr>
                        <tr>12:00 - 01:00 : VLSI Design</tr>
                        <tr>02:00 -  04:00  : Batch1(Lab3) Batch2(Lab1) Batch3(Lab2) </tr>
                    </td>
                    <td>
                        <span className='actions'><BsFillPencilFill/></span>
                    </td>
                </tr>
                <tr>
                    <td>Thursday</td>
                    <td className='class'>
                    <tr>09:00 - 10:00 : Communication System</tr>
                        <tr>10:00 - 11:00 : ITC</tr>
                        <tr>11:00 - 12:00 : Telecom Switching</tr>
                        <tr>12:00 - 01:00 : VLSI Design</tr>
                        <tr>02:00 - 03:00 : Tutorial(ITC)</tr>
                    </td>
                    <td>
                        <span className='actions'><BsFillPencilFill/></span>
                    </td>
                </tr>
                <tr>
                    <td>Friday</td>
                    <td className='class'>
                        <tr>09:00 - 10:00 : ITC</tr>
                        <tr>10:00 - 11:00 : Control Systems</tr>
                    </td>
                    <td>
                        <span className='actions'><BsFillPencilFill/></span>
                    </td>
                </tr>
            
              

            </tbody>
        </table>
      
    </div>
  )
}

export default Table
