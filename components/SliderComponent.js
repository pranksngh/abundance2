// Slider.js
import React from 'react';
import SliderCard from './SliderCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
};

const SliderComponent = ({ data }) => {
  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <SliderCard key={index} {...item} />
      ))}
    </Slider>
  );
};

export default SliderComponent;
