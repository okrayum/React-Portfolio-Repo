import React from 'react';
import 'swiper/swiper-bundle.css'; // Import Swiper bundle CSS
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import './PhotoSlider2.css'; // Import your custom CSS file

import project1 from '../images/projectA.png';
import project2 from '../images/projectB.png';
import project3 from '../images/projectC.png';
import project4 from '../images/projectD.png';
import project5 from '../images/projectE.png';
import project6 from '../images/projectF.png';
import project7 from '../images/projectG.png';
import project8 from '../images/projectH.png';

const PhotoSlider2 = () => {
  return (
    <Swiper
      className="sliderContainer"
      spaceBetween={15}
      slidesPerView={1}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
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
      <SwiperSlide>
        <img src={project4} alt="project4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={project5} alt="project5" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={project6} alt="project6" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={project7} alt="project7" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={project8} alt="project8" />
      </SwiperSlide>
    </Swiper>
  )
}

export default PhotoSlider2;