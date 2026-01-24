import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Registration = () => {
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    usn: "",
    branch: "",
    year: "",
    attendedBefore: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState("");

  const branches = [
    "CSE",
    "ISE",
    "CSBS",
    "ECE",
    "EIE",
    "IP",
    "MECH",
    "CIVIL",
    "EEE",
    "Other",
  ];
  const years = ["1", "2", "3", "4"];

  // Quiz Details
  const quizDetails = {
    theme: "Emerging technologies in EV's",
    date: "28th JAN, 2026",
    time: "7:00 PM",
    mode: "Online (Slido)",
  };

  const handleChange = (e) => {
    const { name, value, type, checked, placeholder } = e.target;

    let fieldName = name;
    let newValue;

    if (type === "radio") {
      newValue = value === "true";
    } else if (type === "checkbox") {
      newValue = checked;
    } else {
      newValue = value;
    }

    if (name === "name") {
      if (placeholder?.toLowerCase().includes("full name")) {
        fieldName = "name";
      } else if (placeholder?.toLowerCase().includes("usn")) {
        fieldName = "usn";
      } else if (placeholder?.toLowerCase().includes("email")) {
        fieldName = "email";
      } else if (placeholder?.toLowerCase().includes("x")) {
        fieldName = "contactNumber";
      }
    }

    setFormData((prev) => ({
      ...prev,
      [fieldName]: newValue,
    }));

    if (errors[fieldName]) {
      setErrors((prev) => ({
        ...prev,
        [fieldName]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    )
      newErrors.email = "Invalid email format";

    if (!formData.contactNumber.trim())
      newErrors.contactNumber = "Contact number is required";
    else if (!/^[0-9]{10}$/.test(formData.contactNumber))
      newErrors.contactNumber = "Phone must be 10 digits";

    if (!formData.usn.trim()) newErrors.usn = "USN is required";

    if (!formData.branch) newErrors.branch = "Branch is required";
    if (!formData.year) newErrors.year = "Year is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSuccess("");

    try {
      const response = await fetch(`${BACKEND_URL}/api/quiz/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          year: parseInt(formData.year),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess("Successfully registered for the quiz!");
        setShowModal(true);
      } else {
        setErrors({ submit: result.message || "Registration failed" });
      }
    } catch (error) {
      setErrors({ submit: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section
  className="relative w-full border-b border-[#c9a154]/30 bg-cover bg-center"
  style={{
    backgroundImage:
      "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url('/EVJAN.jpg')",
  }}
>

        {/* Subtle gold glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#c9a154]/10 blur-[120px]" />

        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-14 items-center">
          {/* LEFT CONTENT */}
          <div className="relative">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center lg:text-left mb-4">
              Emerging technologies {" "}
              <span className="text-[#c9a154] relative">
                in EV's
                <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-[#c9a154]/70" />
              </span>
            </h1>

            <p className="uppercase tracking-[0.35em] mb-10 text-center lg:text-left text-xs md:text-sm text-[#c9a154] font-bold">
              MONTHLY RECURRING QUIZ - JANUARY
            </p>

            {/* Quiz Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
              {[
                { label: "Date", value: quizDetails.date, gold: true },
                { label: "Time", value: quizDetails.time },
                { label: "Mode", value: quizDetails.mode, gold: true },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-400">
                    {item.label}
                  </span>
                  <span
                    className={`text-xl font-bold ${
                      item.gold ? "text-[#c9a154]" : "text-zinc-100"
                    }`}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="group relative border border-[#c9a154]/30 rounded-2xl p-7 md:p-8 bg-zinc-950/70 backdrop-blur-md shadow-[0_0_40px_-12px_rgba(201,161,84,0.25)] transition-all duration-300 hover:shadow-[0_0_60px_-8px_rgba(201,161,84,0.45)]">
            {/* Gold top accent */}
            <div className="absolute top-0 left-1/2 h-[3px] w-16 -translate-x-1/2 bg-[#c9a154]" />

            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-zinc-400 mb-6">
              Individual Participation · Limited Seats
            </p>

            <div className="space-y-6">
              <p className="text-sm text-[#c9a154] font-semibold uppercase tracking-[0.25em]">
                Quiz Rules
              </p>

              <ul className="space-y-4 text-zinc-300 font-medium">
                {[
                  "Open to all engineering students",
                  "20 questions",
                  "E-certificates will be provided to participants scoring 50% and above",
              
                ].map((rule, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#c9a154]" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="flex-1 w-full bg-black py-12 sm:py-14 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10 text-center">
            <h2 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 text-center">
              Quick{" "}
              <span className="text-[#c9a154] relative ml-1">Registration</span>
            </h2>

            <p className="text-sm sm:text-base text-zinc-400 font-medium max-w-xl mx-auto text-center leading-relaxed">
              Fill your details to secure your spot.
            </p>
          </div>

          <div className="border border-zinc-900 bg-zinc-950/80 rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 ">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
            >
              {/* Personal Info */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-zinc-900 bg-black/70 p-5 sm:p-6 md:p-8 space-y-6 hover:shadow-[0_0_20px_rgba(201,161,84,0.35)]">
                  <h3 className="text-lg sm:text-xl font-bold flex items-center gap-3">
                    <span className="h-7 w-1.5 bg-[#c9a154]" />
                    <span>Personal Information</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="label-dark text-lg mb-1">
                        Full Name *
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="
    input-field-dark
    px-3 py-2
    rounded-lg
    border border-amber-200/40
    outline-none
    transition-colors duration-200
    focus:border-amber-300
    focus:ring-1 focus:ring-amber-300/50
  "
                      />

                      {errors.name && (
                        <p className="text-red-400 mt-1 text-xs font-semibold">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label className="label-dark text-lg mb-1">USN *</label>

                      <input
                        type="text"
                        name="name"
                        value={formData.usn}
                        onChange={handleChange}
                        placeholder="Enter your USN"
                        className="
    input-field-dark
    px-3 py-2
    rounded-lg
    border border-amber-200/40
    outline-none
    transition-colors duration-200
    focus:border-amber-300
    focus:ring-1 focus:ring-amber-300/50
  "
                      />

                      {errors.usn && (
                        <p className="text-red-400 mt-1 text-xs font-semibold">
                          {errors.usn}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label className="label-dark text-lg mb-1">Email *</label>

                      <input
                        type="text"
                        name="name"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="
    input-field-dark
    px-3 py-2
    rounded-lg
    border border-amber-200/40
    outline-none
    transition-colors duration-200
    focus:border-amber-300
    focus:ring-1 focus:ring-amber-300/50
  "
                      />

                      {errors.email && (
                        <p className="text-red-400 mt-1 text-xs font-semibold">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label className="label-dark text-lg mb-1">
                        Contact *
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        placeholder="XXXXXXXXXX"
                        className="
    input-field-dark
    px-3 py-2
    rounded-lg
    border border-amber-200/40
    outline-none
    transition-colors duration-200
    focus:border-amber-300
    focus:ring-1 focus:ring-amber-300/50
  "
                      />

                      {errors.contactNumber && (
                        <p className="text-red-400 mt-1 text-xs font-semibold">
                          {errors.contactNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <label className="label-dark text-lg mb-1">
                        Branch *
                      </label>
                      <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        className="
    select-field-dark
    h-11
    w-full
    rounded-lg
    border border-amber-200/40
    bg-zinc-950
    px-3
    text-sm text-zinc-100
    outline-none
    transition-all duration-200
     
    focus:border-amber-300
    focus:ring-1 focus:ring-amber-300/50
  "
                      >
                        <option value="">Select Branch</option>
                        {branches.map((branch) => (
                          <option key={branch} value={branch}>
                            {branch}
                          </option>
                        ))}
                      </select>
                      {errors.branch && (
                        <p className="text-red-400 mt-1 text-xs font-semibold">
                          {errors.branch}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label className="label-dark text-lg mb-1">Year *</label>
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        className="
    select-field-dark
    h-11
    w-full
    rounded-lg
    border border-amber-200/40
    bg-zinc-950
    px-3
    text-sm text-zinc-100
    outline-none
    transition-all duration-200
     
    focus:border-amber-300
    focus:ring-1 focus:ring-amber-300/50"
                      >
                        <option value="">Select Year</option>
                        {years.map((year) => (
                          <option key={year} value={year}>
                            Year {year}
                          </option>
                        ))}
                      </select>
                      {errors.year && (
                        <p className="text-red-400 mt-1 text-xs font-semibold">
                          {errors.year}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Question */}
              <div className="lg:col-span-2">
                <div
                  className="rounded-2xl border border-zinc-900 bg-black/70 p-5 sm:p-6 md:p-8 space-y-4 hover:shadow-[0_0_20px_rgba(201,161,84,0.35)]
"
                >
                  <h3 className="text-lg sm:text-xl font-bold">
                    Have you attended this quiz before?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    <label className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-950/40 hover:border-zinc-600 cursor-pointer transition-all group">
                      <input
                        type="radio"
                        name="attendedBefore"
                        value="true"
                        checked={formData.attendedBefore === true}
                        onChange={handleChange}
                        className="w-5 h-5 accent-[#c9a154] text-[#c9a154] focus:border-amber-300
    focus:ring-1 focus:ring-amber-300/50"
                      />
                      <span className="text-sm font-medium text-zinc-200 group-hover:text-white">
                        Yes
                      </span>
                    </label>

                    <label className="flex items-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-950/40 hover:border-zinc-600 cursor-pointer transition-all group">
                      <input
                        type="radio"
                        name="attendedBefore"
                        value="false"
                        checked={formData.attendedBefore === false}
                        onChange={handleChange}
                        className="w-5 h-5 accent-[#c9a154] text-[#c9a154]"
                      />
                      <span className="text-sm font-medium text-zinc-200 group-hover:text-white">
                        No
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="lg:col-span-2 flex flex-col sm:flex-row gap-4 pt-2">
                {errors.submit && (
                  <div className="flex-1 px-4 py-3 rounded-2xl border border-red-500/60 bg-red-950/40 text-red-200 text-center text-sm font-semibold">
                    {errors.submit}
                  </div>
                )}
                {success && (
                  <div className="flex-1 px-4 py-3 rounded-2xl border border-emerald-500/60 bg-emerald-950/40 text-emerald-200 text-center text-sm font-semibold animate-pulse">
                    {success}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 inline-flex items-center justify-center px-6 py-3.5 rounded-2xl font-extrabold text-xs sm:text-sm md:text-base tracking-[0.16em] uppercase
                    bg-[#c9a154] text-black hover:bg-[#d9b76a]
                    disabled:opacity-60 disabled:cursor-not-allowed
                    transition-colors border border-transparent shadow-lg hover:shadow-[#c9a154]/25"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Registering…
                    </>
                  ) : (
                    "Register Now"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Success Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="bg-zinc-900/90 border border-[#c9a154]/40 rounded-2xl p-8 w-11/12 max-w-md shadow-xl animate-scaleIn text-center space-y-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#c9a154]">
                🎉 Registration Successful!
              </h2>
              <p className="text-zinc-300 text-sm md:text-base font-medium leading-relaxed">
                You're all set for the <strong>{quizDetails.theme}</strong>!
                <br />
                Join our WhatsApp group for updates.
              </p>
              <a
                href="https://chat.whatsapp.com/L78MTLXlmiDGy3Ir83fPeH"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#c9a154] text-black font-bold py-3 rounded-xl hover:bg-[#d9b76a] transition-colors text-sm md:text-base shadow-lg"
              >
                Join WhatsApp Group
              </a>
              <button
                onClick={() => {
                  navigate("/");
                  setShowModal(false);
                }}
                className="text-zinc-400 hover:text-white text-sm mt-2 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      <style jsx>{`
        .input-field-dark {
          @apply w-full px-4 py-2.5 sm:py-3 bg-zinc-950 border border-zinc-800 rounded-xl
    text-sm sm:text-base text-white placeholder-zinc-500
    focus:outline-none focus:ring-2 focus:ring-[#c9a154] focus:border-[#c9a154]
    transition-all duration-200;
        }
        .input-field-dark:focus {
          box-shadow: 0 0 0 1px rgba(201, 161, 84, 0.4);
        }

        /* ✅ FIXED DARK THEME DROPDOWN */
        .select-field-dark {
          @apply w-full rounded-lg bg-zinc-900 border border-zinc-700 
    px-3 py-2.5 sm:py-3 text-sm sm:text-base text-zinc-100 
    focus:outline-none focus:ring-2 focus:ring-[#c9a154] focus:border-transparent 
    transition-all duration-200 cursor-pointer;
        }

        /* ✅ CRITICAL: Dark dropdown options */
        .select-field-dark optgroup,
        .select-field-dark option {
          background-color: #18181b !important; /* zinc-950 */
          color: #f4f4f5 !important; /* zinc-100 */
          padding: 8px 12px;
        }

        /* ✅ Hover effect for options */
        .select-field-dark option:hover {
          background-color: #27272a !important; /* zinc-800 */
          color: #ffffff !important;
        }

        .select-field-dark option:checked {
          background-color: #c9a154 !important; /* Gold accent */
          color: #000000 !important;
        }

        .select-field-dark:focus {
          box-shadow: 0 0 0 1px rgba(201, 161, 84, 0.4);
        }

        .label-dark {
          @apply block text-xs sm:text-[0.7rem] font-semibold uppercase tracking-wide text-zinc-400 mb-1.5;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
};

export default Registration;
