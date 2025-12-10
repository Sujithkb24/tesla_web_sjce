import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { complex } from 'framer-motion';
const Registration = () => {
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VERCEL_BACKEND_URL;
  const [formData, setFormData] = useState({
    teamName: '',
    leaderName: '',
    leaderEmail: '',
    leaderPhone: '',
    leaderBranch: '',
    leaderYear: '',
    member1: { name: '', year: '', branch: '' },
    member2: { name: '', year: '', branch: '' },
    member3: { name: '', year: '', branch: '' },
    domain: '',
    pptLink: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState('');

  const branches = ['CSE', 'ISE','CSBS', 'ECE', 'EIE', 'IP', 'MECH', 'CIVIL', 'EEE'];
  const years = ['1', '2', '3', '4'];
  const domains = ['Energy Conservation'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('member')) {
      const [memberNum, field] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [memberNum]: { ...prev[memberNum], [field]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.teamName.trim()) newErrors.teamName = 'Team name is required';
    if (!formData.leaderName.trim()) newErrors.leaderName = 'Leader name is required';
    if (!formData.leaderEmail.trim()) newErrors.leaderEmail = 'Email is required';
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.leaderEmail))
      newErrors.leaderEmail = 'Invalid email format';
    if (!formData.leaderPhone.trim()) newErrors.leaderPhone = 'Phone is required';
    else if (!/^[0-9]{10}$/.test(formData.leaderPhone)) newErrors.leaderPhone = 'Phone must be 10 digits';
    if (!formData.leaderBranch) newErrors.leaderBranch = 'Branch is required';
    if (!formData.leaderYear) newErrors.leaderYear = 'Year is required';

    ['member1', 'member2'].forEach(member => {
      if (!formData[member].name.trim()) newErrors[`${member}.name`] = `${member.replace('member', 'Member ')} name required`;
      if (!formData[member].year) newErrors[`${member}.year`] = `${member.replace('member', 'Member ')} year required`;
      if (!formData[member].branch) newErrors[`${member}.branch`] = `${member.replace('member', 'Member ')} branch required`;
    });

    if (formData.member3.name && (!formData.member3.year || !formData.member3.branch))
      newErrors.member3 = 'Complete all fields for Member 3 or leave empty';

    if (!formData.domain) newErrors.domain = 'Domain is required';
    if (!formData.pptLink.trim()) newErrors.pptLink = 'PPT link is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSuccess('');
    setSuccess("Registered successfully!");
    setShowModal(true);



    try {
      const response = await fetch(`${BACKEND_URL}/api/teams/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          leaderYear: parseInt(formData.leaderYear)
        })
      });

      const result = await response.json();

      if (result.success) {
        setSuccess('Team registered successfully!');
      } else {
        setErrors({ submit: result.message || 'Registration failed' });
      }
    } catch (error) {
      setErrors({ submit: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar/>
      {/* Hero Section */}
    <section className="w-full border-b border-[#c9a154]/30 bg-gradient-to-b from-black via-black to-zinc-900">
  <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 lg:py-28 grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-10 items-center">

    {/* Left Content */}
    <div>
      <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-[#c9a154] font-bold mb-4">
        TESLA SJCE
      </p>

      <h1 className="text-3xl font-sans md:text-4xl lg:text-6xl font-extrabold leading-tight mb-4">
        Energy Conservation <span className="text-[#c9a154]">Ideathon</span>
      </h1>
      

      <p className="text-sm md:text-base text-zinc-300 max-w-4xl font-medium mb-10">
        The global energy landscape demands innovation. This Ideathon challenges visionary minds to conceptualize groundbreaking, scalable
          solutions for energy conservation.
      </p>

      {/* Dates */}
      <div className="flex flex-col sm:flex-row gap-6 sm:items-center">
        {/* Event Date */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Event Date
          </span>
          <span className="text-base md:text-lg font-bold">
            16TH DEC, 2025
          </span>
        </div>

        <div className="hidden sm:block sm:h-10 sm:w-px sm:bg-zinc-800" />

        {/* Registration Last Date */}
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
            Last Date For Registration
          </span>
          <span className="text-base md:text-lg font-bold text-[#c9a154]">
            14TH DEC, 2025
          </span>
        </div>
      </div>
    </div>

    {/* Right Card */}
    <div className="border border-zinc-800 rounded-2xl p-6 md:p-7 bg-zinc-950/70 backdrop-blur-sm flex flex-col gap-5 shadow-[0_0_20px_-4px_rgba(0,0,0,0.7)]">

      <p className="text-s font-semibold tracking-[0.18em] uppercase text-zinc-400">
        Limited Slots · Team of 3–4
      </p>

      {/* Rules List */}
      <div className="space-y-4">
        <p className="text-s text-[#c9a154] font-semibold uppercase tracking-[0.16em]">
          Participation Guidelines
        </p>

        <ul className="space-y-3 text-s text-zinc-300 leading-relaxed font-medium">
          <li className="flex gap-2">
            <span className="text-[#c9a154]">•</span>
            Open to students from all engineering branches.
          </li>

          <li className="flex gap-2">
            <span className="text-[#c9a154]">•</span>
            Submit a 7-8-slide PPT deck clearly describing the concept and its impact.
          </li>

          <li className="flex gap-2">
            <span className="text-[#c9a154]">•</span>
            Ideas must be original, not previously published or implemented.
          </li>

          <li className="flex gap-2">
            <span className="text-[#c9a154]">•</span>
            Intellectual property remains with the team. Organizers receive a non-exclusive evaluation license.
          </li>
        </ul>
      </div>

     
    </div>
  </div>
</section>
<section className="w-full border-y border-[#c9a154]/30 bg-gradient-to-b from-black via-zinc-950 to-black py-16">
  <div className="max-w-6xl mx-auto px-6">

    <div className="flex flex-col items-center text-center space-y-5">
      {/* Accent Tag */}
      <p className="uppercase tracking-[0.25em] text-xs md:text-2xl text-[#c9a154] font-bold">
      Domain
      </p>

      {/* Header */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
        <span className="text-[#c9a154]">Energy Conservation</span> /
        <br className="sm:hidden" />
        Sustainability
      </h2>

      {/* Subtitle */}
      <p className="text-sm md:text-base text-zinc-400 max-w-2xl font-medium">
        Innovating for a future that is cleaner, smarter, and energy-efficient.
        Your ideas will shape real-world impact.
      </p>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 w-full">
        
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 backdrop-blur-sm hover:border-[#c9a154] transition-all duration-300">
          <h3 className="text-lg font-bold text-[#c9a154] mb-2">
            Smart Energy Use
          </h3>
          <p className="text-zinc-400 text-sm">
            Concepts that optimize consumption, reduce waste, and modernize traditional energy systems.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 backdrop-blur-sm hover:border-[#c9a154] transition-all duration-300">
          <h3 className="text-lg font-bold text-[#c9a154] mb-2">
            Clean & Green Tech
          </h3>
          <p className="text-zinc-400 text-sm">
            Sustainable technologies, renewable solutions, and eco-friendly innovations.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 backdrop-blur-sm hover:border-[#c9a154] transition-all duration-300">
          <h3 className="text-lg font-bold text-[#c9a154] mb-2">
            Community Impact
          </h3>
          <p className="text-zinc-400 text-sm">
            Ideas that educate, empower, and transform communities toward a greener lifestyle.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

<section className="w-full border-y border-[#c9a154]/30 bg-gradient-to-b from-black via-zinc-950 to-black py-16 relative overflow-hidden">

  {/* Golden Aura Background Animation */}
  <div className="absolute inset-0">
    <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-60 bg-[#c9a154]/20 rounded-full blur-3xl animate-pulse-slow"></div>
    <div className="absolute bottom-0 right-10 h-40 w-40 bg-[#c9a154]/10 rounded-full blur-2xl animate-pulse-slower"></div>
  </div>

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Title */}
    <div className="text-center space-y-4 mb-10">
      <p className="uppercase tracking-[0.25em] text-xs md:text-2xl text-[#c9a154] font-bold">
        Rewards
      </p>
      <h2 className="text-3xl md:text-4xl tracking-[0.1em] lg:text-5xl font-extrabold">
        Prize Pool: <span className="text-[#c9a154]">₹8k</span>
      </h2>
      <p className="text-sm md:text-base text-zinc-400 font-medium max-w-2xl mx-auto">
        Recognizing innovation, creativity, and impactful ideas that redefine sustainability.
      </p>
    </div>

    {/* Prize Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
    </div>
  </div>
</section>


      {/* Registration Form Section */}
      <section
  id="registration-form"
  className="flex-1 w-full bg-black py-12 sm:py-14 lg:py-16"
>
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="mb-8 sm:mb-10 text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3">
        Team Registration
      </h2>
      <p className="text-sm sm:text-base text-zinc-400 font-medium max-w-2xl mx-auto">
        Fill in your team details to lock your slot for the ideathon.
      </p>
    </div>

    {/* Card */}
    <div className="border border-zinc-900 bg-zinc-950/80 rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-[0_0_60px_rgba(0,0,0,0.9)]">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
      >
        {/* Team Info */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-zinc-900 bg-black/70 p-5 sm:p-6 md:p-8 space-y-6">
  <h3 className="text-lg sm:text-xl font-bold flex items-center gap-3">
    <span className="h-7 w-1.5 bg-[#c9a154]" />
    <span>Team Information</span>
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="flex flex-col">
      <label className="label-dark mb-1">Team Name *</label>
      <input
        type="text"
        name="teamName"
        value={formData.teamName}
        onChange={handleChange}
        className="input-field-dark"
        placeholder="Enter your team name"
      />
      {errors.teamName && (
        <p className="text-red-400 mt-1 text-xs font-semibold">
          {errors.teamName}
        </p>
      )}
    </div>
  </div>
</div>

        </div>

        {/* Leader */}
        <div>
          <div className="rounded-2xl border border-zinc-900 bg-black/70 p-5 sm:p-6 md:p-8 space-y-6">
  <h3 className="text-lg sm:text-xl font-bold">Team Leader</h3>

  <div className="space-y-6">
    {/* Full Name */}
    <div className="flex flex-col">
      <label className="label-dark mb-1">Full Name *</label>
      <input
        type="text"
        name="leaderName"
        value={formData.leaderName}
        onChange={handleChange}
        className="input-field-dark"
        placeholder="Leader's full name"
      />
      {errors.leaderName && (
        <p className="text-red-400 mt-1 text-xs font-semibold">
          {errors.leaderName}
        </p>
      )}
    </div>

    {/* Email */}
    <div className="flex flex-col">
      <label className="label-dark mb-1">Email *</label>
      <input
        type="email"
        name="leaderEmail"
        value={formData.leaderEmail}
        onChange={handleChange}
        className="input-field-dark"
        placeholder="leader@example.com"
      />
      {errors.leaderEmail && (
        <p className="text-red-400 mt-1 text-xs font-semibold">
          {errors.leaderEmail}
        </p>
      )}
    </div>

    {/* Phone + Year */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="flex flex-col">
        <label className="label-dark mb-1">Phone *</label>
        <input
          type="tel"
          name="leaderPhone"
          value={formData.leaderPhone}
          onChange={handleChange}
          className="input-field-dark"
          placeholder="XXXXXXXXXX"
        />
        {errors.leaderPhone && (
          <p className="text-red-400 mt-1 text-xs font-semibold">
            {errors.leaderPhone}
          </p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="label-dark mb-1">Year *</label>
        <select
  name="leaderYear"
  value={formData.leaderYear}
  onChange={handleChange}
  className="w-full rounded-lg bg-zinc-900/80 border border-zinc-700 text-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c9a154] focus:border-transparent"
>
  <option value="" className="bg-zinc-900">Select Year</option>
  {years.map(year => (
    <option
      key={year}
      value={year}
      className="bg-zinc-900 text-zinc-200"
    >
      {year}
    </option>
  ))}
</select>

        {errors.leaderYear && (
          <p className="text-red-400 mt-1 text-xs font-semibold">
            {errors.leaderYear}
          </p>
        )}
      </div>
    </div>

    {/* Branch */}
    <div className="flex flex-col">
      <label className="label-dark mb-1">Branch *</label>
      <select
  name="leaderBranch"
  value={formData.leaderBranch}
  onChange={handleChange}
  className="w-full rounded-lg bg-zinc-900/80 border border-zinc-700 text-zinc-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c9a154] focus:border-transparent"
>
  <option value="" className="bg-zinc-900">Select Branch</option>
  {branches.map(branch => (
    <option
      key={branch}
      value={branch}
      className="bg-zinc-900 text-zinc-200"
    >
      {branch}
    </option>
  ))}
</select>

      {errors.leaderBranch && (
        <p className="text-red-400 mt-1 text-xs font-semibold">
          {errors.leaderBranch}
        </p>
      )}
    </div>
  </div>
</div>

        </div>

        {/* Members */}
        <div>
          <div className="rounded-2xl border border-zinc-900 bg-black/70 p-5 sm:p-6 md:p-8 space-y-6">
  <h3 className="text-lg sm:text-xl font-bold">Team Members</h3>

  {[1, 2].map(num => (
    <div
      key={num}
      className="rounded-xl border border-zinc-900 bg-zinc-950/70 p-4 sm:p-5 space-y-5"
    >
      <h4 className="text-sm font-semibold">Member {num} *</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Member Name */}
        <div className="flex flex-col">
          <input
            type="text"
            name={`member${num}.name`}
            value={formData[`member${num}`].name}
            onChange={handleChange}
            className="input-field-dark"
            placeholder={`Member ${num} name`}
          />
          {errors[`member${num}.name`] && (
            <p className="text-red-400 mt-1 text-xs font-semibold">
              {errors[`member${num}.name`]}
            </p>
          )}
        </div>

        {/* Member Year */}
        <div className="flex flex-col">
          <select
            name={`member${num}.year`}
            value={formData[`member${num}`].year}
            onChange={handleChange}
            className="w-full rounded-lg bg-zinc-900/80 border border-zinc-700 text-zinc-200 px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-[#c9a154] focus:border-transparent"
          >
            <option value="" className="bg-zinc-900 text-zinc-300">Year</option>
            {years.map(year => (
              <option
                key={year}
                value={year}
                className="bg-zinc-900 text-zinc-200"
              >
                {year}
              </option>
            ))}
          </select>
          {errors[`member${num}.year`] && (
            <p className="text-red-400 mt-1 text-xs font-semibold">
              {errors[`member${num}.year`]}
            </p>
          )}
        </div>
      </div>

      {/* Member Branch */}
      <div className="flex flex-col">
        <select
          name={`member${num}.branch`}
          value={formData[`member${num}`].branch}
          onChange={handleChange}
          className="w-full rounded-lg bg-zinc-900/80 border border-zinc-700 text-zinc-200 px-3 py-2 
                     focus:outline-none focus:ring-2 focus:ring-[#c9a154] focus:border-transparent"
        >
          <option value="" className="bg-zinc-900 text-zinc-300">Branch</option>
          {branches.map(branch => (
            <option
              key={branch}
              value={branch}
              className="bg-zinc-900 text-zinc-200"
            >
              {branch}
            </option>
          ))}
        </select>
        {errors[`member${num}.branch`] && (
          <p className="text-red-400 mt-1 text-xs font-semibold">
            {errors[`member${num}.branch`]}
          </p>
        )}
      </div>
    </div>
  ))}

  {/* Member 3 Optional */}
  <div className="rounded-xl border border-dashed border-zinc-800 bg-zinc-950/40 p-4 sm:p-5 space-y-5">
    <h4 className="text-sm font-semibold text-zinc-300">Member 3 (Optional)</h4>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {/* Name */}
      <input
        type="text"
        name="member3.name"
        value={formData.member3.name}
        onChange={handleChange}
        className="input-field-dark"
        placeholder="Member 3 name"
      />

      {/* Year Dropdown */}
      <select
        name="member3.year"
        value={formData.member3.year}
        onChange={handleChange}
        className="w-full rounded-lg bg-zinc-900/80 border border-zinc-700 text-zinc-200 px-3 py-2 
                   focus:outline-none focus:ring-2 focus:ring-[#c9a154] focus:border-transparent"
      >
        <option value="" className="bg-zinc-900">Year</option>
        {years.map(year => (
          <option key={year} value={year} className="bg-zinc-900 text-zinc-200">
            {year}
          </option>
        ))}
      </select>
    </div>

    {/* Branch Dropdown */}
    <div>
      <select
        name="member3.branch"
        value={formData.member3.branch}
        onChange={handleChange}
        className="w-full rounded-lg bg-zinc-900/80 border border-zinc-700 text-zinc-200 px-3 py-2 
                   focus:outline-none focus:ring-2 focus:ring-[#c9a154] focus:border-transparent"
      >
        <option value="" className="bg-zinc-900">Branch</option>
        {branches.map(branch => (
          <option key={branch} value={branch} className="bg-zinc-900 text-zinc-200">
            {branch}
          </option>
        ))}
      </select>
    </div>

    {errors.member3 && (
      <p className="text-red-400 mt-1 text-xs font-semibold">{errors.member3}</p>
    )}
  </div>
</div>

        </div>

        {/* Domain & PPT */}
       <div className="lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-6">

  {/* Domain Section */}
  <div className="rounded-2xl border border-zinc-900 bg-black/70 p-5 sm:p-6 md:p-8 space-y-6">
    <h3 className="text-lg sm:text-xl font-bold">Domain *</h3>

    <div>
      {domains.map(domain => (
        <label
          key={domain}
          className={`flex items-center gap-2 px-3  py-2.5 rounded-xl border text-sm font-medium cursor-pointer transition-colors
            ${
              formData.domain === domain
                ? 'border-[#c9a154] bg-[#c9a154]/10 text-[#c9a154]'
                : 'border-zinc-800 bg-zinc-950/40 text-zinc-200 hover:border-zinc-600'
            }`}
        >
          <input
            type="radio"
            name="domain"
            value={domain}
            checked={formData.domain === domain}
            onChange={handleChange}
            className="accent-[#c9a154] "
          />
          <span>{domain}</span>
        </label>
      ))}
    </div>

    {errors.domain && (
      <p className="text-red-400 mt-1 text-xs font-semibold">
        {errors.domain}
      </p>
    )}
  </div>

  {/* PPT Link Section */}
  <div className="rounded-2xl border border-zinc-900 bg-black/70 p-5 sm:p-6 md:p-8 space-y-5">
    <h3 className="text-lg sm:text-xl font-bold">PPT Link *</h3>

    <div className="flex flex-col">
      <input
        type="url"
        name="pptLink"
        value={formData.pptLink}
        onChange={handleChange}
        className="input-field-dark"
        placeholder="https://your-ppt-link.com"
      />
      {errors.pptLink && (
        <p className="text-red-400 mt-1 text-xs font-semibold">
          {errors.pptLink}
        </p>
      )}
    </div>

    <p className="text-xs text-zinc-500 font-medium leading-relaxed">
      Share a public link to Google Slides, Canva, or any accessible presentation.
    </p>
  </div>

</div>

{showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn">
    {/* Modal Box */}
    <div className="bg-zinc-900/90 border border-[#c9a154]/40 rounded-2xl p-8 w-11/12 max-w-md shadow-xl 
                    animate-scaleIn text-center space-y-4">

      <h2 className="text-2xl md:text-3xl font-extrabold text-[#c9a154]">
        🎉 Congratulations!
      </h2>

      <p className="text-zinc-300 text-sm md:text-base font-medium leading-relaxed">
        Your team has been successfully registered.<br />
        Join the WhatsApp group to stay updated.
      </p>

      {/* WhatsApp Button */}
      <a
        href="https://chat.whatsapp.com/Co6CYAog3ioBMmbFrBxGs1?mode=hqrt3"   // <-- replace with your group or link
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-[#c9a154] text-black font-bold py-3 rounded-xl 
                   hover:bg-[#d9b76a] transition-colors text-sm md:text-base"
      >
        Join WhatsApp Group
      </a>

      {/* Close Button */}
      <button
      onClick={() => {
        navigate("/");
        setShowModal(false);
      }}
      className="text-zinc-400 hover:text-white text-sm mt-2"
    >
      Close
    </button>
    </div>
  </div>
)}


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
              transition-colors border border-transparent"
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
              'Register Team'
            )}
          </button>
        </div>
      </form>
    </div>
  </div>

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
    .label-dark {
      @apply block text-xs sm:text-[0.7rem] font-semibold uppercase tracking-wide text-zinc-400 mb-1.5;
    }
  `}</style>
</section>

    </div>
  );
};

export default Registration;
