import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from '../Layout/Image';
import { Link } from 'react-router-dom';

const Banner = () => {

    const [DotActive,setDotActive] = useState(0)
    const settings = {
        dots: true,
        beforeChange: (prev, next) => {
        setDotActive( next);
          },
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        Infinity: true,
        appendDots: dots => (
            <div

              style={{
               position:'absolute',
               top:"50%",
               left:'8%',
               transform:"translateY(-50%)"
               
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
            style=
            
            { i === DotActive? 
                {
                    
                width: "30px",
                color: "#000",
                borderRight: "3px black solid",
                padding:"10px 0",
                }: {
                    width: "30px",
                    color: "#000",
                    borderRight: "3px white solid",
                    padding:"10px 0",
                    color:'transparent'
                }}
            
            >
              0{i + 1}
            </div>
          ),
          responsive: [
            {
              breakpoint: 576,
              settings: {
                dots: true,

                appendDots: dots => (
                    <div
        
                      style={{
                       position:'absolute',
                       top:"50%",
                       left:'2%',
                       transform:"translateY(-50%)"
                       
                      }}
                    >
                      <ul style={{ margin: "0px" }}> {dots} </ul>
                    </div>
                  ),
                  customPaging: i => (
                    <div
                    style=
                    
                    { i === DotActive? 
                        {
                        fontSize:"14px",
                        width: "30px",
                        color: "#000",
                        borderRight: "3px black solid",
                       
                        }: {
                            width: "30px",
                            color: "#000",
                            borderRight: "3px white solid",
                            fontSize:"14px",
                            color:'transparent'
                        }}
                    
                    >
                      0{i + 1}
                    </div>
                  ),
              }
            }
          ]
    
      };
    
      
  return (
    <Slider className='z-[-1]' {...settings}>
        
<Link to="#">
<div><Image className="w-full" imgsrc="assets/banner1.png"/></div>
</Link>

<Link to="#">
<div><Image className="w-full" imgsrc="assets/banner1.png"/></div>
</Link>

<Link to="#">
<div><Image className="w-full" imgsrc="assets/banner1.png"/></div>
</Link>

  
    
  </Slider>
  )
}

export default Banner
