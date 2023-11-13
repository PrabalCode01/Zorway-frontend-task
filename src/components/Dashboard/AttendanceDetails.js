import React from 'react';

import './Attendence.css'

const AttendanceDetails = (props) => {
  // Sample data: Replace this with your actual attendance data
  const subjects = [
    { name: 'Data Structures and Algorithm', classesAttended: 15, totalClasses: 30 },
    { name: 'Information Theory and Coding', classesAttended: 18, totalClasses: 30 },
    { name: 'Control Systems', classesAttended: 18, totalClasses: 30 },
    { name: 'Communication Systems', classesAttended: 17, totalClasses: 30 },
    { name: 'VLSI Design', classesAttended: 18, totalClasses: 30 },
    { name: 'Telecom Switching Systems', classesAttended: 18, totalClasses: 30 },
    // Add more subjects with attendance data
  ];



  return (
    <div className='attend'>
      <h2>Attendance Detail</h2>
      <span>Student : {props.name ? `${props.name}` : "Login please"}</span>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Classes Attended</th>
            <th>Total Classes</th>
            <th>Attendance Percentage</th>
            <th>Classes Required for 75%</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={index}>
              <td>{subject.name}</td>
              <td>{subject.classesAttended}</td>
              <td>{subject.totalClasses}</td>
              <td>{((subject.classesAttended / subject.totalClasses) * 100).toFixed(2)}%</td>
              <td>{Math.ceil((0.75 * subject.totalClasses - subject.classesAttended  ))}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div>
        <h3>Overall Attendance</h3>
        <p>
          Overall Attendance Percentage: {overallAttendancePercentage.toFixed(2)}%
        </p>
        <p>
          Number of Classes Needed to Meet 75% Attendance: {classesNeeded}
        </p>
      </div> */}
    </div>
  );
};

export default AttendanceDetails;
