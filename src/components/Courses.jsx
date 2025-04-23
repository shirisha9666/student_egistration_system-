import React from 'react'
import CourseCard from '../card/Course.Card'

const Courses = () => {
  return (
    <div className='p-2 '>
    <div className='d-flex justify-content-between align-items-center'>
    <div className='text-white'>
      <h1 className='h1-tag'>Course</h1>
    </div>
    <div className='text-white text-left pt-2 btn ' >
          <button className="p-2   f-16 fw-600">Create new course </button>
          </div>
  </div>
  <div>
    <div>
    {/* <CourseCard /> */}
      <CourseCard course={course} setCourse={setCourse}/>
    </div>
  </div>
  {/* <Coursetypemodel handleClose={handleClose} handleShow={handleShow} show={show}
  setShow={setShow}/> */}
  </div>
  )
}

export default Courses