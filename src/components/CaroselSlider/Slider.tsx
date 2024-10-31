"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import FeaturedCard from "../KeyFeature/FeaturedCard";

interface SlideData {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface CarouselSliderProps {
  slides: SlideData[];
}


  

const CarouselSlider: React.FC<CarouselSliderProps> = ({ slides }) => {
  
  // Check if the number of slides is less than 4
  if (slides.length < 4) {
    return (
      <div className="flex space-x-4"> {/* Adjust spacing as needed */}
        {slides.map((slide, index) => (
          <div key={index}>
            <FeaturedCard
              title={slide.title}
              description={slide.description}
              icon={slide.icon}
            />
          </div>
        ))}
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div className="px-2" key={index}>
            <FeaturedCard
              title={slide.title}
              description={slide.description}
              icon={slide.icon}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
