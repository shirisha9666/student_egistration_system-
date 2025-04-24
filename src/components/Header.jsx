
import React from 'react'


const Header = ({ setCourseFilter, courseFilter }) => {
  console.log("courseFilter", courseFilter)
  return (
    <div className='header '>
      <div className='search-input d-flex justify-content-center
    align-items-center w-100'>

        <select className='p-2 w-100 f-16 fw-500 border border-none '
          placeholder='Search  ' value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}>
          <option value="">SelectType</option>
          <option value="Individual">Individual</option>
          <option value="Group">Group</option>
          <option value="Special">Special</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>

        </select>


      </div>


    </div>
  )
}

export default Header