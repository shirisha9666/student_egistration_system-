import React, { useEffect, useState } from 'react'
import RegistarStudentModel from '../model/RegistarStudentModel'
import StudentTable from '../card/StudentTable'
import axios from 'axios'

const StudentRegistrations = ({courseFilter}) => {
    const [showregister,setShowRegister]=useState(false)
    const[studentData,setStudentData]=useState([])
    const handleShowCourseRegister=()=>setShowRegister(true)
    const handleCloseCourseRegister=()=>setShowRegister(false)

  
    useEffect(() => {
      axios.get("http://localhost:3004/course")
        .then(res =>setStudentData(res.data))
        .catch(err => console.log("error", err));
    }, []);




  return (
    <div className='p-2 '>
    <div className='d-flex justify-content-between align-items-center'>
    <div className='text-white'>
      <h1 className='h1-tag'>Course</h1>
    </div>
     <div className=' text-left pt-2 btn ' onClick={handleShowCourseRegister}>
          <button className="p-2 f-16 fw-600  font-semebold outline-nonefocus:outline-none focus-ring
         ">Registration </button>
          </div>
         
  </div> 
  <div>
    <div>
    <StudentTable studentData={studentData} courseFilter={courseFilter}/>
    </div>
  </div>
 
  <RegistarStudentModel handleCloseCourseRegister={handleCloseCourseRegister} 
  showregister={showregister}
  />

  </div>
  )
}

export default StudentRegistrations