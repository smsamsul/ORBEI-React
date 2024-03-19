import React from 'react'
import SitebarContent from './SitebarContent'

const LeftSitebar = () => {
  return (
    <>
   
    <SitebarContent dropdown={true} dropTittle="Shop by Category"/>
    <SitebarContent dropdown={true} dropTittle="Shop by colors"/>
  
    

    
    </>
  )
}

export default LeftSitebar
