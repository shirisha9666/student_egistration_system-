import { Button } from 'bootstrap'
import React from 'react'
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className='header'>
    <div className='  w-100 search-input d-flex justify-content-center
    align-items-center px-2 '>
        <input className='p-3 w-100 f-20 fw-500 ' placeholder='Search  '/>
        <FaSearch className='cursor text-white'/>
    </div>
   

</div>
  )
}

export default Header