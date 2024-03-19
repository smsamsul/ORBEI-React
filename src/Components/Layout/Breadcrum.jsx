import React from 'react'

import { Routes, Route, useParams, Link } from 'react-router-dom';
import { FaAngleRight } from "react-icons/fa";
const Breadcrum = ({text}) => {

    const params = (useParams);
  return (
    <div className='mt-[124px]'>

    <h2 className="font-Dm font-bold text-5xl">{text} </h2>
    <p className='flex items-center gap-x-2 font-Dm font-normal text-base text-[#767676] mt-2.5 '> <Link to="/">home</Link> < FaAngleRight/>
     {window.location.pathname.split("/")[1]}</p>
      
    </div>
  )
}

export default Breadcrum
