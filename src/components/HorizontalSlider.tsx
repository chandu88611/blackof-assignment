import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Slide {
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  { 
    image: '/auto1.avif', 
    title: 'Cutting-Edge Automotive Technology', 
    description: 'Experience the future of automotive technology with our state-of-the-art vehicles. Innovative design and advanced features provide an unparalleled driving experience.' 
  },
  { 
    image: '/auto2.jpg', 
    title: 'Sustainable and Eco-Friendly Solutions', 
    description: 'Our commitment to sustainability drives us to create eco-friendly automotive solutions. Discover the perfect balance of performance and environmental responsibility.' 
  },
  { 
    image: '/auto-3.jpg', 
    title: 'Unmatched Comfort and Luxury', 
    description: 'Indulge in the ultimate comfort and luxury with our premium automotive interiors. Every detail is crafted to perfection, ensuring a first-class experience on every journey.' 
  },
];

const HorizontalSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex),
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="relative w-full lg:w-[1200px] mx-auto my-6">
      <h1 className="text-center text-2xl md:text-5xl mt-4 mb-3">
        <span className="text-blue-500">Next era</span> of possibilities
      </h1>
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[450px] px-4 md:px-24">
            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover rounded m-2" />
            <div className="py-2">
              <h1 className={`text-5xl transition-transform duration-500 ease-in-out mt-auto ${currentSlide === index ? 'slide-in-text' : 'slide-out-text'}`}>{slide.title}</h1>
              <p className={`transition-transform text-2xl mt-2 duration-500 ease-in-out ${currentSlide === index ? 'slide-in-text' : 'slide-out-text'}`}>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      {currentSlide > 0 && (
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10">
          <IconButton
            onClick={previous}
            className="!text-white !bg-gray-500 !bg-opacity-50 flex items-center space-x-2 px-4 py-2 rounded"
          >
            <ArrowBackIos />
            <span className="text-base font-bold">Prev</span>
          </IconButton>
        </div>
      )}
      {currentSlide < slides.length - 1 && (
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10">
          <IconButton
            onClick={next}
            className="!text-white !bg-gray-500 !bg-opacity-50 flex items-center space-x-2 px-4 py-2 rounded"
          >
            <span className="text-base font-bold">Next</span>
            <ArrowForwardIos />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default HorizontalSlider;
