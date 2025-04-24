
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { toast } from 'react-toastify';


const CourseTypeCardEdit = ({
  handleEditClose,
  showEdit,

  
  findId,
}) => {
  const [values, setValues] = useState({
    course_name: "",
    course_type: "",
  });

  // const [data, setData] = useState([]);


  useEffect(() => {
    if (findId) {
      axios
        .get(`http://localhost:3001/course/${findId}`)
        .then((res) => {
          // setData(res.data);
          setValues({
            course_name: res.data.course_name || " ",
            course_type: res.data.course_type || "",
          });
        })
        .catch((err) => console.log("editCourseTypeCard", err));
    }
  }, [findId]);


  function handelEditSubmit(e) {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/course/${findId}`, values)
      .then((res) => {
        // setData(res.data);
        setValues({
          course_name: res.data.course_name,
          course_type: res.data.course_type,
        });
        toast.success("Updated Successfully");
        handleEditClose();
      })
      .catch((err) => console.log("handelEditSubmit", err));
  }

  console.log("values.course_name", values);
  return (
    <Modal show={showEdit} onHide={handleEditClose}>
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
              value={values.course_type}
              onChange={(e) =>
                setValues({ ...values, course_type: e.target.value })
              }
            >
              <option value="">{values.course_type}</option>
              <option value="Individual">Individual</option>
              <option value="Group">Group</option>
              <option value="Special">Special</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Course name"
              autoFocus
              value={values.course_name}
              onChange={(e) =>
                setValues({ ...values, course_name: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleEditClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handelEditSubmit}>
          Upadte Changes
        </Button>
      </Modal.Footer>
      
    </Modal>
  );
};

export default CourseTypeCardEdit;
