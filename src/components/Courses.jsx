import React, { useEffect, useState } from 'react'
import CourseCard from '../card/Course.Card'
import CourseModel from '../model/Course.Model'
import axios from 'axios'
import CourseEditModel from '../model/Course.edit.model'


const Courses = (  {courseFilter}) => {


  // create
  const [showCourse,setCourse]=useState(false)
  const handleShowCourse=()=>setCourse(true)
  
  const handleCloseCourse=()=>setCourse(false)
  // edit


   const [courseData,setCourseData]=useState([])
    useEffect(() => {
      axios.get("http://localhost:3002/course")
        .then(res =>setCourseData(res.data))
        .catch(err => console.log("error", err));
    }, []);
    console.log("courseData",courseData)
  
  return (
    <div className='p-2 '>
    <div className='d-flex justify-content-between align-items-center'>
    <div className='text-white'>
      <h1 className='h1-tag'>Course</h1>
    </div>
     <div className=' text-left pt-2 btn ' onClick={handleShowCourse}>
          <button className="p-2 f-16 fw-600  font-semebold outline-nonefocus:outline-none focus-ring
         ">Create new course </button>
          </div>
         
  </div> 
  <div>
    <div>
    {/* <CourseCard /> */}
      <CourseCard courseData={courseData} setCourseData={setCourseData}
      courseFilter={courseFilter}/>
    </div>
  </div>
 
  <CourseModel showCourse={showCourse} handleCloseCourse={handleCloseCourse}
  handleShowCourse={handleShowCourse}/>

  </div>
  )
}

export default Courses