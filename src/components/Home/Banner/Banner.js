import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from 'react-bootstrap/Carousel';
import "./Banner.module.css";




const Banner = () => {
  
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  
  
    return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1627309366653-2dedc084cdf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2FyZWhvdXNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1627309366653-2dedc084cdf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2FyZWhvdXNlfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>

  );
  
};

export default Banner;