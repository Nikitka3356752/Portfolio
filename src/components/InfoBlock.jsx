import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const InfoBlock = ({ title, description, bgColor, icon, size = 'w-64', path, className = '' }) => (
  <motion.div
    className={`${size} ${className} rounded-3xl p-6 flex flex-col justify-between border-2 border-gray-900 shadow-2xl`}
    style={{ backgroundColor: bgColor, minHeight: '200px' }}
    whileHover={{ scale: 1.05, rotate: 2 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Link to={path} className="w-full h-full flex flex-col items-center justify-between">
      <div className="text-6xl">{icon}</div>
      <div>
        <h3 className="text-3xl font-semibold text-white">{title}</h3>
        <p className="text-lg text-red-200">{description}</p>
      </div>
    </Link>
  </motion.div>
);

export default InfoBlock;