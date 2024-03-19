import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import Product from './Product'
import Slider from "react-slick";
import ArrivalSlider from './ArrivalSliderNext'
import ArivalSliderPrev from './ArivalSliderPrev'

const NewArival = () => {



    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <ArrivalSlider/>,
        prevArrow:<ArivalSliderPrev/>,

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
    
    

      };
    
  return (

    <div>
        <Container>
           <Heading  text="New Arrivals"/>
         

           <Slider {...settings} >

           <div className='w-full  lg:max-w-[370px]'>

            <Product className="sm:w-[310px] md:w-[320px] lg:w-[370px] "  src="assets/p1.png" bage={true}/>

            </div>

            <div className='w-full lg:max-w-[370px]'>

            <Product className="sm:w-[310px] md:w-[320px] lg:w-[370px]  " src="assets/p2.png" bage={false}/>

            </div>
            <div className='w-full  lg:max-w-[370px]'>
            <Product className="sm:w-[310px] md:w-[320px] lg:w-[370px] " src="assets/p4.png" bage={true}/>

            </div>
      
            <div className='w-full lg:max-w-[370px]'>

            <Product className="sm:w-[310px] md:w-[320px] lg:w-[370px] " src="assets/p2.png" bage={false}/>

            </div>

            <div className='w-full lg:max-w-[370px]'>

            <Product className="sm:w-[310px] md:w-[320px lg:w-[370px] " src="assets/p2.png" bage={false}/>

            </div>
           </Slider>
          
        </Container>
      
    </div>
  )
}

export default NewArival
