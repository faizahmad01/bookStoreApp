import React from 'react'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import Footer from './component/Footer'
import Freebook from './component/Freebook'
import Home from './home/Home'
import Course from './component/Course'
import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './component/Signup'
function Hello() {
  return (
   <>
     {/* <Home/>
     <Course/> */}
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup/>}/>
     </Routes>
     
   </>
  )
}
export default Hello