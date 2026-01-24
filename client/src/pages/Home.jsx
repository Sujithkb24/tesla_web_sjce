import React from "react";
import ElectroSection from "../components/ElectroSection";
import TeamSection from "../components/TeamsSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BentoGrid from "../components/BentoGrid";

const NAVBAR_HEIGHT = 50;

const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* 1. Ensure Navbar is fixed or sticky inside its own component */}
      <Navbar />

      <main
        className="w-full"
        style={{
          /* 2. Offset the content by the Navbar height */
          paddingTop: `${NAVBAR_HEIGHT}px`,
        }}
      >
        {/* ===== Tesla Legacy (BentoGrid) ===== */}
        <section
          className="flex flex-col items-center justify-start pt-2 md:pt-5" // Align to top, add specific gap
          style={{ minHeight: `calc(100dvh - ${NAVBAR_HEIGHT}px)` }}
        >
          <BentoGrid />
        </section>

        {/* ===== Electro Section ===== */}
        <section
          className="flex items-center"
          style={{
            minHeight: `calc(100dvh - ${NAVBAR_HEIGHT}px)`,
            margin: "2rem 0", // Adds breathing room between sections
          }}
        >
          <ElectroSection />
        </section>

        {/* ===== Team Section ===== */}
        <section
          className="flex items-center"
          style={{ minHeight: `calc(100dvh - ${NAVBAR_HEIGHT}px)` }}
        >
          <TeamSection />
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
