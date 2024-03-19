import React from 'react'
import { HiArrowSmallLeft } from "react-icons/hi2";
const ArivalSliderPrev = (props) => {
    const { className, style, onClick } = props;
    return (
      <span
        className=" bg-[rgba(0,0,0,.20)] !flex w-16 h-16 rounded-full justify-center 
        items-center absolute left-2 top-[40%] -translate-y-2/4 z-50"
        style={{ ...style, }}
        onClick={onClick}
      >
        < HiArrowSmallLeft className='text-2xl text-white'/>
      </span>
    );
  }
  
export default ArivalSliderPrev
