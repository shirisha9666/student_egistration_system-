import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from 'react-toastify';

const OfferingCardEdit = ({showOfferingEdit,handleCloseOfferingEdit,offerRingId}) => {
     //  getUserFunctionality
    //  const [offerCorseData,setOfferCorsData]=useState([])
     const[offeringValue,setOfferingValue]=useState({
        course_type: "",
        course_name: "",
  
     })

     useEffect(() => {
        if (offerRingId) {
          axios
            .get(`http://localhost:3003/course/${offerRingId}`)
            .then((res) => {
                // setOfferCorsData(res.data);
                setOfferingValue({
                    course_name: res.data?.course_name || "",
                    course_type: res.data?.course_type || "",
                  
              });
            })
            .catch((err) => console.log("editCourseTypeCard", err));
        }
      }, [offerRingId]);
      // edit functionality


      
      function handelCourseEditSubmit(e){
        e.preventDefault();
        axios
          .put(`http://localhost:3003/course/${offerRingId}`, offeringValue)
          .then((res) => {
            // setOfferCorsData(res.data);
            setOfferingValue({
                course_type: res.data?.course_type || "",
                course_name: res.data?.course_name || "",
              
           
            });
            toast.success("updated successfully");
            handleCloseOfferingEdit();
          })
          .catch((err) => console.log("handelEditSubmit", err));
      }
    // edit functionality
  return (
    <Modal show={showOfferingEdit} onHide={handleCloseOfferingEdit}>
    <Modal.Header closeButton>
      <Modal.Title>Update Course Type</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Course Type</Form.Label>
          <Form.Select
            type="text"
            placeholder="course type"
            autoFocus
            onChange={(e) =>
              setOfferingValue({ ...offeringValue, course_type: e.target.value })
            }
          >
            <option value="">{offeringValue.course_type}</option>
            <option value="Hindi">Hindi</option>
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Course Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Course name"
            autoFocus
            value={offeringValue.course_name}
            onChange={(e) =>
                setOfferingValue({ ...offeringValue, course_name: e.target.value })
            }
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseOfferingEdit}>
        Close
      </Button>
      <Button variant="primary" onClick={handelCourseEditSubmit}>
      Update
      </Button>
    </Modal.Footer>
    
  </Modal>
  )
}

export default OfferingCardEdit