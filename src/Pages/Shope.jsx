import React, { useState } from 'react'
import Container from '../Components/Layout/Container'
import Breadcrum from '../Components/Layout/Breadcrum';
import Flex from '../Components/Layout/Flex';
import Paginate from '../Components/Layout/Paginate';
import LeftSitebar from '../Components/Layout/LeftSitebar';




const Shope = () => {


  let [shownumber,setshownumber]=useState(12) 

  let handallePageniteChange =(e)=>{

    setshownumber(+e.target.value)


  }


  return (
    <div>
        <Container>
        <Breadcrum text="Products"/>
        <Flex className="flex gap-x-10">
        <div className='w-[25%] '>
          <LeftSitebar/>
        
        </div>
        <div className='w-[75%] relative'>

          <div className='flex gap-x-10 justify-end mb-3.5'>

          <div className='md:flex items-center gap-x-3.5'>
          <div>
        <span  className='font-Dm font-normal text-base text-[#767676]'>Sort by:</span>
        </div>
      <select id="countries" class=" md:w-[239px]  border border-[#f0f0f0] 
     lg:text-sm rounded-lg focus:ring-black focus:border-black block
     font-Dm font-normal text-base p-2.5 text-[#767676]">
    
    <option selected className='!text-[#767676]' >Featured</option>
   <option className='font-Dm font-normal text-base text-[#767676]' value="US">United States</option>
    <option className='font-Dm font-normal text-base text-[#767676]' value="CA">Canada</option>
    <option className='font-Dm font-normal text-base text-[#767676]'value="FR">France</option>
    <option className='font-Dm font-normal text-base text-[#767676]' value="DE">Germany</option>
      </select>

        </div>

        <div className='flex items-center gap-x-3.5'>
          <div>
        <span  className='font-Dm font-normal text-base text-[#767676]'>Show:</span>
        </div>

    <select onClick={handallePageniteChange} id="countries" class=" md:w-[139px]  
    border border-[#f0f0f0] 
     lg:text-sm rounded-lg focus:ring-black focus:border-black block
     font-Dm font-normal text-base p-2.5 text-[#767676]">
  
    <option className='font-Dm font-normal text-base text-[#767676]' value="12">12</option>
    <option className='font-Dm font-normal text-base text-[#767676]'value="24">24</option>
    <option className='font-Dm font-normal text-base text-[#767676]' value="48">48</option>
    </select>

    </div>

      </div>
       <Paginate itemsPerPage={shownumber}/>
      </div>


        </Flex>
        </Container>
      
    </div>
  )
}

export default Shope
