import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "/TESLA-Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Teams", path: "/teams" },
    { name: "Contact", path: "#footer" }, // Scroll to footer
  ];

  const handleNavClick = (name, path) => {
    if (name === "Contact") {
      // Scroll to footer
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to other pages
      navigate(path);
    }
    setMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed left-1/2 transform -translate-x-1/2 w-[100%] max-w-[100%] bg-white/20 backdrop-blur-3xl shadow-xl p-3 h-16 z-50 flex justify-between items-center">
      <Link to="/" className="flex items-center space-x-3">
        <img src={logo} alt="TESLA-SJCE Logo" className="h-10 sm:h-12" />
        <span className="text-white text-xl sm:text-2xl font-bold hidden lg:block">TESLA-SJCE</span>
      </Link>
      {/* Desktop Nav (hidden below 792px) */}
      <ul className="hidden lg:flex space-x-6">
        {navItems.map(({ name, path }) => (
          <li key={path} className="relative group">
            <button
              onClick={() => handleNavClick(name, path)}
              className="text-white text-lg font-medium px-4 py-2 transition-all duration-300 relative cursor-pointer"
              style={{
                textShadow: `
                  2px 2px 8px rgba(0, 0, 0, 0.9), 
                   -2px -2px 8px rgba(0, 0, 0, 0.9)
                `,
              }}
            > 
              {name}
              <span
                className={`absolute left-1/2 bottom-0 h-[3px] bg-gradient-to-r from-yellow-400 to-yellow-600 rounded transition-all duration-300 transform translate-x-[-50%] ${pathname === path ? "scale-x-100" : "group-hover:scale-x-100 scale-x-0"
                  }`}
                style={{ width: "90%" }}
              ></span>
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button (visible below 792px) */}
      <button
        ref={buttonRef}
        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 z-50 relative"
        onClick={() => {
          setMenuOpen((prev) => !prev);
        }}
      >
        <div
          className={`w-8 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
        ></div>
        <div
          className={`w-8 h-1 bg-white rounded transition-all duration-300 my-1 ${menuOpen ? "opacity-0" : ""
            }`}
        ></div>
        <div
          className={`w-8 h-1 bg-white rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
        ></div>
      </button>

      {/* Mobile Menu (visible below 792px) */}
      <div
        ref={menuRef}
        className={`fixed top-[72px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1200px] bg-black/90 backdrop-blur-lg rounded-2xl p-4 shadow-lg transition-all duration-300 ease-in-out ${menuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col items-center space-y-6">
          {navItems.map(({ name, path }) => (
            <li key={path} className="relative group w-full text-center">
              <button
                onClick={() => handleNavClick(name, path)} // Close menu when a link is clicked
                className="block w-full text-white text-xl font-semibold py-3 transition-all duration-300"
              >
                {name}
                <span
                  className={`absolute left-1/2 bottom-0 h-[3px] bg-gradient-to-r from-yellow-400 to-yellow-600 rounded transition-all duration-300 transform translate-x-[-50%] ${pathname === path ? "scale-x-100" : "group-hover:scale-x-100 scale-x-0"
                    }`}
                  style={{ width: "90%" }}
                ></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
