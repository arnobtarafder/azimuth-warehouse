import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Carousel from 'react-bootstrap/Carousel';
import "./Banner.css";
import { useNavigate } from "react-router-dom";




const Banner = () => {
  const navigate = useNavigate()
  
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  
  
    return (

  <div style={{ backgroundColor: "#e6e6e6" }}>
      <div className="flex flex-col-reverse md:flex-row md:justify-between container mx-auto items-center">
        <div className="order-1">
          <p className="  animate__animated font-bold text-gray-400 animate__slideInLeft">
            50% OFF EVERYTHING
          </p>
          <h2 className="font-bold text-6xl text-gray-700 mb-4 mt-2">
            New Furniture Arrivals
          </h2>
          {/* <h1 class=" ">An animated element</h1> */}
          <h4 className=" italic font-bold text-xl text-gray-800">
            We offer free shipping on all orders over $750.
          </h4>
          <button className=" my-4 cursor-pointer flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Discover now
          </button>
        </div>

        <div className="order-2">
          <img
            className="w-full"
            src="https://i.ibb.co/nc5z5LN/hal-gatewood-Vfml26-Iy4m-I-unsplash-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  

  );
  
};

export default Banner;