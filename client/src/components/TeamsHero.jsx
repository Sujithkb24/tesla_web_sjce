import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const TeamsHero = () => {
  const location = useLocation();
  const fromTeamsSection = location.state?.transitioning;

  return (
    <motion.div 
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: '100dvh' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/Tesla_photos/Tesla_group.webp')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            width: '100%',
            height: '100%'
          }}
        />
      </div>

      {/* Heading */}
      <motion.div
        initial={{ y: fromTeamsSection ? -100 : 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: fromTeamsSection ? 0.8 : 0.3,
          duration: 1.2,
          type: "spring",
          stiffness: 100 
        }}
        className="absolute z-10 px-4 w-full text-center"
        style={{
          top: 'clamp(2rem, 10vh, 8rem)'
        }}
      >
        <h1 
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider uppercase mx-auto max-w-full px-2"
          style={{
            color: 'var(--color-gold)',
            textShadow: `
              2px 2px 8px rgba(0, 0, 0, 0.9), 
              -2px -2px 8px rgba(0, 0, 0, 0.9)
            `
          }}
        >
          TESLA 2024-2025
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default TeamsHero;
