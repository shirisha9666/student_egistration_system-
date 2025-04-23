
import axios from "axios";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";


const OfferingCardModel = ({showOffering,handleCloseOffering}) => {
    const [offering, setOffering] = useState({
        course_name: "",
        course_type: "",
      });
  
      function handelSubmit(e){
    e.preventDefault()
    axios.post("http://localhost:3003/course",offering)
    .then((res)=>{
      setOffering(res.data)
      alert("created successfully")
      handleCloseOffering()
    }).catch((err)=>console.log("handelSubmit",err))
    
      }
  return (
    <div>
    <>
         <Modal show={showOffering} onHide={handleCloseOffering}>
           <Modal.Header closeButton>
             <Modal.Title>Create Course Type</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <Form>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            
                 <Form.Select
                   type="text"
                   placeholder="course type"
                   autoFocus
                   onChange={(e) =>
                    setOffering({ ...offering, course_type: e.target.value })
                   }
                 >
                   <option value="">Select course type</option>
                   <option value="Hindi">Hindi</option>
                   <option value="English">English</option>
                   <option value="Urdu">Urdu</option>
                 </Form.Select>
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 <Form.Label>Course Name</Form.Label>
                 <Form.Control type="text" placeholder="Course name" autoFocus 
                 onChange={e=>setOffering({...offering, course_name:e.target.value})}/>
               </Form.Group>
             </Form>
           </Modal.Body>
           <Modal.Footer>
             <Button variant="secondary" onClick={handleCloseOffering}>
               Close
             </Button>
             <Button variant="primary" onClick={handelSubmit}>
             Create
             </Button>
           </Modal.Footer>
         </Modal>
       </>
</div>
  )
}

export default OfferingCardModel