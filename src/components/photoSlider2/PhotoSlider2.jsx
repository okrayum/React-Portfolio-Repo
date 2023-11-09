import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const PhotoSlider2 = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide className="sliderContainer">
        <img src={require('../images/project1.png').default} alt="project1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../images/project2.png').default} alt="project2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={require('../images/project3.png').default} alt="project3" />
      </SwiperSlide>
    </Swiper>
  )
}

export default PhotoSlider2;
