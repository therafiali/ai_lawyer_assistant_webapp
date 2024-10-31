"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PromptCard from "../Prompts/PromptCard";

interface SlideData {
  title: string;
}

interface PromptSliderProps {
  slides: SlideData[];
}

const PromptSlider: React.FC<PromptSliderProps> = ({ slides }) => {
  const settings1 = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Duration for the first slider
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  const settings2 = {
    ...settings1,
    autoplaySpeed: 4000, // Duration for the second slider
  };

  const settings3 = {
    ...settings1,
    autoplaySpeed: 5000, // Duration for the third slider
  };

  let sliders = null;

  // Determine how many sliders to show based on the length of slides
  if (slides.length <= 5) {
    sliders = (
      <Slider {...settings1}>
        {slides.map((prompt, index) => (
          <PromptCard key={index} title={prompt.title} />
        ))}
      </Slider>
    );
  } else if (slides.length > 5 && slides.length <= 8) {
    sliders = (
      <Slider {...settings2}>
        {slides.map((prompt, index) => (
          <PromptCard key={index} title={prompt.title} />
        ))}
      </Slider>
    );
  } else {
    // For more than 8 slides, show 3 sliders with different speeds
    sliders = (
      <>
        <Slider {...settings1}>
          {slides.map((prompt, index) => (
            <PromptCard key={index} title={prompt.title} />
          ))}
        </Slider>
        <Slider {...settings2}>
          {slides.map((prompt, index) => (
            <PromptCard key={index} title={prompt.title} />
          ))}
        </Slider>
        <Slider {...settings3}>
          {slides.map((prompt, index) => (
            <PromptCard key={index} title={prompt.title} />
          ))}
        </Slider>
      </>
    );
  }

  return <div className="slider-container">{sliders}</div>;
};

export default PromptSlider;
