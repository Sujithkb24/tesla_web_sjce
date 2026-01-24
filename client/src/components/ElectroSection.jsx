import React from "react";
import { motion } from "framer-motion";

const ElectroSection = () => {
  return (
    <motion.div
      className="relative w-full h-screen flex flex-col items-center justify-between overflow-hidden px-4 sm:px-6"
      style={{ height: "100dvh" }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Image - Full visibility optimized */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat object-contain sm:object-cover object-center scale-[1.02]"
          style={{
            backgroundImage: "url('/Tesla_photos/TeamPhoto2026-27.JPG')",
          }}
        />
      </motion.div>

      {/* Concave Arc / Gradient Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
      linear-gradient(
        to bottom,
        rgba(0,0,0,0.15) 0%,
        rgba(0,0,0,0.2) 40%,
        rgba(0,0,0,0.25) 70%,
        rgba(0,0,0,0.25) 100%
      )
    `,
        }}
      />

      {/* Content Section */}
      <div className="relative z-10 text-center pt-12 sm:pt-16 md:pt-20 max-w-3xl flex-shrink-0 w-full">
        <motion.h1
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            font-extrabold
            tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em]
            leading-tight md:leading-none
            mx-auto px-4 sm:px-0
          "
          style={{
            color: "var(--color-gold)",
            textShadow: "0 0 22px rgba(201,161,84,0.4)",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ELECTROVAGANZA
        </motion.h1>
      </div>

      {/* Spacer to push content apart */}
      <div className="flex-grow min-h-0"></div>

      {/* Explore Button */}
      <motion.div
        className="relative z-10 mb-6 sm:mb-8 md:mb-12 flex-shrink-0 w-full flex justify-center px-4 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <a href="/events">
          <motion.button
            className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg font-semibold rounded-full transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 min-w-[140px] sm:min-w-[160px]"
            style={{
              backgroundColor: "var(--color-gold)",
              color: "var(--color-black)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                "var(--color-light-gold)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-gold)")
            }
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = `0 0 0 4px var(--color-gold-ring)`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            EXPLORE MORE
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ElectroSection;
