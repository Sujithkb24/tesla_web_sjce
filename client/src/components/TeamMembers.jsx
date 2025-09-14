import React, { useState, useRef, useEffect } from 'react';
import TeamCard from './TeamCard';

// Custom CSS class to hide scrollbars while keeping functionality
const customScrollbarStyle = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const teamSections = [
  {
    id: "technical",
    name: "Technical Wing",
    members: [
      { name: "Charan S", role: "Junior Technical Lead", image: "/Tesla_photos/Technical/Charan.webp", description: "" },
      { name: "Aadya", role: "Senior Technical Lead", image: "/Tesla_photos/Technical/Aadya.webp", description: "" },
      { name: "Jeethendra", role: "Member", image: "/Tesla_photos/Default_pfp.webp", description: "" },
      { name: "Vikunth M Athreya", role: "Member", image: "/Tesla_photos/Default_pfp.webp", description: "" },
      { name: "Bhavana M R", role: "Member", image: "/Tesla_photos/Technical/Bhavana.webp", description: "" },
      { name: "Shreepad Hangari", role: "Member", image: "/Tesla_photos/Technical/Shreepad.webp", description: "" },
      { name: "Harshith M", role: "Member", image: "/Tesla_photos/Technical/Harshith.webp", description: "" },
      { name: "Anusha Savithri I V", role: "Member", image: "/Tesla_photos/Technical/Anusha.webp", description: "" },
      { name: "Ankita Arya", role: "Member", image: "/Tesla_photos/Technical/Ankita.webp", description: "" },
    ],
  },
  {
    id: "program",
    name: "Program Coordination Wing",
    members: [
      { name: "Sumit Ukkali", role: "Program Coordinator Lead", image: "/Tesla_photos/Core/Sumit.webp", description: "" },
      { name: "Vamshika", role: "Program Coordinator Lead", image: "/Tesla_photos/Program Coordination/Vamshika.webp", description: "" },
      { name: "Prajna", role: "Member", image: "/Tesla_photos/Program Coordination/Prajna.webp", description: "" },
      { name: "Punya", role: "Member", image: "/Tesla_photos/Program Coordination/Punya.webp", description: "" },
      { name: "Thrupthi", role: "Member", image: "/Tesla_photos/Program Coordination/Thrupthi.webp", description: "" },
      { name: "Kushal", role: "Member", image: "/Tesla_photos/Program Coordination/Kushal.webp", description: "" },
      { name: "Nishanth", role: "Member", image: "/Tesla_photos/Program Coordination/Nishanth.webp", description: "" },
      { name: "Shwetha", role: "Member", image: "/Tesla_photos/Program Coordination/Shwetha.webp", description: "" },
      { name: "Shreya", role: "Member", image: "/Tesla_photos/Program Coordination/Shreya.webp", description: "" }
    ]
  },
  {
    id: "student",
    name: "Student Coordination Wing",
    members: [
      { name: "Aradhana", role: "Student Coordination Lead", image: "/Tesla_photos/Core/Aradhana.webp", description: "Helps with project management and planning." },
      { name: "Aathmika", role: "Member", image: "/Tesla_photos/Student Coordination/Aathmika.webp", description: "Helps with project management and planning." },
      { name: "Divit", role: "Member", image: "/Tesla_photos/Student Coordination/Divit.jpg", description: "Focuses on system architecture and optimization." },
      { name: "Alvisha", role: "Member", image: "/Tesla_photos/Student Coordination/Alvisha.webp", description: "Works on backend database management." },
      { name: "Ananya", role: "Member", image: "/Tesla_photos/Student Coordination/Ananya.webp", description: "Supports frontend development and design." },
      { name: "Vaishnavi", role: "Member", image: "/Tesla_photos/Student Coordination/Vaishnavi.webp", description: "Helps with content creation and documentation." },
      { name: "Pranav Kashyap", role: "Member", image: "/Tesla_photos/Student Coordination/Pranav.webp", description: "Works on mobile app development." },
      { name: "Sinchana Sanjay", role: "Member", image: "/Tesla_photos/Student Coordination/Sinchana S.webp", description: "Assists in UI/UX design and testing." },
      { name: "Rohith", role: "Member", image: "/Tesla_photos/Default_pfp.webp", description: "Contributes to project deployment and monitoring." }
    ],
  },
  {
    id: "art",
    name: "Art & Design Wing",
    members: [
      { name: "Shreyas Pathki", role: "Art & Design Lead", image: "/Tesla_photos/Art & Design/Shreyas.webp", description: "Creates user-friendly designs." },
      { name: "A S Darshan", role: "Member", image: "/Tesla_photos/Art & Design/Darshan.webp", description: "Handles branding visuals." },
      { name: "Nishan C R", role: "Member", image: "/Tesla_photos/Art & Design/Nishan.webp", description: "Creates animations." },
      { name: "Poorvika K B", role: "Member", image: "/Tesla_photos/Art & Design/Poorvika.webp", description: "Draws digital illustrations." },
      { name: "Sinchana K Y", role: "Member", image: "/Tesla_photos/Art & Design/Sinchana K Y.webp", description: "Designs user interfaces." },
      { name: "Keerthana", role: "Member", image: "/Tesla_photos/Default_pfp.webp", description: "Designs user interfaces." },
    ],
  },
  {
    id: "web",
    name: "Web Development Wing",
    members: [
      { name: "Akshay Mirji", role: "Web Wing Lead", image: "/Tesla_photos/Web/Akshay.webp", description: "Leads marketing campaigns." },
      { name: "Sameer Godabole", role: "Member", image: "/Tesla_photos/Default_pfp.webp", description: "Manages client relations." },
      { name: "Nischay H R", role: "Member", image: "/Tesla_photos/Web/Nischay.webp", description: "Handles recruitment." },
      { name: "Prakruthi Prasad", role: "Member", image: "/Tesla_photos/Web/Prakruthi.webp", description: "Optimizes workflows." },
      { name: "Kshitij", role: "Member", image: "/Tesla_photos/Web/Kshitij.webp", description: "Manages budgets and expenses." },
      { name: "Mohammed Imad", role: "Member", image: "/Tesla_photos/Default_pfp.webp", description: "" },
    ],
  },
];

const TeamMembers = () => {
  const [flippedKey, setFlippedKey] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [menuSticky, setMenuSticky] = useState(false);
  const [ignoreScrollHighlight, setIgnoreScrollHighlight] = useState(false);
  const sectionRefs = useRef({});
  const navbarRef = useRef(null);
  const menuContainerRef = useRef(null);
  const mainNavbarHeight = 64;

  // Set up refs for each section
  useEffect(() => {
    teamSections.forEach(section => {
      sectionRefs.current[section.id] = React.createRef();
    });
    if (!activeSection && teamSections.length > 0) {
      setActiveSection(teamSections[0].id);
    }
  }, []);

  // Handle scroll and sticky menu
  useEffect(() => {
    const handleScroll = () => {
      // Sticky menu logic
      if (navbarRef.current) {
        const navbarTop = navbarRef.current.getBoundingClientRect().top;
        setMenuSticky(navbarTop <= mainNavbarHeight);
      }

      // Ignore scroll highlight if set by click
      if (ignoreScrollHighlight) return;

      // Find the section in view
      const threshold = mainNavbarHeight + (navbarRef.current ? navbarRef.current.offsetHeight : 0) + 20;
      let foundSection = null;
      Object.keys(sectionRefs.current).forEach(id => {
        const ref = sectionRefs.current[id];
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom >= threshold) {
            foundSection = id;
          }
        }
      });

      if (foundSection && foundSection !== activeSection) {
        setActiveSection(foundSection);

        // Center the active menu item in the scroll
        const menuButton = document.getElementById(`menu-${foundSection}`);
        if (menuButton && navbarRef.current && menuSticky) {
          const scrollContainer = navbarRef.current.querySelector('.overflow-x-auto');
          if (scrollContainer) {
            const containerWidth = scrollContainer.offsetWidth;
            const buttonLeft = menuButton.offsetLeft;
            const buttonWidth = menuButton.offsetWidth;
            scrollContainer.scrollTo({
              left: buttonLeft - (containerWidth / 2) + (buttonWidth / 2),
              behavior: 'smooth'
            });
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuSticky, ignoreScrollHighlight, activeSection]);

  // Click handler for menu buttons
  const scrollToSection = (id) => {
    setActiveSection(id);
    setIgnoreScrollHighlight(true);

    const section = sectionRefs.current[id].current;
    if (section) {
      const secondaryNavHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
      const totalOffset = mainNavbarHeight + secondaryNavHeight;
      const yPosition = section.getBoundingClientRect().top + window.pageYOffset - totalOffset;

      // Center the clicked menu item
      const menuButton = document.getElementById(`menu-${id}`);
      if (menuButton && navbarRef.current) {
        const scrollContainer = navbarRef.current.querySelector('.overflow-x-auto');
        if (scrollContainer) {
          const containerWidth = scrollContainer.offsetWidth;
          const buttonLeft = menuButton.offsetLeft;
          const buttonWidth = menuButton.offsetWidth;
          scrollContainer.scrollTo({
            left: buttonLeft - (containerWidth / 2) + (buttonWidth / 2),
            behavior: 'smooth'
          });
        }
      }

      window.scrollTo({
        top: yPosition,
        behavior: 'smooth'
      });

      // After scroll animation, re-enable scroll-based highlight
      setTimeout(() => {
        setIgnoreScrollHighlight(false);
      }, 600);
    }
  };

  const toggleFlip = (key) => {
    setFlippedKey((prevKey) => (prevKey === key ? null : key));
  };

  return (
    <div className="bg-[var(--color-dark-gray)] text-[var(--color-white)] py-12 min-h-screen">
      <style>{customScrollbarStyle}</style>

      <h1 className="text-4xl md:text-5xl font-bold text-center text-[var(--color-gold)] mb-8 mt-16">
        MEET THE TEAM
      </h1>

      <div
        ref={navbarRef}
        className={`${menuSticky ? 'sticky z-20 bg-[var(--color-black)] shadow-md w-full left-0 right-0' : ''} transition-all duration-300`}
        style={menuSticky ? { top: `${mainNavbarHeight}px` } : {}}
      >
        <div
          ref={menuContainerRef}
          className="overflow-x-auto py-2 mb-6 scroll-smooth w-full scrollbar-hide"
        >
          <div className="flex space-x-4 px-4 md:px-6 min-w-max md:justify-center w-full">
            {teamSections.map((section) => (
              <button
                key={section.id}
                id={`menu-${section.id}`}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-2 text-sm md:text-base font-medium rounded-md whitespace-nowrap transition-colors duration-200
                  ${activeSection === section.id
                    ? 'bg-[var(--color-gold)] text-[var(--color-white)] font-bold'
                    : 'text-[var(--color-white)] hover:bg-[var(--color-gray)] hover:text-[var(--color-white)]'}`}
              >
                {section.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {teamSections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          ref={sectionRefs.current[section.id]}
          className="mb-16 scroll-mt-32 px-4 md:px-8 lg:px-16"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-[var(--color-white)] border-b border-[var(--color-gray)] pb-3 tracking-wide">
            {section.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {section.members.map((member, memberIndex) => {
              const key = `${section.id}-${memberIndex}`;
              return (
                <TeamCard
                  key={key}
                  team={member}
                  isFlipped={flippedKey === key}
                  onClick={() => toggleFlip(key)}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
