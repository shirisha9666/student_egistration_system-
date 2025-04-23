import React, { useEffect, useState } from 'react'
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Coursetypemodel from '../model/Course.type.model';
import CourseTypeCard from '../card/CourseType.Card';


const CourseType = () => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [course,setCourse]=useState([])
  
  useEffect(() => {
    axios.get("http://localhost:3001/course")
      .then(res =>setCourse(res.data))
      .catch(err => console.log("error", err));
  }, []);
  console.log("courses courseType",course)

  return (
    <div className='p-2 '>
      <div className='d-flex justify-content-between align-items-center'>
      <div className='text-white'>
        <h1 className='h1-tag'>Course Types</h1>
      </div>
      <div className=' text-left pt-2 btn ' onClick={handleShow}>
            <button className="p-2 f-16 fw-600  font-semebold outline-nonefocus:outline-none focus-ring">Create new course </button>
            </div>
    </div>
    <div>
      <div>
        <CourseTypeCard course={course} setCourse={setCourse}/>
      </div>
    </div>
    <Coursetypemodel handleClose={handleClose} handleShow={handleShow} show={show}
    setShow={setShow}/>
    </div>
  )
}

export default CourseType