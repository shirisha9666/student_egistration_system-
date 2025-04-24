import React, {  useState } from 'react'
import Card from 'react-bootstrap/Card';
import { MdDelete } from "react-icons/md";

import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
import CourseTypeCardEdit from './CourseType.Card.Edit';
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';



const CourseTypeCard = ({ courseType, setCourseType, courseFilter }) => {
  const [showEdit, setEdit] = useState(false)
  const [findId, setFind] = useState()
  const navigate = useNavigate();
  const location = useLocation();
  console.log("courseType",courseType)

  const handleEditClose = () => setEdit(false)


  const handleEditShow = (id) => {
    navigate(`${location.pathname}?id=${id}`, { replace: true })
    setEdit(true)
    setFind(id)

  }





  function handleDeleteCourse(id) {

    axios.delete(`http://localhost:3001/course/${id}`)
      .then(() => {
        toast.success("Deleted Successfully")
        setCourseType(prev => prev.filter(course => course.id !== id));
      })
      .catch((err) => console.log("error", err))
  }

  return (
    <div className='d-flex gap-2 flex-wrap w-100 '
    >
<div className='d-flex gap-2 flex-wrap '>
      {courseType
        .filter(item => !courseFilter || item.course_type === courseFilter)
        .map((item, index) => (
          <Card key={index} style={{ background: "#FFBC82" }} className='text-white fw-600 card-custom-width'>
            <Card.Body>
              <span className='f-16'>{item.course_type}</span>
              <Card.Text>{item.course_name}</Card.Text>

              <Card.Link href="#" className='card-icon p-2' onClick={() => handleDeleteCourse(item.id)}>
                <MdDelete />
              </Card.Link>
              <Card.Link href="#" className='card-icon p-2' onClick={() => handleEditShow(item.id)}>
                <FaRegEdit />
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
        </div>
      <span className="findId-sidebar">

      </span>
<CourseTypeCardEdit showEdit={showEdit} handleEditClose={handleEditClose} 
findId={findId}/>

    </div>
  )
}

export default CourseTypeCard