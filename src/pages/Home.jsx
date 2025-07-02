import React from 'react';
import Section from '../components/Section';

const Home = () => {
  const blocks = [
    { title: 'My Hobbies', description: 'See my hobbies', bgColor: '#3B82F6', icon: '🤡', size: 'w-full h-full', path: '/home/hobbies' },
    { title: 'Work', description: 'See our works', bgColor: '#FF00FF', icon: '💼', size: 'w-full h-full', path: '/home/achievements' },
    { title: 'Projects', description: 'See my projects', bgColor: '#FBB24F', icon: '👾', size: 'w-full h-full', path: '/home/projects' },
    { title: 'About us', description: 'See my skills', bgColor: '#1E293B', icon: 'ℹ️', size: 'w-full h-full', path: '/home/skills' },
    { title: 'Contact us', description: 'We help you', bgColor: '#FBBF24', icon: '📧', size: 'w-full h-full', path: '/home/contact' }
  ];

  const images = [
      '/my_photo.png',
      '/my_photo1.png',
      '/my_photo2.png',
      '/my_photo3.png',
  ];

  return <Section id="главная" name="Портфолио Тлевасова Никиты" images={images} bgColor="#1A1A1A" blocks={blocks} />;
};

export default Home;