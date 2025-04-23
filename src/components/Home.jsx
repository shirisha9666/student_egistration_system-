import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CourseType from "./Course Type";
import CourseOfferings from "./Course_Offerings";
import Courses from "./Courses";
import StudentRegistrations from "./StudentRegistrations";
import Sidebar from "./Sidebar";

import { HiMenu, HiOutlineAcademicCap } from "react-icons/hi";
import { SiBookstack } from "react-icons/si";
import { MdCastForEducation } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaUserPlus } from "react-icons/fa6";
import Header from "./Header";
import axios from "axios";

const Home = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState()
      // const [courseData,setCourseData]=useState([])
   

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const sidebarIcons=[
    {
    name:"Course Types",
    link:"./:id",
    icon:<HiOutlineAcademicCap/>
  },
  {
    name:"Courses",
    link:"/courses/:id",
    icon:<SiBookstack/>
  },
  {
    name:"Course Offerings",
    link:"/course/offerings/:id",
 icon:<MdCastForEducation/>
  },
  {
    name:"Student Registrations",
    link:"/studentRegistations",
    icon:<FaUserPlus/>}]

    const [courseFilter, setCourseFilter] = useState("");
    
    // filter heare

    
  return (
    <>
  
    <div className="main-container d-flex w-100  ">
       
        <div className={`sidebar  `}>
        <span className={`px-3 text-right text-white  fw-600  f-18  cursor `}
              onClick={OpenSidebar}><HiMenu /></span>
        {/* <div className={` sidebar col-2`}> */}
        <div className={` ${openSidebarToggle?"show":"hide"}  w-50vh `}>
        <Sidebar sidebarIcons={sidebarIcons}  openSidebarToggle={openSidebarToggle}
            OpenSidebar={OpenSidebar}
            />
        </div>
           </div>




        <div className="web">
            <div>
            <Header courseFilter={courseFilter}
            setCourseFilter={setCourseFilter}/>
            </div>
        <Routes>
            
           <Route path="/:id" element={<CourseType courseFilter={courseFilter}/>} />
           <Route path="/course/offerings/:id" element={<CourseOfferings 
           courseFilter={courseFilter}/>} />
           <Route path="/courses/:id" element={<Courses   courseFilter={courseFilter}/>} />
           <Route
             path="/studentRegistations"
             element={<StudentRegistrations />}
           />
         </Routes>
        </div>
    </div>
    </>
 
  );
};

export default Home;
