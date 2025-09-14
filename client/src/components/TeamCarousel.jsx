import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TeamCard from "./TeamCard";
import teams from "../data/Core.js";

const TeamCarousel = () => {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [dimensions, setDimensions] = useState({
    container: 0,
    carousel: 0,
    card: 0,
  });
  const [flippedId, setFlippedId] = useState(null);
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current && carouselRef.current) {
        const firstCard = carouselRef.current.querySelector(".team-card");
        const containerWidth = containerRef.current.offsetWidth;
        const carouselWidth = carouselRef.current.scrollWidth;
        const cardWidth = firstCard?.offsetWidth || 0;
        const windowWidth = window.innerWidth;

        setIsMobile(windowWidth < 768);

        setDimensions({
          container: containerWidth,
          carousel: carouselWidth,
          card: cardWidth,
        });

        if (containerWidth && carouselWidth && cardWidth) {
          setReady(true);
        }
      }
    };

    const ro = new ResizeObserver(updateDimensions);
    if (containerRef.current) ro.observe(containerRef.current);
    
    window.addEventListener('resize', updateDimensions);
    
    updateDimensions();

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const handleCardClick = (id) => {
    setFlippedId((prev) => (prev === id ? null : id));
  };

  const scrollRange = Math.max(
    dimensions.carousel - dimensions.container + dimensions.card / 3,
    0
  );

  const x = useTransform(
    scrollYProgress,
    [0.2, 1],
    [0, ready && !isMobile ? -scrollRange : 0]
  );

  return (
    <section 
      ref={containerRef} 
      className="relative"
      style={{
        backgroundColor: 'var(--color-black)',
        height: isMobile ? '100vh' : '300vh',
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden pt-20">
        <h2
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{ color: 'var(--color-gold)' }}
        >
          MEET THE CORE
        </h2>

        <div
          className={`w-full h-[60vh] flex items-center px-[5vw] ${isMobile ? 'overflow-x-auto' : 'overflow-hidden'}`}
          style={{ scrollBehavior: isMobile ? 'smooth' : 'auto' }}
        >
          {isMobile ? (
            <div 
              className="flex gap-4 will-change-transform scroll-smooth"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {teams.map((team) => (
                <TeamCard
                  key={team.id}
                  team={team}
                  isFlipped={flippedId === team.id}
                  onClick={() => handleCardClick(team.id)}
                />
              ))}
            </div>
          ) : (
            <motion.div
              ref={carouselRef}
              style={{ x }}
              className="flex gap-4 pr-[25%] will-change-transform"
            >
              {teams.map((team) => (
                <TeamCard
                  key={team.id}
                  team={team}
                  isFlipped={flippedId === team.id}
                  onClick={() => handleCardClick(team.id)}
                />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
