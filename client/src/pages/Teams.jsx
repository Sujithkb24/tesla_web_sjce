import React from 'react';
import TeamsHero from '../components/TeamsHero';
import TeamCarousel from '../components/TeamCarousel';
import MeetTheTeam from '../components/MeetTheTeam';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TeamMembers from '../components/TeamMembers';
const Teams = () => {
  return (
    <>
      <Navbar />
      {/* Teams Hero at the top */}
      <div className="relative w-full h-full">
        {/* <Navbar /> */}
        <TeamsHero />
      </div>

      {/* Sticky Horizontal Scroll Carousel */}
      <div><TeamCarousel /></div>

      {/* Meet the Team Section */}
      <div className='w-full'>
        <TeamMembers/>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Teams;
