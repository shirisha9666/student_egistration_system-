import React from 'react'

import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from 'react-toastify';

const CourseEditModel = ({showCourseEdit,handleCloseCourseEdit,courseFindId}) => {

    const [valuesCourse, setValuesCourse] = useState({
        course_type: "",
        course_name: "",
  
      });
      // const [courseData,setCourseData]=useState([])

      //  getUserFunctionality

      // edit functionality

      useEffect(() => {
        if (courseFindId) {
          axios
            .get(`http://localhost:3002/course/${courseFindId}`)
            .then((res) => {
              // setCourseData(res.data);
              setValuesCourse({
                course_name: res.data.course_name,
                course_type: res.data.course_type,
              });
            })
            .catch((err) => console.log("editCourseTypeCard", err));
        }
      }, [courseFindId]);

      function handelCourseEditSubmit(e){
        e.preventDefault();
        axios
          .put(`http://localhost:3002/course/${courseFindId}`, valuesCourse)
          .then((res) => {
            // setCourseData(res.data);
            setValuesCourse({
              course_name: res.data.course_name,
              course_type: res.data.course_type,
            });
            toast.success("Updated successfully");
            handleCloseCourseEdit();
          })
          .catch((err) => console.log("handelEditSubmit", err));
      }
    // edit functionality
    return (
    <Modal show={showCourseEdit} onHide={handleCloseCourseEdit}>
    <Modal.Header closeButton>
      <Modal.Title>Update Course Type</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Course Type</Form.Label>
          <Form.Select
            type="course_type"
            placeholder="course type"
            autoFocus
            onChange={(e) =>
              setValuesCourse({ ...valuesCourse, course_type: e.target.value })
            }
          >
            <option value="">{valuesCourse.course_type}</option>
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
            value={valuesCourse.course_name}
            onChange={(e) =>
              setValuesCourse({ ...valuesCourse, course_name: e.target.value })
            }
          />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseCourseEdit}>
        Close
      </Button>
      <Button variant="primary" onClick={handelCourseEditSubmit}>
      Update
      </Button>
    </Modal.Footer>
    
  </Modal>
  )
}

export default  CourseEditModel