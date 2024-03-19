import React, { useState } from 'react'
import Flex from './Flex'
import { GoTriangleDown } from "react-icons/go";
import LeftSiteBarItem from './LeftSiteBarItem';

const SitebarContent = ({dropdown,dropTittle}) => {

let [drop, setdrop]=useState(dropdown)
let [show, setshow]=useState(dropdown)


  return (

    <div className='mb-14'>
        {drop 
        
        ?
        <div onClick={()=> setshow(!show)}
        className="flex items-center justify-between cursor-pointer mb-9">
   
       <h3 className='cursor-pointer font-Dm font-bold text-xl'>{dropTittle}</h3>

       < GoTriangleDown/>
   
       </div>
         :
         <h3 className='cursor-pointer font-Dm font-bold text-xl mb-9'>{dropTittle}</h3>

        }

    {show && 
    <div>

      <LeftSiteBarItem subdropdown={true} tittle="Category 1">
     <h3  className='cursor-pointer font-Dm font-normal 
     text-base text-[#767676] border-b border-solid border-[#767676] py-5'>juujjujjjjjj</h3>
      </LeftSiteBarItem>
      <LeftSiteBarItem subdropdown={true} tittle="Category 1">
     <h3  className='cursor-pointer font-Dm font-normal 
     text-base text-[#767676] border-b border-solid border-[#767676] py-5'>juujjujjjjjj</h3>
      </LeftSiteBarItem>
      <LeftSiteBarItem subdropdown={true} tittle="Category 1">
     <h3  className='cursor-pointer font-Dm font-normal 
     text-base text-[#767676] border-b border-solid border-[#767676] py-5'>juujjujjjjjj</h3>
      </LeftSiteBarItem>
      <LeftSiteBarItem subdropdown={true} tittle="Category 1">
     <h3  className='cursor-pointer font-Dm font-normal 
     text-base text-[#767676] border-b border-solid border-[#767676] py-5'>juujjujjjjjj</h3>
      </LeftSiteBarItem>
      <LeftSiteBarItem subdropdown={true} tittle="Category 1">
     <h3  className='cursor-pointer font-Dm font-normal 
     text-base text-[#767676] border-b border-solid border-[#767676] py-5'>juujjujjjjjj</h3>
      </LeftSiteBarItem>

    </div>

    }

    {! drop &&
    
    <div>

    <LeftSiteBarItem subdropdown={true} tittle="Category 1">
    <h3 className='cursor-pointer font-Dm font-normal 
     text-base text-[#767676] border-b border-solid border-[#767676] py-5'>juujjujjjjjj</h3>
   </LeftSiteBarItem>
    <LeftSiteBarItem subdropdown={true} tittle="Category 1">
    <h3 className='cursor-pointer font-Dm font-normal 
     text-base text-[#767676] border-b border-solid border-[#767676] py-5'>juujjujjjjjj</h3>
   </LeftSiteBarItem>
    <LeftSiteBarItem subdropdown={true} tittle="Category 1">
    <h3 className='cursor-pointer font-Dm font-normal 
     text-base text-[#767676] border-b border-solid border-[#767676] py-5'>juujjujjjjjj</h3>
   </LeftSiteBarItem>
    <LeftSiteBarItem subdropdown={true} tittle="Category 1">
    <h3 className='cursor-pointer font-Dm font-normal 
     text-base text-[#767676] border-b border-solid border-[#767676] py-5'>juujjujjjjjj</h3>
   </LeftSiteBarItem>
    <LeftSiteBarItem subdropdown={true} tittle="Category 1">
    <h3 className='cursor-pointer font-Dm font-normal 
     text-base text-[#767676] border-b border-solid border-[#767676] py-5'>juujjujjjjjj</h3>
   </LeftSiteBarItem>

  </div>

    }
    </div>
  )
}

export default SitebarContent
