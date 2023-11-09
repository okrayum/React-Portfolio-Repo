import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';

const PhotoSlider2 = () => {
  return (
    <Swiper
      className="sliderContainer"
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <img src={project1} alt="project1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={project2} alt="project2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={project3} alt="project3" />
      </SwiperSlide>
    </Swiper>
  )
}

export default PhotoSlider2;
