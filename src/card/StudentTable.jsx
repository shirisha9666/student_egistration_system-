import React from 'react'
import Table from 'react-bootstrap/Table';


const StudentTable = ({studentData}) => {
 
    
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Student_id</th>
        <th>student_name</th>
        <th>course_name</th>
        <th>course_type</th>
        <th>contact</th>
      </tr>
    </thead>
    <tbody>
        {studentData.map((item,index)=>{
            return(
                <tr key={index}>
                <td>{item.id}</td>
                <td>{item.student_name}</td>
                <td>{item.course_name}</td>
                <td>{item.course_type}</td>
                <td>{item.contact}</td>
              </tr>
            )
        })}
     
    
    
    </tbody>
  </Table>
  )
}

export default StudentTable