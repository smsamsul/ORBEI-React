import React, { useEffect, useRef, useState } from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import DropDown from '../Layout/DropDown'

import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FaSearch,FaUser,  } from "react-icons/fa";
// import { GoTriangleUp } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

import { FaShoppingCart } from "react-icons/fa";
import List from '../Layout/List';
import ListItem from '../ListItem';
import Search from '../Layout/Search';
import Image from '../Layout/Image';
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
const Header = () => {


  let [catagoryshow,setcatagoryshow] =useState(false)
  let [userDropDwon,setuserDropDwon] =useState(false)
  let [cartDropDwon,setcartDropDwon] =useState(false)

  let catagoryref =useRef()
   let useref =useRef()
   let cartref =useRef()
 
  useEffect(()=>{

    
    document.body.addEventListener("click",(e)=>{

      if(catagoryref.current.contains(e.target)){
        setcatagoryshow(true)
      }
      else{
        setcatagoryshow(false)
      }

      if( useref.current.contains(e.target)){
        setuserDropDwon(true)
      }
      else{
        setuserDropDwon(false)
      }

      if( cartref.current.contains(e.target)){
        setcartDropDwon(true)
      }
      else{
        setcartDropDwon(false)
      }

    })
  },[])

     
  return (
    <>
    <div className='bg-[#F5F5F3] py-6 '>

        <Container>
       <Flex className="flex justify-between">
        <div className='flex items-center'>
            <DropDown className="relative"  dropref={catagoryref}>

              <p className='flex items-center gap-x-2.5 font-Dm font-normal text-sm '>
                <HiMiniBars3BottomRight /> <span className='hidden lg:inline-block'> Shop by Category</span> 
              </p>

              {catagoryshow &&
              <List className='absolute top-8 w-[263px] bg-primary text-[#767676] text-sm'>
                <ListItem className="py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-7 font-Dm font-normal hover:font-bold duration-75"  item="Accesories"/>

                <ListItem className="py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-7 font-Dm font-normal hover:font-bold duration-75"  item="Furniture"/>

                <ListItem className="py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-7 font-Dm font-normal hover:font-bold duration-75"  item="Electronics"/>

                <ListItem className="py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-7 font-Dm font-normal hover:font-bold duration-75" item="Bags"/>

                <ListItem className="py-4 px-5 border-b border-solid border-[#2D2D2D] hover:text-white hover:px-7 font-Dm font-normal hover:font-bold duration-75" item="Home appliances"/>

              </List>
              }
           
            </DropDown>
        </div>
        <div className='lg:w-[600px] w-auto relative'>
          <Search className="w-full py-4 px-5 placeholder:text-[#c4c4c4] font-Dm font-normal text-sm " placeholder="Search Product"/>

          <FaSearch className='absolute top-4 right-4'/>
        </div>
        <div className='flex items-center '>
          <Flex className="flex gap-10">

            <DropDown className="relative" dropref={useref}>
            <div className='flex justify-center items-center'>
            <FaUser/>
            <IoMdArrowDropdown />
           </div>
           {userDropDwon &&
              <List className='absolute top-8 right-0 w-[200px] bg-white text-[#767676] 
              text-sm text-center border border-solid border-[#F0F0F0]'>
                <ListItem className="py-4 px-5 border-b border-solid border-[#f0f0f0]  hover:text-white  font-Dm font-normal 
                hover:font-bold hover:bg-primary duration-75" item="My Account"/>

                <ListItem className="py-4 px-5 border-b border-solid border-[#f0f0f0]  hover:text-white  font-Dm font-normal
                 hover:font-bold hover:bg-primary duration-75"  item="Log Out"/>

        

              </List>
              }
            </DropDown>
           
           <div>
            
            <DropDown className="relative" dropref={cartref}>

            <FaShoppingCart className='text-xl'/>

           {cartDropDwon &&

  <div  className='absolute top-16 right-0 w-[378px] bg-[#f5f5f3] 
  border border-solid'>

    <div className='border-[#f0f0f0] p-5'>

    <Flex className="flex justify-between">
    <div>
  <Image imgsrc="assets/cart.png"/>
    </div>
     <div className='flex flex-col justify-center'>

     <h3 className='font-Dm font-bold text-sm text-primary'>Black smart watch</h3>

     <p className='font-Dm font-bold text-sm text-primary mt-3'>$44.00</p>

      </div>
      <div className='flex justify-end items-center'>
       <ImCross />
         </div>
         </Flex>
         </div>
         <div className='bg-white p-5 '>
          <h4 className='font-Dm font-normal text-base text-[#767676]'>Sobtotal: 
          <span className='font-bold text-primary'>$44.00</span></h4>

          <Link to="#" className='font-Dm font-bold text-base py-4 px-10
          border border-solid border-primary inline-block mt-3'>
          View Cart
          </Link>

          <Link to="#" className='bg-primary text-white ml-5 font-Dm font-bold text-base py-4 px-10
          border border-solid border-primary inline-block mt-3'>
          Checkout
          </Link>

      </div>
     </div>
      }
      </DropDown>
    </div>
    </Flex>
    </div>
     </Flex>
</Container>
   
    </div>
    
    
    </>
  )
}

export default Header
