import React from 'react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import './PhotoSlider2.css';

import studyflowImg from '../images/project1.png';
import shortysImg from '../images/project3.png';
import employeeHubImg from '../images/project5.png';
import firstPortfolioImg from '../images/project8.png';

const projects = [
  {
    id: 1,
    image: studyflowImg,
    name: 'StudyFlow',
    description:
      'Study organizer for focused learning — collect notes and links, track your progress.',
    link: 'https://studyflow.onrender.com/',
  },
  {
    id: 2,
    image: shortysImg,
    name: "Shorty's Rescue",
    description:
      'Dog adoption site — browse dogs, send adoption inquiries, donate. Built with React.',
    link: 'https://okrayum.github.io/Shorty-s-Rescue/',
  },
  {
    id: 3,
    image: employeeHubImg,
    name: 'Employee Hub',
    description:
      'Capstone 2023 — employee bulletin board and directory with login.',
  },
  {
    id: 4,
    image: firstPortfolioImg,
    name: 'First Portfolio (2022)',
    description: 'My first portfolio site — where the journey started.',
  },
];

const ProjectSlide = ({ project }) => (
  <div className="projectSlide">
    <img src={project.image} alt={project.name} />
    <div className="projectCaption">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View project
        </a>
      )}
    </div>
  </div>
);

const PhotoSlider2 = () => {
  return (
    <Swiper
      className="sliderContainer"
      spaceBetween={15}
      slidesPerView={1}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
      loop={true}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <ProjectSlide project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PhotoSlider2;
