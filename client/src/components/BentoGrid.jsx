import React, { useEffect, useState } from "react";

const images = [
  //"/Tesla_photos/Bento_Grid_3.webp",
  "/Tesla_photos/Bento_Grid_4.webp",
  "/Tesla_photos/Bento_Grid_2.webp",

  "/Tesla_photos/Bento_Grid_1.webp",
  "/Tesla_photos/Bento_Grid_6.webp",
  //"/Tesla_photos/Bento_Grid_7.webp",
  "/Tesla_photos/Bento_Grid_5.webp",
  "/Tesla_photos/Tesla_group.webp",
  "/Tesla_photos/Bento_Grid_8.webp",
  "/Tesla_photos/TeamPhoto2026-27.JPG",
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
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide"
          style={{
            color: "var(--color-gold)",
            textShadow: "0 0 18px rgba(201,161,84,0.45)",
          }}
        >
          The Tesla Legacy
        </h1>

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
