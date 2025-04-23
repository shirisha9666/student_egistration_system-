import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { MdDelete } from "react-icons/md";

import { FaRegEdit } from "react-icons/fa";

const CourseCard = () => {
  return (
    <div className='d-flex gap-2 flex-wrap '>
    {/* {course.map((item,index)=>{
        return(
            <Card key={index} style={{background:"#FFBC82"}}
      className='text-white text-white fw-600  card-custom-width'>
       
  <Card.Body>
    <span className='f-16'>{item.course_type}</span>
    
    <Card.Text> 
   {item.course_name}
    </Card.Text>

    <Card.Link href="#" className='card-icon  p-2' onClick={()=>{
      handleDeleteCourse(item.id)
    }}
 ><MdDelete/></Card.Link>
    <Card.Link href="#" className='card-icon  p-2' onClick={()=>{
        handleEditShow(item.id)
        setFind(item.id)

     
    }}><FaRegEdit/></Card.Link>
  </Card.Body>

  <CourseTypeCardEdit 
  handleEditClose={handleEditClose}
  showEdit={showEdit}
  setEdit={setEdit}
  handleEditShow={handleEditShow}
  findId={findId}/>
  
</Card>
        )
    })} */}
    <span className="findId-sidebar">
    
    </span>
     

</div>
  )
}

export default CourseCard