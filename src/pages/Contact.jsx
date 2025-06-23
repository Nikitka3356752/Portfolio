import React from 'react';
import Section from '../components/Section';

const Contact = () => {
  const blocks = [
    { title: 'Главное меню', description: 'Назад', bgColor: '#AAFFAA', icon: '↩️', width: '300px', height: '50vh', path: '/home' },
    { title: 'Связаться', description: 'Напишите: nikita.tlewasov@yandex.ru', bgColor: '#4B5563', icon: '📧', width: '400px', height: '60vh', path: '/home/contact' },
  ];

  return <Section id="контакты" name="Контакты" bgColor="#1A1A1A" blocks={blocks} />;
};

export default Contact;