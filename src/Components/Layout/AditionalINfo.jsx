import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { TbNumber2,TbReload } from "react-icons/tb";
import { MdLocalShipping } from "react-icons/md";
import Pragrapp from './Pragrapp';

const AditionalINfo = () => {
  return (

    <Container>

        <Flex className="flex  items-center justify-between py-7">

        <Flex className="flex gap-x-1 md:gap-x-4 items-center">
            <TbNumber2 className='text-[10px] md:text-2xl'/>
            <Pragrapp className="font-Dm font-normal text-[10px] md:text-base text-[#6d6d6d]" 
            text="Two years warranty"/>
        </Flex>

        <Flex className="flex gap-x-1 md:gap-x-4 items-center">
            <MdLocalShipping className='text-[10px] md:text-2xl'/>
            <Pragrapp className="font-Dm font-normal text-[10px] md:text-base text-[#6d6d6d]" 
            text="Free shipping"/>
        </Flex>

        <Flex className="flex gap-x-1 md:gap-x-4 items-center">
            <TbReload className='text-[10px] md:text-2xl'/>
            <Pragrapp className="font-Dm font-normal text-[10px] md:text-base text-[#6d6d6d]" 
            text="Return policy in 30 days"/>
        </Flex>
        </Flex>
        

    </Container>
  )
}

export default AditionalINfo
