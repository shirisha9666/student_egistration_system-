import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CourseType from "./Course Type";
import CourseOfferings from "./Course_Offerings";
import Courses from "./Courses";
import StudentRegistrations from "./StudentRegistrations";
import Sidebar from "./Sidebar";
import { Toaster } from "react-hot-toast"

import { HiMenu, HiOutlineAcademicCap } from "react-icons/hi";
import { SiBookstack } from "react-icons/si";
import { MdCastForEducation } from "react-icons/md";

import { FaUserPlus } from "react-icons/fa6";
import Header from "./Header";


const Home = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  
   

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const sidebarIcons=[
    {
    name:"Course Types",
    link:"./",
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
   <div className="main-container d-flex w-100   ">
      <div className="w-5">
       
        <div className={`sidebar `}>
        <span className={`px-3 text-white  fw-600  f-20  cursor
       d-flex justify-content-end pt-3`}
              onClick={OpenSidebar}><HiMenu /></span>
   
        <div className={` ${openSidebarToggle?"show":"hide"}  w-50vh reponsiveToggle`}>
        <Sidebar sidebarIcons={sidebarIcons}  openSidebarToggle={openSidebarToggle}
        setOpenSidebarToggle={setOpenSidebarToggle}
        
            OpenSidebar={OpenSidebar}
            />
        </div>
           </div>

           </div>


        <div className="web">
            <div>
            <Header courseFilter={courseFilter}
            setCourseFilter={setCourseFilter}/>
            </div>
        <Routes>
            
           <Route path="/" element={<CourseType courseFilter={courseFilter}/>} />
           <Route path="/course/offerings/:id" element={<CourseOfferings 
           courseFilter={courseFilter}/>} />
           <Route path="/courses/:id" element={<Courses   courseFilter={courseFilter}/>} />
           <Route
             path="/studentRegistations"
             element={<StudentRegistrations courseFilter={courseFilter}/>}
           />
         </Routes>
        </div>
        <Toaster
  
/>
    </div>
   
    </>
 
  );
};

export default Home;
