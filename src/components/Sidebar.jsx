import React, { useState } from "react";

import { SiBookstack } from "react-icons/si";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarIcons,openSidebarToggle ,OpenSideba,findId,courseData}) => {
   
    const [focus,setFocus]=useState("Course Types")
   
 

  return (
    <div className="text-white main">
      {/* menubar */}
        {/* <span className={`px-3 text-right  fw-600  f-18  cursor `}
        onClick={OpenSidebar}><HiMenu /></span> */}
     {/* menubar */}
     {sidebarIcons?(<div className={` `}>
   
   <ul className="sidebar-ul-tag f-16 fw-400  ">
             <li className="py-4 px-3 fw-600 hover-sidear-heading ">
               <a className="d-flex text-left">
                 <span className="px-2">
   
                   <SiBookstack className="f-20" />{" "}
                 </span>{" "}
                 <span> Course Management</span>
                
               </a>
             </li>
   
             {sidebarIcons.map((item, index) => {
               
               return (
                 <li key={index} className={`py-3 px-3  text-white hover-sidear-focus-bg
                 ${focus===item.name?"hover-sidear-focus":""}`}
                 onClick={()=>{
                
                  setFocus(item.name)
            
                 
                 }}
                 >
                   <Link to={item.link || "#"}  className="d-flex">
                     <span className="px-2">{item.icon && item.icon}</span>
                     <span>{item.name}</span>
                     
                   </Link>
                 </li>
               );
             })}
           </ul>
         </div>):(null)}

      {/* <div className={` sidev-postion sidebarLinks`}>
   
<ul className="sidebar-ul-tag f-16 fw-400  ">
          <li className="py-4 px-3 fw-600 hover-sidear ">
            <a className="d-flex text-left">
              <span className="px-2">

                <SiBookstack className="f-20" />{" "}
              </span>{" "}
              <span> Course Type Management</span>
             
            </a>
          </li>

          {sidebarIcons.map((item, index) => {
            
            return (
              <li key={index} className={`py-3 px-3  text-white hover-sidear  hover-sidear-focus
              ${focus===item.name?"hover-sidear-focus":""}`}
              >
                <a href={item.link || "#"}  className="d-flex">
                  <span className="px-2">{item.icon && item.icon}</span>
                  <span>{item.name}</span>
                  
                </a>
              </li>
            );
          })}
        </ul>
      </div> */}
    </div>
  );
};

export default Sidebar;
