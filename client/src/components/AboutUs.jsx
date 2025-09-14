import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div
      className="w-full min-h-screen bg-black text-white overflow-x-hidden"
      style={{
        "--color-gold": "#C9A154",
        "--color-gray": "#4B5563",
      }}
    >
      <Navbar />

      {/* About Tesla Section */}
      <section className="max-w-7xl px-4 md:px-20 py-12 mx-auto mt-16">
        <div className="relative">
          <h1
            className="text-4xl md:text-7xl font-bold absolute top-0 left-0 z-10"
            style={{ color: "var(--color-gold)" }}
          >
            ABOUT
          </h1>
          <h1
            className="text-5xl md:text-9xl font-bold absolute top-12 md:top-16 left-0 z-10"
            style={{ color: "var(--color-gold)" }}
          >
            TESLA-SJCE
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-end gap-6 mt-16 relative">
          <img
            src="/Tesla_photos/About_us-1.webp"
            alt="Tesla-SJCE Event"
            className="w-full md:w-1/4 rounded-2xl relative z-0"
          />
          <img
            src="/Tesla_photos/About_us-2.webp"
            alt="Tesla-SJCE Group"
            className="w-full md:w-2/4 rounded-2xl relative z-0"
          />
        </div>
      </section>

      {/* Marquee Section */}
      <div className="w-full overflow-hidden bg-black border-y py-1" style={{ borderColor: "var(--color-gold)" }}>
        <div className="marquee">
          <div className="track">
            {[...Array(20)].map((_, i) => (
              <span
                key={i}
                className="text-xl font-bold mx-4 md:mx-8"
                style={{ color: "var(--color-gold)" }}
              >
                TESLA-SJCE
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* History and Activities Section */}
      <section className="max-w-6xl px-4 md:px-20 py-12 mx-auto">
        <p className="text-center text-lg md:text-lg leading-relaxed text-gray-300">
          TESLA SJCE is a technical club under the Department of Electrical and
          Electronics Engineering at SJCE, JSS S&TU Mysuru.
        </p>

        {/* HISTORY */}
        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--color-gold)" }}>
            HISTORY
          </h2>

          {/* Right-aligned */}
          <div className="flex flex-col items-end w-full mt-4">
            <div className="border-t w-full md:w-2/5" style={{ borderColor: "var(--color-gray)" }}></div>
            <p className="text-xl text-right w-full md:w-2/5 mt-2">Founded in 2018</p>
            <div className="border-t w-full md:w-2/5 mt-4" style={{ borderColor: "var(--color-gray)" }}></div>
          </div>

          {/* Left-aligned */}
          <div className="flex flex-col items-start w-full mt-8">
            <div className="border-t w-full md:w-1/2" style={{ borderColor: "var(--color-gray)" }}></div>
            <p className="text-xl w-full md:w-1/2 mt-2">
              Department of Electrical and Electronics Engineering
            </p>
            <div className="border-t w-full md:w-1/2 mt-4" style={{ borderColor: "var(--color-gray)" }}></div>
          </div>
        </div>

        {/* ACTIVITIES */}
        <div className="mt-12">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--color-gold)" }}>
            ACTIVITIES
          </h2>
          <img
            src="/Tesla_photos/Bento_Grid_5.webp"
            alt="Activities"
            className="w-full rounded-lg mt-4"
          />
        </div>
      </section>

      {/* Faculty Section */}
      <section className="max-w-6xl px-4 md:px-20 py-12 mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center"
          style={{ color: "var(--color-gold)" }}
        >
          FACULTY CO-ORDINATOR
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 mt-8">
          <div className="w-full md:w-1/3">
            <img
              src="/Tesla_photos/Faculty_Coordinator.webp"
              alt="Faculty"
              className="w-full h-64 md:h-96 object-contain rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-white text-xl md:text-3xl font-bold">
              Dr. Ravishankar B S
            </h3>
          </div>
        </div>
      </section>

      {/* Marquee Animation Style */}
      <style jsx>{`
        .marquee {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
        }
        .track {
          display: flex;
          animation: marquee 20s linear infinite;
          min-width: 100%;
        }
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default AboutUs;
