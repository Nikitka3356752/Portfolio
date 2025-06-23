import React from 'react';
import Section from '../components/Section';

const Projects = () => {
  const blocks = [
    { title: 'Главное меню', description: 'Назад', bgColor: '#AAFFAA', icon: '↩️', width: '300px', height: '50vh', path: '/home' },
    { title: 'Проект 1', description: 'Портфолио', bgColor: '#1E293B', icon: '🏗️', width: '400px', height: '65vh', path: '/home/projects' },
  ];

  return <Section id="проекты" name="Мои проекты" bgColor="#1A1A1A" blocks={blocks} />;
};

export default Projects;