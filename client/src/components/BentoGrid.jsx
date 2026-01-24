import React, { useEffect, useState } from "react";
import ShinyText from './ui/ShinyText';
const images = [
  
  "/Tesla_photos/TeamPhoto2026-27.JPG",
  "/Tesla_photos/Bento_Grid_2.webp",
  "/DSC_0277.JPG",
  "/DSC_0289.JPG",
"/DSC_0308.JPG",  
"/DSC_0301.JPG",
"/DSC_0262.JPG",
  "/Tesla_photos/Tesla_group.webp",
  "/Tesla_photos/Bento_Grid_8.webp",
  
];

export default function TeslaLegacySlider() {
  const [index, setIndex] = useState(0);

  // slideshow: play → stop → restart
  useEffect(() => {
    let timer;

    if (index < images.length - 1) {
      timer = setTimeout(() => {
        setIndex(index + 1);
      }, 3500);
    } else {
      timer = setTimeout(() => {
        setIndex(0);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <section
      className="w-full flex flex-col items-center px-4 mt-10 mb-10"
      style={{ backgroundColor: "var(--color-bg-black)" }}
    >
      {/* ===== TITLE ===== */}
      <div className="mb-10 text-center">
       <div className="text-center text-5xl md:text-6xl font-extrabold tracking-wider">
  <ShinyText
    text="TESLA SJCE"
    speed={2}
    delay={0}
    color="var(--color-gold)"
    shineColor="#fcdda2"
    spread={120}
    direction="left"
    yoyo={false}
    pauseOnHover={false}
    disabled={false}
  />
</div>

        {/* Divider */}
        <div
          className="mx-auto mt-4 h-[3px] w-24"
          style={{ backgroundColor: "var(--color-gold)" }}
        />
      </div>

      {/* ===== SLIDER ===== */}
      <div
        className="
          relative
          w-full
          sm:w-[95%]
          lg:w-[80%]
          h-[50vh]
          sm:h-[65vh]
          lg:h-[75vh]
          rounded-2xl
          overflow-hidden
        "
        style={{
          backgroundColor: "var(--color-bg-slate-200)",
          boxShadow: "0 0 40px rgba(201,161,84,0.35)",
        }}
      >
        {/* Slides */}
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Tesla slide ${i + 1}`}
            className={`
              absolute inset-0
              w-full h-full
              object-cover
              transition-opacity duration-700 ease-in-out
              ${i === index ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}

        {/* Left Arrow */}
        <button
          onClick={() => setIndex((index - 1 + images.length) % images.length)}
          className="
            absolute left-4 top-1/2 -translate-y-1/2
            bg-black/60 text-white
            px-3 py-2 rounded-full
            hover:bg-black/80 transition
          "
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => setIndex((index + 1) % images.length)}
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            bg-black/60 text-white
            px-3 py-2 rounded-full
            hover:bg-black/80 transition
          "
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`
                h-2.5 w-2.5 rounded-full cursor-pointer transition
                ${i === index ? "bg-[#c9a154]" : "bg-white/40"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
