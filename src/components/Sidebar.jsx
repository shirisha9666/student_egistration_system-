import React, { useState } from "react";

import { SiBookstack } from "react-icons/si";

import { Link } from "react-router-dom";

const Sidebar = ({ sidebarIcons,openSidebarToggle ,OpenSideba,findId,courseData,setOpenSidebarToggle}) => {
   
    const [focus,setFocus]=useState("Course Types")
   
 

  return (
    <div className="text-white main">
  
     {sidebarIcons?(<div className={` `}>
   
   <ul className="sidebar-ul-tag f-20 fw-400  ">
             <li className="py-4 px-3 fw-600 hover-sidear-heading ">
               <a className="d-flex text-left">
                 <span className="px-2">
   
                   <SiBookstack className="f-20" />{" "}
                 </span>{" "}
                 <span> Student Registration </span>
                
               </a>
             </li>
   
             {sidebarIcons.map((item, index) => {
               
               return (
                 <li key={index} className={`py-3 px-3  text-white hover-sidear-focus-bg text-center
                 ${focus===item.name?"hover-sidear-focus ":""}`}
                 onClick={()=>{
                  setOpenSidebarToggle(false)
                  setFocus(item.name)
            
                 
                 }}
                 >
                   <Link to={item.link || "#"}  className="d-flex justify-content-start
                   align-items-center ">
                     <span className="px-2 f-20">{item.icon && item.icon}</span>
                     <span className=" f-16 ">{item.name}</span>
                     
                   </Link>
                 </li>
               );
             })}
           </ul>
         </div>):(null)}

    
    </div>
  );
};

export default Sidebar;
