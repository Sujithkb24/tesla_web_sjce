import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import teams from "../data/Core.js";

const TeamCarousel = () => {
  const containerRef = useRef(null);
  const carouselRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [dimensions, setDimensions] = useState({
    container: 0,
    carousel: 0,
    card: 0,
  });
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current || !carouselRef.current) return;

      const firstCard = carouselRef.current.querySelector(".team-card");

      const containerWidth = containerRef.current.offsetWidth;
      const carouselWidth = carouselRef.current.scrollWidth;
      const cardWidth = firstCard?.offsetWidth || 0;

      setIsMobile(window.innerWidth < 768);

      setDimensions({
        container: containerWidth,
        carousel: carouselWidth,
        card: cardWidth,
      });

      if (containerWidth && carouselWidth && cardWidth) {
        setReady(true);
      }
    };

    const ro = new ResizeObserver(updateDimensions);
    ro.observe(containerRef.current);
    ro.observe(carouselRef.current);

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const scrollRange = Math.max(
    dimensions.carousel - dimensions.container + dimensions.card / 3,
    0,
  );

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, ready && !isMobile ? -scrollRange : 0],
  );

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{
        backgroundColor: "var(--color-black)",
        height: isMobile ? "100vh" : "300vh",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden pt-20">
        <h2
          className="text-4xl md:text-5xl font-bold mb-8"
          style={{ color: "var(--color-gold)" }}
        >
          MEET THE CORE
        </h2>

        <div
          className={`w-full h-[60vh] flex items-center px-[5vw] ${
            isMobile ? "overflow-x-auto" : "overflow-hidden"
          }`}
          style={{ scrollBehavior: isMobile ? "smooth" : "auto" }}
        >
          {isMobile ? (
            <div
              className="flex gap-4 scroll-smooth"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {teams.map((team) => (
                <div
                  key={team.id}
                  className="team-card group relative w-72 overflow-hidden rounded-2xl bg-black transition-all duration-300"
                  style={{
                    border: "1px solid var(--color-gold)",
                    boxShadow: "0 0 18px rgba(201,161,84,0.25)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 40px rgba(201,161,84,0.65)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 18px rgba(201,161,84,0.25)")
                  }
                >
                  <div className="h-80 overflow-hidden">
                    <img
                      src={team.image}
                      alt={team.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute bottom-0 z-10 w-full translate-y-10 p-5 mb-5 text-center transition-all duration-300 group-hover:translate-y-0">
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: "var(--color-gold)" }}
                    >
                      {team.name}
                    </h3>

                    <p className="text-sm font-medium text-zinc-300">
                      {team.role}
                    </p>

                    <p className="text-xs  text-zinc-400">{team.description}</p>

                    <div
                      className="mx-auto mt-3 h-[2px] w-12"
                      style={{ backgroundColor: "var(--color-gold)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              ref={carouselRef}
              style={{ x }}
              className="flex gap-4 pr-[25%] will-change-transform"
            >
              {teams.map((team) => (
                <div
                  key={team.id}
                  className="team-card group relative w-72 overflow-hidden rounded-2xl bg-black transition-all duration-300"
                  style={{
                    border: "1px solid var(--color-gold)",
                    boxShadow: "0 0 18px rgba(201,161,84,0.25)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 55px rgba(201,161,84,0.9)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 0 18px rgba(201,161,84,0.25)")
                  }
                >
                  <div className="h-80 overflow-hidden">
                    <img
                      src={team.image}
                      alt={team.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute bottom-0 z-10 w-full mb-5 translate-y-10 p-5 text-center transition-all duration-300 group-hover:translate-y-0">
                    <h3
                      className="text-xl font-semibold"
                      style={{ color: "var(--color-gold)" }}
                    >
                      {team.name}
                    </h3>

                    <p className="text-sm font-medium text-zinc-300">
                      {team.role}
                    </p>

                    <p className=" text-xs text-zinc-400">
                      {team.description}
                    </p>

                    <div
                      className="mx-auto mt-3 h-[2px] w-12"
                      style={{ backgroundColor: "var(--color-gold)" }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
