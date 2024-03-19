import React from 'react'
import { HiArrowSmallRight } from "react-icons/hi2";
const ArrivalSlider = (props) => {
    const { className, style, onClick } = props;
    return (
      <span
        className=" bg-[rgba(0,0,0,.20)] !flex w-16 h-16 rounded-full justify-center 
        items-center absolute right-6 top-[40%] -translate-y-2/4"
        style={{ ...style, }}
        onClick={onClick}
      >
        < HiArrowSmallRight className='text-2xl text-white'/>
      </span>
    );
  }

export default ArrivalSlider
