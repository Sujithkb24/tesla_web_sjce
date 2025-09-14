import React from "react";
import TimelineContainer from "../components/events/TimelineContainer";
import headerImage from "/Tesla_photos/About_us-2.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Events() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>
      <header className="relative h-[340px] sm:h-[400px] md:h-[480px] lg:h-[560px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={headerImage}
            alt="Header background"
            className="w-full h-full object-cover brightness-60"
            // Optional: use srcSet for responsive images if you have multiple sizes
            // srcSet={`${headerImageSmall} 480w, ${headerImageMedium} 768w, ${headerImageLarge} 1200w`}
            // sizes="(max-width: 640px) 480px, (max-width: 1024px) 768px, 1200px"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 md:px-16 py-4">
          <h1 className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            OUR
            <br />
            <span className="text-red-700 text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] leading-none">
              EVENTS
            </span>
          </h1>
        </div>
      </header>
      <main className="relative px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-10">
        <TimelineContainer />
      </main>
      <Footer/>
    </div>
  );
}

export default Events;
