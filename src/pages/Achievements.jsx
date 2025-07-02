import React from 'react';
import Section from '../components/Section';

const Achievements = () => {
  const blocks = [
    { title: 'Главное меню', description: 'Назад', bgColor: '#AAFFAA', icon: '↩️', width: '18.75rem', height: '50vh', path: '/home' },
    { title: 'Награда 1', description: 'Первый проект', bgColor: '#2563EB', icon: '🏆', width: '21.875rem', height: '60vh', path: '/home/achievements' },
    { title: 'Награда 2', description: 'Конкурс', bgColor: '#4B5563', icon: '🎯', width: '20rem', height: '55vh', path: '/home/achievements' },
  ];

  return <Section id="достижения" name="Мои достижения" bgColor="#1A1A1A" blocks={blocks} />;
};

export default Achievements;