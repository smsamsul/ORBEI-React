
import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";

const LeftSiteBarItem = (props) => {

let [drop, setdrop]=useState(props.subdropdown)
let [show, setshow]=useState(false)
  return (
    <div>
    {drop 
    
    ?
    <div onClick={()=> setshow(!show)}
    className="flex items-center justify-between cursor-pointer border-b border-solid border-[#767676] py-5">
   <h3 className='cursor-pointer font-Dm font-normal 
   text-base text-[#767676] '>{props.tittle}</h3>
   < GoPlus className='text-[#767676]'/>

   </div>
   
     :
     <h3 className='cursor-pointer font-Dm font-normal 
     text-base text-[#767676] border-b border-solid border-[#767676] py-5'> 
     {props.tittle}</h3>

    }

{show && 
<div>

{props.children}
</div>
}
</div>
    
  )
}

export default LeftSiteBarItem
