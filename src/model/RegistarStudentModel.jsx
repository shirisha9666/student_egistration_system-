import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const RegistarStudentModel = ({showregister,handleCloseCourseRegister}) => {
    const [studentValue,setStudentValue]=useState({
        student_name:"",
        email:"",
        contact:"",
        course_type: "",
        course_name: "",

    })
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }
    function handelStudentDetailsSubmit(e){
        e.preventDefault()
       const{student_name,email,contact,course_type,course_name}=studentValue
       if (!student_name || !email || !contact || !course_type || !course_name) {
        alert("Please fill in all the fields");
        return;
      }
        if(!isValidEmail(email)){
            alert("Please enter a valid email address");
            return;
        
        }
        if (contact.length !== 10 || !/^\d+$/.test(contact)) {
            alert("Please enter a valid 10-digit contact number");
            return;
          }

          axios.post("http://localhost:3004/course",studentValue)
          .then((res)=>{
            setStudentValue(res.data)
            alert("Student Registered successfully")
            handleCloseCourseRegister()
          }).catch((err)=>console.log("handelSubmit",err))

    }
  return (
    <Modal show={showregister} onHide={handleCloseCourseRegister}>
    <Modal.Header closeButton>
      <Modal.Title>Students to Register </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Student name"
            autoFocus
        
            onChange={(e) =>
                setStudentValue({ ...studentValue, student_name: e.target.value })
            }
          />
        </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>eamil</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your email"
            autoFocus
        
            onChange={(e) =>
                setStudentValue({ ...studentValue, email: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Course Type</Form.Label>
          <Form.Select
            type="text"
            placeholder="course type"
            autoFocus
            onChange={(e) =>
                setStudentValue({ ...studentValue, course_type: e.target.value })
            }
          >
            <option value="">Select Type</option>
            <option value="Individual ">Individual </option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
            <option value="Group ">Group </option>
          </Form.Select>
        </Form.Group>
       
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Contact Details</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Number"
            autoFocus
        
            onChange={(e) =>
                setStudentValue({ ...studentValue, contact: e.target.value })
            }
          />
        </Form.Group>





        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Course name"
            autoFocus
        
            onChange={(e) =>
                setStudentValue({ ...studentValue, course_name: e.target.value })
            }
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseCourseRegister}>
        Close
      </Button>
      <Button variant="primary" onClick={handelStudentDetailsSubmit}>
      Create
      </Button>
    </Modal.Footer>
    
  </Modal>
  )
}

export default RegistarStudentModel