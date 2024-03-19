import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import Image from '../Layout/Image'
import { Link } from 'react-router-dom'

const Adversite = () => {
  return (
   <div className='mt-5 md:mt-36'>
   <Container>
    <Flex className=" flex-col gap-y-4 sm:gap-y-5 flex sm:flex-row gap-x-10 ">
        
    <div className='max-w-2/4'>
        <Link to="#">
        <Image imgsrc="assets/Ad_1.png"/>

        </Link>
     
    </div>

    <div className='max-w-2/4'>
        <Link to="#" >
        <Image imgsrc="assets/Ad_2.png"/>

        </Link>
        <Link to="#" className='inline-block mt-5 sm:mt-4 md:mt-8'>
        <Image imgsrc="assets/Ad_3.png"/>

        </Link>
     
    </div>
    </Flex>
   </Container>
   
   </div>
  )
}

export default Adversite
