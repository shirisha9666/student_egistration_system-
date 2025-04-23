import axios from "axios";
import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Coursetypemodel = ({ show, setShow, handleClose, handleShow }) => {
  const [values, setValues] = useState({
    course_name: "",
    course_type: "",
  });
  function handelSubmit(e){
e.preventDefault()
axios.post("http://localhost:3002/course",values)
.then((res)=>{
  setValues(res.data)
  handleClose()
}).catch((err)=>console.log("handelSubmit",err))

  }


  return (
    <>
      <Modal show={show} onHide={handleClose}>
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
                  setValues({ ...values, course_type: e.target.value })
                }
              >
                <option value="">Select course type</option>
                <option value="Individual">Individual</option>
                <option value="Group">Group</option>
                <option value="Special">Special</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Course Name</Form.Label>
              <Form.Control type="text" placeholder="Course name" autoFocus 
              onChange={e=>setValues({...values, course_name:e.target.value})}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handelSubmit}>
           Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Coursetypemodel;
