import React from 'react'
import Navbar from './Navbar/Navbar'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const Rootlayout = () => {
  return (

    <>
    <Navbar/>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
    
  )
}

export default Rootlayout
