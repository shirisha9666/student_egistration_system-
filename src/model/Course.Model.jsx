
import axios from "axios";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const CourseModel = ({showCourse,handleCloseCourse,handleShowCourse}) => {
    const [values, setValues] = useState({
        course_name: "",
        course_type: "",
      });
      console.log("values",values)
      function handelSubmit(e){
    e.preventDefault()
    axios.post("http://localhost:3002/course",values)
    .then((res)=>{
      setValues(res.data)
      alert("created successfully")
      handleCloseCourse()
    }).catch((err)=>console.log("handelSubmit",err))
    
      }
  return (
    <div>
         <>
              <Modal show={showCourse} onHide={handleCloseCourse}>
                <Modal.Header closeButton>
                  <Modal.Title>Create Course Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                 
                      <Form.Select
                        type="course_type"
                        placeholder="course type"
                        autoFocus
                        onChange={(e) =>
                          setValues({ ...values, course_name: e.target.value })
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
                      <Form.Control type="Course" placeholder="Course name" autoFocus 
                      onChange={e=>setValues({...values, course_type:e.target.value})}/>
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseCourse}>
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

export default CourseModel