import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import List from '../Layout/List'
import ListItem from '../ListItem';
import Image from '../Layout/Image';
import { FaFacebook,FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";



const Footer = () => {
  return (

    <div className="mt-36 bg-[#F5F5F3] py-14">
        
      <Container>
        <Flex className="flex flex-wrap lg:justify-between">
          <div className="w-full text-center lg:text-start sm:w-4/12 lg:w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Home"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="About"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Contact"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Journal1"
                href="#"
              />
            </List>
            <Flex className="flex gap-x-3 text-[#262626] justify-center lg:justify-start mt-16">
              <FaFacebook className='text-[#262626]'/>
              <CiLinkedin className='text-[#262626]'/>
              <FaInstagram className='text-[#262626]'/>

            </Flex>
          </div>
          <div className="w-full text-center lg:text-start sm:w-4/12 lg:w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Category 1"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Category 2"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Category 3"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Category 4"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Category 5"
                href="#"
              />
            </List>
          </div>
          <div className="w-full text-center lg:text-start sm:w-4/12 lg:w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Privacy Policy"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Terms & Conditions"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Special E-shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Shipping"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Secure Payments"
                href="#"
              />
            </List>
          </div>
          <div className="flex w-full lg:w-[30%] justify-center">
            <div>
              <h4 className="mb-4 font-dm text-base font-bold text-center lg:text-start">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <Flex >
          <div className="w-[40%] hidden lg:block ">
            <Image imgsrc="assets/ftlogo.png" />
          </div>
          
          <h3 className=' text-center   
          font-Dm font-normal text-base text-[#6D6D6D] mt-10 lg:mt-[211px]'>
            2020 Orebi Minimal eCommerce Figma Template by Adveits</h3>
          </Flex>
          
          
        </Flex>
      

      </Container>
    </div>

  
  );
};

export default Footer;

