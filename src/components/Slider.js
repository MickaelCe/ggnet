import React from 'react'
import "../components-css/Slider.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Slider() {
    const data = [
        {
            id: 1,
            image: `dl4d.png`,
            action: `Survive `,
            title: `with your friends`,
            text: `"Trust me I know how to crown a witch..."`
        },
        {
            id: 2,
            image: `dark.png`,
            action: `Become `,
            title: `the elden lord`,
            text: `"Maidenless ? Try finger but holes"`
        },
        {
            id: 3,
            image: `dnier.png`,
            action: `Experience `,
            title: `a deep story`,
            text: `-26 different endings-`
        },
        {
            id: 4,
            image: `dre.png`,
            action: `Revive `,
            title: `the nightmare`,
            text: `"What happened to the burger ?"`
        },
    ]

  return (
      <Carousel className='carousel___custom' autoPlay={true} infiniteLoop={true} showStatus={false} swipeable={true}>
          {data.map(slide => (
              <div key={slide.id} className='carousel___custom___image'>
                  <img src={require(`../assets/${slide.image}`)} alt="" />
                  <h2><span>{slide.action}</span>{slide.title}</h2>
                  <p>{slide.text}</p>
                  <div className='text__mobile__only'>
                      <p>
                         GamerGate gives you the ability to find games through its search feature. This is a project of <a href="https://github.com/MickaelCe" target="blank_">Mickael</a> in his learning of ReactJS.
                      </p>
                  </div>
              </div>
              
          ))}
      </Carousel>
  )
}

export default Slider