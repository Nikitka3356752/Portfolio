import React from 'react';
import { motion } from 'framer-motion';
import InfoBlock from './InfoBlock';

const Section = ({ id, name, blocks, bgColor, images = [] }) => (
  <motion.section
    id={id}
    className="w-full min-h-screen flex flex-col items-center justify-start py-5"
    style={{ backgroundColor: bgColor }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="mx-auto px-4 text-center mb-12">
      <h1 className="text-5xl font-bold text-white mb-4">{name}</h1>
      {images.length > 0 && (
        <div className="flex justify-center gap-40 mt-4 flex-wrap">
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`${name} image ${index + 1}`}
              className="rounded-lg max-w-xs"
              style={{ maxHeight: '200px', objectFit: 'cover' }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}
    </div>
    <div className="mx-auto px-0 w-full flex-1 flex items-end">
      <div className="section-grid">
        {blocks.map((block, index) => (
          <InfoBlock key={index} {...block} className="inline-block relative" />
        ))}
      </div>
    </div>
  </motion.section>
);

export default Section;