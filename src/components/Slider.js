import React from 'react'
import "../components-css/Slider.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Slider() {
    const data = [
        {
            id: 1,
            image: `dl4d.png`
            
        },
        {
            id: 2,
            image: `dark.png`
        },
        {
            id: 3,
            image: `dnier.png`
        },
        {
            id: 4,
            image: `dre.png`
        },
    ]

  return (
      <Carousel className='carousel___custom' autoPlay={true} infiniteLoop={true} showStatus={false}>
          {data.map(slide => (
              <div key={slide.id} className='carousel___custom___image'>
                  <img src={require(`../assets/${slide.image}`)}  alt="" />
              </div>
          ))}
      </Carousel>
  )
}

export default Slider