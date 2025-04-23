import React from 'react'
import Table from 'react-bootstrap/Table';


const StudentTable = ({courseFilter,studentData}) => {
 
    
  return (
    <Table striped bordered hover responsive variant size >
    <thead className='f-18'>
      <tr>
        <th>Student_id</th>
        <th>Student_name</th>
        <th>Student_email</th>
        <th>course_name</th>
        <th>course_type</th>
        <th>contact</th>
      </tr>
    </thead>
    <tbody className='f-16'>
        {studentData.filter(item=>!courseFilter || item.course_type===courseFilter).map((item,index)=>{
            return(
                <tr key={index}>
                <td>{item.id}</td>
                <td>{item.student_name}</td>
                <td>{item.email}</td>
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