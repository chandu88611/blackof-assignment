import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { Button } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Slide {
  title: string;
  description: string;
  imageUrl: string;
  btnText: string;
}

const slides: Slide[] = [
  { 
    title: 'Elevate Experiences [Section-01]', 
    description: 'Lorem ipsum dolor sit amet', 
    imageUrl: 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3JobjJkMm1qcnZ2MXNtYjB1bnhkdHJwbXg1ZXZxcWRhcHZwYnM3cyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3vRnoppYtfEbemBO/giphy.webp',
    btnText: 'Apparel' 
  },
  { 
    title: 'Next era of possibilities', 
    description: 'Lorem ipsum dolor sit amet', 
    imageUrl: 'https://img.freepik.com/free-vector/watercolor-burgundy-gold-background_52683-148162.jpg?size=626&ext=jpg&ga=GA1.1.502621527.1695136298&semt=ais_hybrid',
    btnText: 'Automotive' 
  },
  { 
    title: 'Get in touch', 
    description: 'Lorem ipsum dolor sit amet', 
    imageUrl: 'https://media1.giphy.com/media/fwo7bzEVxbYS4eSNVd/giphy.webp?cid=790b76117pde1ayqln2vqlgub51vj73aapxhsy5hcuavam7t&ep=v1_gifs_search&rid=giphy.webp',
    btnText: 'Filtration' 
  },
  { 
    title: 'Discover More', 
    description: 'Lorem ipsum dolor sit amet', 
    imageUrl: 'https://preschool.npstumkur.in/wp-content/uploads/2024/03/sheep.png',
    btnText: 'Customized Solutions' 
  },
];

const VerticalSlider: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newSlide = Math.floor(scrollY / 40);
      if (newSlide !== activeSlide && newSlide < slides.length) {
        sliderRef.current?.slickGoTo(newSlide);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSlide, slides.length]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: (current: number, next: number) => setActiveSlide(next),
  };

  const handleButtonClick = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <div className="relative overflow-hidden h-[600px]">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="h-[600px] flex items-center justify-center">
            <img 
              className="absolute w-full bg-cover bg-center h-[600px]" 
              src={slide.imageUrl}
              alt={`Slide ${index + 1}`}
            />
            <div className="relative z-10 p-8 bg-black bg-opacity-70 text-white justify-between text-left h-full">
              <h1 className={`text-5xl transition-transform duration-500 ease-in-out mt-auto ${activeSlide === index ? 'slide-in-text' : 'slide-out-text'}`}>{slide.title}</h1>
              <p className={`transition-transform text-2xl mt-2 duration-500 ease-in-out ${activeSlide === index ? 'slide-in-text' : 'slide-out-text'}`}>{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-4 space-y-4 flex flex-col items-center">
        {slides.map((slide, index) => (
          <Button
            key={index}
            variant="text"
            className={`relative flex w-full !justify-end items-center pl-2 ${activeSlide === index ? '!text-primary' : '!text-white'}`}
            onClick={() => handleButtonClick(index)}
          >
            {slide.btnText}
            <span className={`ml-2 w-2 h-2 rounded-full ${activeSlide === index ? 'bg-blue-500' : 'bg-gray-50'}`}></span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default VerticalSlider;
