import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { MdDelete } from "react-icons/md";

import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
import CourseTypeCardEdit from './CourseType.Card.Edit';
import { useNavigate, useLocation } from "react-router-dom";



const CourseTypeCard = ({ course, setCourse,courseFilter }) => {
  const [showEdit, setEdit] = useState(false)
  const [findId, setFind] = useState()
  const navigate = useNavigate();
  const location = useLocation();

  const handleEditClose = () => setEdit(false)


  const handleEditShow = (id) => {
    navigate(`${location.pathname}?id=${id}`, { replace: true })
    setEdit(true)
    setFind(id)
  }


  useEffect(() => {
    console.log("deleted id", findId)
  }, [findId])

  function handleDeleteCourse(id) {

    axios.delete(`http://localhost:3001/course/${id}`)
      .then(() => {
        alert("Deleted Successfully")
        setCourse(prev => prev.filter(course => course.id !== id));
      })
      .catch((err) => console.log("error", err))
  }

  return (
    <div className='d-flex gap-2 flex-wrap '>
      {/* {course.map((item, index) => {
        return (
          
          <Card key={index} style={{ background: "#FFBC82" }}
            className='text-white text-white fw-600  card-custom-width'>

            <Card.Body>
              <span className='f-16'>{item.course_type}</span>

              <Card.Text>
                {item.course_name}
              </Card.Text>

              <Card.Link href="#" className='card-icon  p-2' onClick={() => {
                handleDeleteCourse(item.id)
              }}
              ><MdDelete /></Card.Link>
              <Card.Link href="#" className='card-icon  p-2' onClick={() => {
                handleEditShow(item.id)



              }}><FaRegEdit /></Card.Link>
            </Card.Body>

            <CourseTypeCardEdit
              handleEditClose={handleEditClose}
              showEdit={showEdit}
              setEdit={setEdit}
              handleEditShow={handleEditShow}
              findId={findId} />

          </Card>
        )
      })} */}
      {course
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
      <span className="findId-sidebar">

      </span>


    </div>
  )
}

export default CourseTypeCard