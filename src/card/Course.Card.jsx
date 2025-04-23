import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { MdDelete } from "react-icons/md";

import { FaRegEdit } from "react-icons/fa";
import CourseEditModel from '../model/Course.edit.model';
import axios from 'axios';

const CourseCard = ({ courseData,setCourseData }) => {
  const [showCourseEdit, setCourseEdit] = useState(false)
  const handleShowCourseEdit = () => setCourseEdit(true)
  const handleCloseCourseEdit = () => setCourseEdit(false)
  const [courseFindId, setCourseFindId] = useState()


  function handleCourseEditShow(id) {
    console.log("Clicked course ID:", id);
 setCourseFindId(id)
 }

// deleteFunction
function handleDeleteLanguageCourse(id){

  axios.delete(`http://localhost:3002/course/${id}`)
  .then(()=>{
      alert("Deleted successfully")
      setCourseData(prev => prev.filter(course => course.id !== id));
  })
  .catch((err)=>console.log("error",err))
}


  return (
    <div className='d-flex gap-2 flex-wrap '>
      {courseData.map((item, index) => {
        return (
          <Card key={index} style={{ background: "#FFBC82" }}
            className='text-white text-white fw-600  card-custom-width'>

            <Card.Body>
              <span className='f-16'>{item.course_type}</span>

              <Card.Text>
                {item.course_name}
              </Card.Text>

              <Card.Link href="#" className='card-icon  p-2' onClick={() => {
                handleDeleteLanguageCourse(item.id)
              }}
              ><MdDelete /></Card.Link>
              <Card.Link href="#" className='card-icon  p-2' onClick={() => {
                console.log("handleCourseEditShow", item.id)
                handleCourseEditShow(item.id)
                handleShowCourseEdit()
              }}><FaRegEdit /></Card.Link>
            </Card.Body>


            <CourseEditModel showCourseEdit={showCourseEdit}
              handleShowCourseEdit={handleShowCourseEdit}
              handleCloseCourseEdit={handleCloseCourseEdit} courseFindId={courseFindId} />

          </Card>
        )
      })}
      <span className="findId-sidebar">

      </span>


    </div>
  )
}

export default CourseCard