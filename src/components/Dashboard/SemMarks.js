import React from 'react'
import Marksdata from './Marksdata'


const SemMarks = ({semester}) => {
   // console.log(Marksdata[0].subjects)
   // console.log(semester)
   // console.log(subjects)
  return (
    <div className='sem-marks'>
          <h2>Semester {semester}</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th className='grade'>Subject Code</th>
            <th className='grade'>Grade</th>
          </tr>
        </thead>
        <tbody className='marks-body'>
          {Marksdata[semester-1].subjects.map((subject, index) => (
          
            <tr key={index}>
              <td>{subject.name}</td>
              <td>{subject.code}</td>
              <td>{subject.grade}</td>
            </tr>
          ))}   
        </tbody>
      </table>
      

    </div>
  )
}

export default SemMarks
