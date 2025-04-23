import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OfferingCard from '../card/OfferingCard'
import OfferingCardModel from '../model/OfferingCardModel'

const CourseOfferings = () => {
    // create
    const [offeringData,setOfferingData]=useState([])
    
    const [showOffering,setOffering]=useState(false)
    const handleShowOffring=()=>setOffering(true)
    const handleCloseOffering=()=>setOffering(false)
    // edit
  
  
    
      useEffect(() => {
        axios.get("http://localhost:3003/course")
          .then(res =>setOfferingData(res.data))
          .catch(err => console.log("error", err));
      }, []);
      console.log("offeringData.CourseOfferings",offeringData)
    
  return (
    <div className='p-2 '>
    <div className='d-flex justify-content-between align-items-center'>
    <div className='text-white'>
      <h1 className='h1-tag'>Course Offering</h1>
    </div>
     <div className=' text-left pt-2 btn ' onClick={handleShowOffring}>

          <button className="p-2 f-16 fw-600  font-semebold outline-nonefocus:outline-none focus-ring
         ">Create new course </button>
          </div>
         
  </div> 
  <div>
    <div>
   
      <OfferingCard offeringData={offeringData} setOfferingData={setOfferingData}
      handleCloseOffering={handleCloseOffering}/>

    </div>
  </div>
 
  <OfferingCardModel showOffering={showOffering} handleCloseOffering={handleCloseOffering}
 />

  </div>
  )
}

export default CourseOfferings