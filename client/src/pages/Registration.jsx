import React, { useState } from "react";

const GOLD = "#FFD700";

const Registration = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    teamLead: "",
    email: "",
    contact: "",
    theme: "Industrial & Residential Energy Saving",
    paymentScreenshot: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isFormValid =
    formData.teamName &&
    formData.teamLead &&
    formData.email &&
    formData.contact &&
    formData.paymentScreenshot;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        paymentScreenshot: e.target.files[0],
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Form Data:", formData);
      setIsSubmitted(true);
    }
  };

  const themes = [
    "Industrial & Residential Energy Saving",
    "Intelligent Automation & Predictive Maintenance",
    "Real-Time Energy Monitoring & Visualization",
    "Sustainable EV Charging Infrastructure",
  ];

  const GoldDivider = () => (
    <div className="w-full max-w-5xl mx-auto  ">
      <div className="h-px bg-yellow-600 opacity-30"></div>
    </div>
  );

  const FormInput = ({ label, name, type = "text", required = true }) => (
    <div className="mb-7">
      <label
        htmlFor={name}
        className="block text-xl font-medium text-gray-300 mb-2 font-sans tracking-wide"
      >
        {label} :
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleInputChange}
        required={required}
        className="w-full p-5 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 font-sans tracking-wide
          transition-all duration-300 shadow-inner shadow-black/50
          focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-yellow-500 
          focus:border-yellow-500 focus:shadow-[0_0_15px_0_rgba(255,215,0,0.5)]"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <section
        className="text-center py-40 md:py-64 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 70%)",
        }}
      >
        <h1
          className="text-[6rem] md:text-[10rem] font-black tracking-tighter leading-none mb-4"
          style={{
            color: GOLD,
            textShadow: `0 0 25px rgba(255,215,0,0.8), 0 0 5px rgba(255,215,0,0.5)`,
          }}
        >
          THE GOLDEN SPARK
        </h1>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-200 tracking-wide">
          Energy Conservation Ideathon
        </h2>

        <p
          className="text-xl md:text-2xl mb-16 tracking-[0.3em] uppercase font-medium"
          style={{ color: GOLD }}
        >
          Powering the Future of Sustainability.
        </p>

        <div className="text-base text-gray-400 mb-16 space-x-12 tracking-wider">
          <span className="font-semibold">DATE:</span> DECEMBER 16, 2025
          <span className="font-semibold ml-12">DEADLINE:</span> DECEMBER 14,
          2025
        </div>

        <a
          href="#registration"
          className="inline-block py-5 px-14 text-xl font-extrabold uppercase rounded-full bg-gray-900 border-2 
            text-white transition duration-300 ease-in-out shadow-lg tracking-widest"
          style={{
            borderColor: GOLD,
            color: GOLD,
            boxShadow: `0 0 20px 0px rgba(255,215,0,0.4), inset 0 0 8px rgba(255,215,0,0.2)`,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = `0 0 40px 5px rgba(255,215,0,0.7), inset 0 0 10px rgba(255,215,0,0.4)`)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.boxShadow = `0 0 20px 0px rgba(255,215,0,0.4), inset 0 0 8px rgba(255,215,0,0.2)`)
          }
        >
          REGISTER NOW
        </a>
      </section>

      <GoldDivider />

      <section className="text-center py-20 md:py-32 px-6 max-w-4xl mx-auto">
        <h3
          className="text-6xl md:text-7xl font-extrabold mb-12 tracking-tight"
          style={{ color: GOLD }}
        >
          ABOUT THE CHALLENGE
        </h3>

        <p className="text-xl text-gray-300 leading-relaxed font-light tracking-wide">
          The global energy landscape demands innovation. This Ideathon
          challenges visionary minds to conceptualize groundbreaking, scalable
          solutions for energy conservation. We seek ideas that move beyond
          incremental change to define a{" "}
          <span className="font-semibold" style={{ color: GOLD }}>
            high-impact, sustainable future
          </span>
          . Join us to transform concepts into real-world energy efficiency.
        </p>
      </section>

      <GoldDivider />

      <GoldDivider />

      {/* 4. Rules & Regulations */}
      <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto">
        <h3
          className="text-center text-6xl md:text-7xl font-extrabold mb-12 tracking-tight"
          style={{ color: GOLD }}
        >
          GUIDELINES
        </h3>
        <ul className="text-xl text-gray-300 space-y-5 list-none p-0 font-light tracking-wide">
          <li className="flex items-start">
            <span
              className="mr-4 font-extrabold text-2xl"
              style={{ color: GOLD }}
            >
              •
            </span>
            <p>
              <strong className="text-white font-medium">Eligibility:</strong>{" "}
              Open to students and professionals in teams of 1-4.
            </p>
          </li>
          <li className="flex items-start">
            <span
              className="mr-4 font-extrabold text-2xl"
              style={{ color: GOLD }}
            >
              •
            </span>
            <p>
              <strong className="text-white font-medium">Submission:</strong>{" "}
              Concepts must be submitted as a detailed 10-slide PDF proposal by
              the deadline.
            </p>
          </li>
          <li className="flex items-start">
            <span
              className="mr-4 font-extrabold text-2xl"
              style={{ color: GOLD }}
            >
              •
            </span>
            <p>
              <strong className="text-white font-medium">Originality:</strong>{" "}
              All submitted ideas must be original and not previously published
              or implemented.
            </p>
          </li>

          <li className="flex items-start">
            <span
              className="mr-4 font-extrabold text-2xl"
              style={{ color: GOLD }}
            >
              •
            </span>
            <p>
              <strong className="text-white font-medium">IP Rights:</strong>{" "}
              Intellectual Property remains with the team, with a non-exclusive
              license granted for evaluation purposes.
            </p>
          </li>
        </ul>
      </section>

      <GoldDivider />

      <GoldDivider />

      <section
        id="registration"
        className="py-20 md:py-32 px-6 max-w-3xl mx-auto"
      >
        <h3
          className="text-center text-6xl md:text-7xl font-extrabold mb-16 tracking-tight"
          style={{ color: GOLD }}
        >
          SECURE YOUR SPOT
        </h3>
        <form
          onSubmit={handleSubmit}
          className="p-10 md:p-14 rounded-[2rem] bg-gray-900 border border-gray-800"
          style={{ boxShadow: `0 0 50px rgba(255,215,0,0.15)` }}
        >
          <FormInput label="Team Name" name="teamName" />
          <FormInput label="Team Lead Name" name="teamLead" />
          <FormInput label="Email Address" name="email" type="email" />
          <FormInput label="Contact Number" name="contact" type="tel" />

          <div>
            <img src="" alt="QR code" />
          </div>
          <div className="mb-10">
            <h4 className="text-xl font-semibold mb-4 text-gray-200 tracking-wide">
              Upload Proof of Payment Screenshot
            </h4>
            <label
              htmlFor="paymentScreenshot"
              className={`block w-full p-10 text-center rounded-xl cursor-pointer transition duration-300 
                ${
                  formData.paymentScreenshot
                    ? "bg-green-900/40 border-green-500"
                    : "bg-gray-900 border-dashed border-2 border-yellow-700/40 hover:bg-gray-800"
                }`}
              style={{
                boxShadow: formData.paymentScreenshot
                  ? `0 0 10px rgba(34,197,94,0.4)`
                  : "none",
              }}
            >
              {/* Upload text font weight/tracking adjusted */}
              <p className="text-gray-400 text-lg font-light tracking-wide">
                {formData.paymentScreenshot ? (
                  <>
                    <span className="text-green-400 mr-2 font-bold">✅</span>{" "}
                    File Attached: {formData.paymentScreenshot.name}
                  </>
                ) : (
                  "Drag & Drop or Click to Upload Payment Screenshot (Max 2MB, JPG/PNG)"
                )}
              </p>
            </label>
          </div>

          <button
            type="submit"
            disabled={!isFormValid || isSubmitted}
            className={`w-full py-5 text-2xl font-extrabold uppercase rounded-full transition duration-300 ease-in-out tracking-widest ${
              isFormValid && !isSubmitted
                ? "bg-gray-900 text-white cursor-pointer border-2 border-yellow-500 hover:bg-yellow-900/30"
                : "bg-gray-700 text-gray-400 cursor-not-allowed border-2 border-gray-700"
            }`}
            style={{
              color: isFormValid && !isSubmitted ? GOLD : "inherit",
              boxShadow:
                isFormValid && !isSubmitted
                  ? `0 0 35px 5px rgba(255,215,0,0.5)`
                  : "none",
              transition: "all 0.4s",
            }}
          >
            {isSubmitted
              ? "REGISTRATION COMPLETE"
              : isFormValid
              ? "SUBMIT IDEA"
              : "COMPLETE ALL FIELDS"}
          </button>

          {isSubmitted && (
            <p className="text-center mt-6 text-green-400 text-lg font-medium tracking-wide">
              Thank you for registering! Check your email for confirmation.
            </p>
          )}
        </form>
      </section>

      <footer className="py-10 border-t border-yellow-600/30 mt-24">
        <div className="text-center text-base text-gray-500 px-6 font-light">
          <p className="mb-1">Presented by TESLA-SJCE</p>
          <p className="font-medium tracking-wide" style={{ color: GOLD }}>
            *Powering Innovation. Conserving Energy.*
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Registration;
