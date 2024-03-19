import React from 'react'
import Image from './Image'
import Bage from './Bage'
import Flex from './Flex'
import { FaHeart,FaCartArrowDown  } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import Pragrapp from './Pragrapp'

import Heading2 from './Heading2';

const Product = ({src,bage,className}) => {
  return (
    <div className={className}>
    <div className='relative overflow-y-hidden group'>
    <Image className="w-full" imgsrc={src} />
    {bage &&
    <Bage className="bg-primary inline-block text-white py-2 px-8 
    absolute top-5 left-5" text="New"/>}
    <div className='bg-white absolute bottom-[-61%] 
    group-hover:bottom-[0] left-0 h-40 w-full py-6 px-7 '>

    <Flex className="flex gap-x-1 sm:gap-x-4 justify-end items-center my-5">
        
        <Pragrapp className="font-Dm font-normal text-base sm:text-base text-[#6d6d6d]" 
         text="Add to Wish List"/>
        <FaHeart  className='text-base'/>
        
    </Flex>

    <Flex className="flex gap-x-1 md:gap-x-4 justify-end items-center">
        
        <Pragrapp className="font-Dm font-normal text-base sm:text-base text-[#6d6d6d]" 
         text="Compare"/>
        <IoReload  className='text-base'/>

    </Flex>
        

    <Flex className="flex gap-x-1 md:gap-x-4 justify-end items-center">
        
        <Pragrapp className="font-Dm font-bold text-base sm:text-base text-[#6d6d6d]" 
         text="Add to Cart"/>
        <FaCartArrowDown  className='text-base'/>

    </Flex>
        
    </div> 

    </div>
   
    <Flex className="flex justify-between">
     <Heading2 className="font-Dm font-bold text-xl mt-4" text="Basic Crew Neck Tee" />
     <Pragrapp className="Dm font-normal text-base text-[#767676]" text="$44.00"/>
    </Flex>
    <Pragrapp text="Black"/>
    
    </div>
    
  )
}

export default Product
