import React, { useState, useRef, useEffect } from "react";

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
      {
        name: "Harshith M",
        role: "Technical Lead",
        image: "/TeslaMembers26-27/HarshithM.jpeg",
        description: "EEE - 3rd Year",
      },
      {
        name: "Shreepad Hangari",
        role: "Member",
        image: "/Tesla_photos/Technical/Shreepad.webp",
        description: "EEE - 3rd Year",
      },
      {
        name: "Alvisha Florine Veigas",
        role: "Member",
        image: "/Tesla_photos/Technical/Alvisha.webp",
        description: "EEE - 3rd Year",
      },
      {
        name: "Vikunth M Athreya",
        role: "Member",
        image: "/Tesla_photos/Default_pfp.webp",
        description: "EEE - 4th Year",
      },
      {
        name: "Anusha Savithri I V",
        role: "Member",
        image: "/Tesla_photos/Technical/Anusha.webp",
        description: "EEE - 3rd Year",
      },
      {
        name: "Bhavana M R",
        role: "Member",
        image: "/Tesla_photos/Technical/Bhavana.webp",
        description: "EEE - 3rd Year",
      },
      {
        name: "Jeethendra Maharshi N",
        role: "Member",
        image: "/Tesla_photos/Default_pfp.webp",
        description: "EEE - 4th Year",
      },
      {
        name: "Ankita Arya",
        role: "Member",
        image: "/Tesla_photos/Technical/Ankita.webp",
        description: "EEE - 2nd Year",
      },
      {
        name: "Tejashwini B",
        role: "Member",
        image: "/TeslaMembers26-27/TejashwiniB.jpeg",
        description: "EEE - 2nd Year",
      },
      {
        name: "Chethana V",
        role: "Member",
        image: "/TeslaMembers26-27/ChethanaV.JPG",
        description: "EEE - 2nd Year",
      },
      {
        name: "Vijayashree A",
        role: "Member",
        image: "/TeslaMembers26-27/VijayashreeA.jpeg",
        description: "EEE - 2nd Year",
      },
      {
        name: "Aprameya P",
        role: "Member",
        image: "/TeslaMembers26-27/AprameyaP.jpeg",
        description: "ECE - 2nd Year",
      },
      {
        name: "Vinayak S",
        role: "Member",
        image: "/TeslaMembers26-27/VinayakS.jpeg",
        description: "EEE - 2nd Year",
      },
    ],
  },
  {
    id: "program",
    name: "Program Coordination Wing",
    members: [
      {
        name: "Nishanth",
        role: "Program Coordinator Lead",
        image: "/Tesla_photos/Program Coordination/Nishanth.webp",
        description: "EEE - 3rd Year",
      },
      {
        name: "Punya",
        role: "Program Coordinator Lead",
        image: "/Tesla_photos/Program Coordination/Punya.webp",
        description: "EEE - 3rd Year",
      },
      {
        name: "Dhanyatha Chandresh",
        role: "Member",
        image: "/Tesla_photos/Program Coordination/Dhanyatha.webp",
        description: "EEE - 4th Year",
      },
      {
        name: "Vamshika M",
        role: "Member",
        image: "/Tesla_photos/Program Coordination/Vamshika.webp",
        description: "EEE - 4th Year",
      },
      {
        name: "Ananya B Urs",
        role: "Member",
        image: "/Tesla_photos/Program Coordination/Ananya.webp",
        description: "EEE - 4th Year",
      },
      {
        name: "Aradhana Panda",
        role: "Member",
        image: "/Tesla_photos/Program Coordination/Aradhana.webp",
        description: "EEE - 4th Year",
      },
      {
        name: "Prajna J",
        role: "Member",
        image: "/Tesla_photos/Program Coordination/Prajna.webp",
        description: "EEE - 4th Year",
      },
      {
        name: "Thrupthi K H",
        role: "Member",
        image: "/Tesla_photos/Program Coordination/Thrupthi.webp",
        description: "EEE - 4th Year",
      },
      {
        name: "Divit Shashank",
        role: "Member",
        image: "/Tesla_photos/Program Coordination/Divit.jpg",
        description: "CSBS - 3rd Year",
      },
      {
        name: "Khushal L",
        role: "Member",
        image: "/Tesla_photos/Program Coordination/Khushal.webp",
        description: "CSE - 3rd Year",
      },
      {
        name: "Aathmika M N",
        role: "Member",
        image: "/Tesla_photos/Program Coordination/Aathmika.webp",
        description: "EEE - 3rd Year",
      },
      {
        name: "Shreya Jalihal",
        role: "Member",
        image: "/Tesla_photos/Program Coordination/Shreya.webp",
        description: "EEE - 3rd Year",
      },
      {
        name: "Sinchana S",
        role: "Member",
        image: "/Tesla_photos/Program Coordination/Sinchana S.webp",
        description: "CSBS - 3rd Year",
      },
      {
        name: "Dheeren S",
        role: "Member",
        image: "/Tesla_photos/Default_pfp.webp",
        description: "PST - 1st Year",
      },
      {
        name: "Pragna M S",
        role: "Member",
        image: "/TeslaMembers26-27/PragnaMS.jpeg",
        description: "ECE - 2nd Year",
      },
      {
        name: "Anunaya S Bhandary",
        role: "Member",
        image: "/Tesla_photos/Default_pfp.webp",
        description: "EEE - 1st Year",
      },
      {
        name: "Liya Susan Joseph",
        role: "Member",
        image: "/TeslaMembers26-27/Liya.jpeg",
        description: "EEE - 1st Year",
      },
      {
        name: "Sumant Biradar",
        role: "Member",
        image: "/TeslaMembers26-27/SumantBiradar.jpeg",
        description: "CSE - 1st Year",
      },
      {
        name: "K Vikas Gowda",
        role: "Member",
        image: "/Tesla_photos/Default_pfp.webp",
        description: "EEE - 1st Year",
      },
      {
        name: "Pranav Bhat",
        role: "Member",
        image: "/Tesla_photos/Default_pfp.webp",
        description: "CSE - 1st Year",
      },
      {
        name: "Shivankur P M",
        role: "Member",
        image: "/Tesla_photos/Default_pfp.webp",
        description: "ECE - 1st Year",
      },
    ],
  },

  // {
  //   id: "student",
  //   name: "Student Coordination Wing",
  //   members: [
  //     { name: "Aradhana", role: "Student Coordination Lead", image: "/Tesla_photos/Core/Aradhana.webp", description: "Helps with project management and planning." },
  //     { name: "Aathmika", role: "Member", image: "/Tesla_photos/Student Coordination/Aathmika.webp", description: "Helps with project management and planning." },
  //     { name: "Divit", role: "Member", image: "/Tesla_photos/Student Coordination/Divit.jpg", description: "Focuses on system architecture and optimization." },
  //     { name: "Alvisha", role: "Member", image: "/Tesla_photos/Student Coordination/Alvisha.webp", description: "Works on backend database management." },
  //     { name: "Ananya", role: "Member", image: "/Tesla_photos/Student Coordination/Ananya.webp", description: "Supports frontend development and design." },
  //     { name: "Vaishnavi", role: "Member", image: "/Tesla_photos/Student Coordination/Vaishnavi.webp", description: "Helps with content creation and documentation." },
  //     { name: "Pranav Kashyap", role: "Member", image: "/Tesla_photos/Student Coordination/Pranav.webp", description: "Works on mobile app development." },
  //     { name: "Sinchana Sanjay", role: "Member", image: "/Tesla_photos/Student Coordination/Sinchana S.webp", description: "Assists in UI/UX design and testing." },
  //     { name: "Rohith", role: "Member", image: "/Tesla_photos/Default_pfp.webp", description: "Contributes to project deployment and monitoring." }
  //   ],
  // },

  {
    id: "art",
    name: "Art & Design Wing",
    members: [
      {
        name: "A S Darshan",
        role: "Art & Design Lead",
        image: "/Tesla_photos/Art & Design/Darshan.webp",
        description: "CSE - 3rd Year",
      },
      {
        name: "Shreyas Pathki",
        role: "Member",
        image: "/Tesla_photos/Art & Design/Shreyas.webp",
        description: "CSE - 4th Year",
      },
      {
        name: "Nishan C R",
        role: "Member",
        image: "/Tesla_photos/Art & Design/Nishan.webp",
        description: "EEE - 3rd Year",
      },
      {
        name: "Keerthana",
        role: "Member",
        image: "/Tesla_photos/Default_pfp.webp",
        description: "EEE - 3rd Year",
      },

      {
        name: "Poorvika K B",
        role: "Member",
        image: "/Tesla_photos/Art & Design/Poorvika.webp",
        description: "CSE - 3rd Year",
      },
      {
        name: "U L Rini Linnet",
        role: "Member",
        image: "/TeslaMembers26-27/ULRiniLinnet.jpeg",
        description: "ECE - 2rd Year",
      },
      {
        name: "Harshita Agrawal",
        role: "Member",
        image: "/TeslaMembers26-27/HarshitaAgrawal.JPG",
        description: "CSBS - 1st Year",
      },
      {
        name: "S K Gouthami",
        role: "Member",
        image: "/TeslaMembers26-27/Gouthami.jpeg",
        description: "ECE - 2nd Year",
      },
      {
        name: "Venugopal Rao",
        role: "Member",
        image: "/TeslaMembers26-27/VENUGOPALRAO.jpeg",
        description: "CSE - 1st Year",
      },
      {
        name: "Karthik S",
        role: "Member",
        image: "/TeslaMembers26-27/Karthik.jpeg",
        description: "CSE - 2nd Year",
      },
    ],
  },
  {
    id: "web",
    name: "Web Development Wing",
    members: [
      // { name: "Akshay Mirji", role: "Web Wing Lead", image: "/Tesla_photos/Web/Akshay.webp", description: "Leads marketing campaigns." },
      {
        name: "Sameer Godabole",
        role: "Member",
        image: "/Tesla_photos/Default_pfp.webp",
        description: "CSE - 4th Year",
      },
      {
        name: "Prakruthi Prasad",
        role: "Member",
        image: "/Tesla_photos/Web/Prakruthi.webp",
        description: "CSE - 3rd Year",
      },
      {
        name: "Mohammed Imad",
        role: "Member",
        image: "/Tesla_photos/Default_pfp.webp",
        description: "",
      },
      {
        name: "Nischay H R",
        role: "Member",
        image: "/Tesla_photos/Web/Nischay.webp",
        description: "CSE - 4th Year",
      },
      {
        name: "Punith Kumar R",
        role: "Member",
        image: "/TeslaMembers26-27/Punith.JPG",
        description: "CSE - 3rd Year",
      },
      {
        name: "Sujith",
        role: "Member",
        image: "/TeslaMembers26-27/Sujith.JPG",
        description: "CSE - 3rd Year",
      },
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
    teamSections.forEach((section) => {
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
      const threshold =
        mainNavbarHeight +
        (navbarRef.current ? navbarRef.current.offsetHeight : 0) +
        20;
      let foundSection = null;
      Object.keys(sectionRefs.current).forEach((id) => {
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
          const scrollContainer =
            navbarRef.current.querySelector(".overflow-x-auto");
          if (scrollContainer) {
            const containerWidth = scrollContainer.offsetWidth;
            const buttonLeft = menuButton.offsetLeft;
            const buttonWidth = menuButton.offsetWidth;
            scrollContainer.scrollTo({
              left: buttonLeft - containerWidth / 2 + buttonWidth / 2,
              behavior: "smooth",
            });
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuSticky, ignoreScrollHighlight, activeSection]);

  // Click handler for menu buttons
  const scrollToSection = (id) => {
    setActiveSection(id);
    setIgnoreScrollHighlight(true);

    const section = sectionRefs.current[id].current;
    if (section) {
      const secondaryNavHeight = navbarRef.current
        ? navbarRef.current.offsetHeight
        : 0;
      const totalOffset = mainNavbarHeight + secondaryNavHeight;
      const yPosition =
        section.getBoundingClientRect().top + window.pageYOffset - totalOffset;

      // Center the clicked menu item
      const menuButton = document.getElementById(`menu-${id}`);
      if (menuButton && navbarRef.current) {
        const scrollContainer =
          navbarRef.current.querySelector(".overflow-x-auto");
        if (scrollContainer) {
          const containerWidth = scrollContainer.offsetWidth;
          const buttonLeft = menuButton.offsetLeft;
          const buttonWidth = menuButton.offsetWidth;
          scrollContainer.scrollTo({
            left: buttonLeft - containerWidth / 2 + buttonWidth / 2,
            behavior: "smooth",
          });
        }
      }

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
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
        className={`${menuSticky ? "sticky z-20 bg-[var(--color-black)] shadow-md w-full left-0 right-0" : ""} transition-all duration-300`}
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
                  ${
                    activeSection === section.id
                      ? "bg-[var(--color-gold)] text-[var(--color-white)] font-bold"
                      : "text-[var(--color-white)] hover:bg-[var(--color-gray)] hover:text-cyan-500]"
                  }`}
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
                <div className="group relative w-72 overflow-hidden rounded-2xl border border-yellow-300 bg-black shadow-lg transition-all duration-300 hover:shadow-yellow-500">
                  {/* Image */}
                  <div className="h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt="Team Member"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Content */}
                  <div className="absolute bottom-0 z-10 w-full translate-y-10 p-5 text-center transition-all duration-300 group-hover:translate-y-0">
                    <h3 className="text-xl font-semibold text-yellow-400">
                      {member.name}
                    </h3>
                    <p className="text-sm mt-1 text-gray-300">{member.role}</p>

                    {/* Divider */}
                    <div className="mx-auto mt-3 mb-3 h-[2px] w-12 bg-yellow-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
