import React from 'react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import './PhotoSlider2.css';

import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import project4 from '../images/project4.png';
import project5 from '../images/project5.png';
import project6 from '../images/project6.png';
import project7 from '../images/project7.png';
import project8 from '../images/project8.png';

const projects = [
  { id: 1, image: project1, name: 'Project 1', link: "https://studyflow.onrender.com/" },
  { id: 2, image: project2, name: 'Project 2', link: "https://studyflow.onrender.com/" },
  { id: 3, image: project3, name: 'Project 3', link: "https://okrayum.github.io/Shorty-s-Rescue/" },
  { id: 4, image: project4, name: 'Project 4', link: "https://okrayum.github.io/Shorty-s-Rescue/" },
  { id: 5, image: project5, name: 'Project 5'},
  { id: 6, image: project6, name: 'Project 6'},
  { id: 7, image: project7, name: 'Project 7'},
  { id: 8, image: project8, name: 'Project 8'},
];



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
      loop={true}
    >
      {projects.map(project => (
        <SwiperSlide key={project.id}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.name} />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default PhotoSlider2;