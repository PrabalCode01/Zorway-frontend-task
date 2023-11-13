import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { auth } from "./firebase";
import DashHome from "./components/Dashboard/DashHome";
import Profile from "./components/Profile"
import Timetable from "./components/Dashboard/Timetable";
import PasswordChange from "./components/PasswordReset/PasswordChange";
import Marksheet from "./components/Dashboard/Marksheet";
import AttendanceDetails from "./components/Dashboard/AttendanceDetails";


function App() {


  const [userName, setUserName] = useState("");
  const [userschl, setuserschl] = useState("");
  const [useremail, setuseremail] = useState("");
  const [userid , setuserid] = useState("");



  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        setuseremail(user.email);
        setuserid(user.uid);
        setuserschl(user.schNumber);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
              
              <Router>
                <Routes>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/changePassword" element={<PasswordChange />} />
                  <Route path="/profile" element={<Profile email = {useremail} id = {userid} />} />
                  <Route path="/timetable" element={<Timetable/>} />
                  <Route path="/marksheet" element={<Marksheet name={userName} scholar={userschl}/>} />
                  <Route path="/attendence" element={<AttendanceDetails name={userName}/>} />
                  <Route path="/dashboard" element={<DashHome name={userName} />} />
                  <Route path="/" element={<Home />} />

                </Routes>
              </Router>
    </div>
  );
}

export default App;
