import React from 'react'
import Image from '../Layout/Image'
import Container from '../Layout/Container'
import { Link } from 'react-router-dom'

const PhoneOf = () => {
  return (
    <div className='mt-10 lg:mt-32'>
        <Container>
            <Link to="#">
            <Image className="max-w-full" imgsrc="assets/phone1.png"/>
      

            </Link>
    

        </Container>
      
    </div>
  )
}

export default PhoneOf
