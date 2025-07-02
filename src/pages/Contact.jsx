import React from 'react';
import Section from '../components/Section';

const Contact = () => {
  const blocks = [
    { title: 'Главное меню', description: 'Назад', bgColor: '#AAFFAA', icon: '↩️', width: '18.75rem', height: '50vh', path: '/home' },
    { title: 'Связаться', description: 'Напишите: nikita.tlewasov@yandex.ru', bgColor: '#4B5563', icon: '📧', width: '25rem', height: '60vh', path: 'mailto:nikita.tlewasov@yandex.ru' },
    { title: 'GitHub', description: 'Посетите мой GitHub', bgColor: '#6B7280', icon: '🐙', width: '18.75rem', height: '50vh', path: 'https://github.com/Nikitka3356752' },
  ];

  return <Section id="контакты" name="Контакты" bgColor="#1A1A1A" blocks={blocks} />;
};

export default Contact;