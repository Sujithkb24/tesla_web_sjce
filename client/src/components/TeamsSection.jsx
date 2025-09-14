import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const TeamsSection = () => {
  const navigate = useNavigate();
  const [fadeOutContent, setFadeOutContent] = useState(false);
  const [fadeOutOverlay, setFadeOutOverlay] = useState(false);

  const handleExplore = () => {
    setFadeOutContent(true);
    setFadeOutOverlay(true);

    setTimeout(() => {
      navigate('/teams', { state: { transitioning: true } });
    }, 700);
  };

  return (
    <motion.div
      className="relative w-full h-screen flex flex-col overflow-hidden"
      style={{ height: "100dvh" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ backgroundImage: "url('/Tesla_photos/Tesla_group.webp')" }}
        />
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(125deg, 
              rgba(0, 0, 0, 1) 0%,  
              rgba(0, 0, 0, 1) 30%,  
              rgba(0, 0, 0, 0.8) 50%, 
              rgba(0, 0, 0, 0.5) 70%, 
              rgba(0, 0, 0, 0.2) 85%, 
              rgba(0, 0, 0, 0.05) 100%
            )
          `
        }}
        animate={{ opacity: fadeOutOverlay ? 0 : 1 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col px-4 sm:px-8 md:px-16 pt-12 sm:pt-16">
        {/* Heading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: fadeOutContent ? 0 : 1, y: fadeOutContent ? 50 : 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mt-10"
            style={{ color: 'var(--color-gold)' }}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: fadeOutContent ? 0.95 : 1, opacity: fadeOutContent ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            TEAMS
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl mt-2 sm:mt-4 leading-relaxed line-clamp-3 sm:line-clamp-4 md:line-clamp-none"
            style={{ color: 'var(--color-white)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: fadeOutContent ? 0 : 1, y: fadeOutContent ? 20 : 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our team is a group of dedicated individuals united by a common goal — to learn,
            build, and grow together. With a shared passion for innovation, collaboration, and
            excellence, we work hand-in-hand to bring ideas to life, overcome challenges, and
            drive meaningful impact through our collective effort.
          </motion.p>
        </motion.div>

        {/* Spacer */}
        <div className="flex-grow"></div>

        {/* Explore Button */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: fadeOutContent ? 0 : 1, y: fadeOutContent ? 20 : 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            onClick={handleExplore}
            className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform 
                       hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black"
            style={{
              backgroundColor: 'var(--color-gold)',
              color: 'var(--color-black)',
              border: 'none',
              outline: 'none'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            EXPLORE MORE
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TeamsSection;
