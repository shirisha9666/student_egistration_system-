import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { MdDelete } from "react-icons/md";
import { useNavigate, useLocation, replace } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import axios from 'axios';
import OfferingCardEdit from '../model/OfferingCardEdit';
import { toast } from 'react-toastify';

const OfferingCard = ({offeringData,setOfferingData,courseFilter,handleShowOffring}) => {
  console.log("OfferingCard.courseFilter",courseFilter)
    const[offerRingId,setOfferingId]=useState()
    
     const [showOfferingEdit,setOfferingEdit]=useState(false)
        const handleShowOffringEdit=()=>setOfferingEdit(true)
        const handleCloseOfferingEdit=()=>setOfferingEdit(false)

          const navigate = useNavigate();
          const location = useLocation();
    // deleteFunction
function handleDeleteOfferingCourse(id){

    axios.delete(`http://localhost:3003/course/${id}`)
    .then(()=>{
    
           toast.success("Deleted successfully");
        setOfferingData(prev => prev.filter(course => course.id !== id));
    })
    .catch((err)=>console.log("error",err))
  }
//   
function handleOffreingEdit(id){
    setOfferingId(id)
    navigate(`${location.pathname}?id=${id}`,{replace:true})
    handleShowOffringEdit()
   
}
console.log("OfferingCard.CourseOfferings",offeringData)
  return (
    <div className='d-flex gap-2 flex-wrap '>
    {offeringData.filter(item=>!courseFilter||item.course_type===courseFilter).map((item, index) => {
      return (
        <Card key={index} style={{ background: "#FFBC82" }}
          className='text-white text-white fw-600  card-custom-width'>

          <Card.Body>
            <span className='f-16'>{item.course_type}</span>

            <Card.Text>
              {item.course_name}
            </Card.Text>

            <Card.Link href="#" className='card-icon  p-2' onClick={() => {
              handleDeleteOfferingCourse(item.id)
            }}
            ><MdDelete /></Card.Link>
            <Card.Link href="#" className='card-icon  p-2' onClick={() => {
              console.log("handleCourseEditShow", item.id)
              handleOffreingEdit(item.id)
        
            }}><FaRegEdit /></Card.Link>
          </Card.Body>


          <OfferingCardEdit showOfferingEdit={showOfferingEdit}
  
            handleCloseOfferingEdit={handleCloseOfferingEdit} offerRingId={offerRingId} />

        </Card>
      )
    })}
    <span className="findId-sidebar">

    </span>


  </div>
  )
}

export default OfferingCard