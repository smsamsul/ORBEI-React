import React from 'react'

import { useEffect, useState } from 'react';
import Image from '../Layout/Image';
import Flex from '../Layout/Flex';
import List from '../Layout/List';
import ListItem from '../ListItem';
import { FaBars, } from "react-icons/fa6";
import Container from '../Layout/Container';

const Navbar = () => {



    
let [show,setshow] = useState(true)

useEffect(()=>{

function scrollWidth(e){
console.log("ami")

if(window.innerWidth < 1024){

  
  setshow(false)
}
else{
  setshow(true)
}

}
scrollWidth()


window.addEventListener("resize",scrollWidth)

},[])

  return (
    <nav className='py-8'>
    <Container >

    <Flex className='lg:flex'>
      <div className='lg:w-3/12'>
     
      <Image imgsrc="/assets/Logo.png"/>
      </div>

     
      <div className='w-full lg:w-9/12 '>
      < FaBars className='block lg:hidden ml-auto 
      absolute top-10 right-2.5' 
       onClick={()=>setshow(!show)}/>

      {show && 
      <List className='lg:flex lg:justify-center lg:gap-10 font-Dm text-sm 
       mt-5  lg:mt-0  bg-gray-300 lg:bg-white 
       left-0 top-10 w-full p-4 lg:p-0'>
       <ListItem className="font-normal hover:font-bold pt-4 lg:pt-0"  item="Home"/> 
       <ListItem className="font-normal hover:font-bold pt-4 lg:pt-0" item="About"/>
       <ListItem className="font-normal hover:font-bold pt-4 lg:pt-0" item="Service"/>
       <ListItem className="font-normal hover:font-bold pt-4 lg:pt-0" item="Contact"/>
      </List>
      }

      </div>
     
     
    </Flex>

  </Container>

  </nav>
  )
}

export default Navbar
