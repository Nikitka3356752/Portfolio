import React from 'react';
import Section from '../components/Section';

const Skills = () => {
  const blocks = [
    { title: 'Главное меню', description: 'Назад', bgColor: '#AAFFAA', icon: '↩️', width: '18.75rem', height: '50vh', path: '/home' },
    { title: 'Навык 1', description: 'React', bgColor: '#F59E0B', icon: '💻', width: '21.875rem', height: '60vh', path: '/home/skills' },
    { title: 'Навык 2', description: 'Design', bgColor: '#D97706', icon: '🎨', width: '20rem', height: '55vh', path: '/home/skills' },
  ];

  return <Section id="навыки" name="Мои навыки" bgColor="#1A1A1A" blocks={blocks} />;
};

export default Skills;