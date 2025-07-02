import React from 'react';
import Section from '../components/Section';

const Hobbies = () => {
  const blocks = [
    { title: 'Главное меню', description: 'Назад', bgColor: '#AAFFAA', icon: '↩️', width: '18.75rem', height: '50vh', path: '/home' },
    { title: 'Игры', description: 'Люблю видеоигры', bgColor: '#F59E0B', icon: '🎮', width: '21.875rem', height: '55vh', path: '/home/hobbies' },
    { title: 'Путешествия', description: 'Люблю гулять', bgColor: '#D97706', icon: '📚', width: '20rem', height: '50vh', path: '/home/hobbies' },
  ];

  return <Section id="увлечения" name="Мои увлечения" bgColor="#1A1A1A" blocks={blocks} />;
};

export default Hobbies;