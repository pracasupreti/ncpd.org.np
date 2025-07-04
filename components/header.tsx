"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null); // State to manage active dropdown on hover

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust scroll threshold as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle dropdown hover (for desktop)
  const handleMouseEnter = (menuName: string) => {
    setActiveDropdown(menuName);
  };

  // Function to handle dropdown mouse leave (for desktop)
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Common styling for hover effect
  const hoverStyle = "hover:underline hover:underline-offset-4 hover:decoration-green-500 hover:decoration-2";
  const activeLinkStyle = "underline underline-offset-4 decoration-green-500 decoration-2";

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About",
      dropdown: [
        { name: "About NCPD", href: "/about" },
        { name: "Core values of NCPD", href: "/core-values" },
        { name: "Our Team", href: "/team" },
      ],
    },
    {
      name: "Services",
      dropdown: [
        { name: "Empowering Philanthropy", href: "/empowering-philanthropy" },
        { name: "Dialogue for Philanthropy Infrastructure", href: "/dialogue-for-philanthropy-infrastructure" },
        { name: "Strengthening Networks", href: "/strengthening-networks" },
      ],
    },
    {
      name: "Events",
      dropdown: [
        { name: "Trainings", href: "/trainings" },
        { name: "Conferences", href: "/conferences" },
      ],
    },
    { name: "News", href: "/news" },
    { name: "Gallery", href: "/gallery" },
    { name: "Videos", href: "/videos" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 shadow-md ${isScrolled ? 'h-16 bg-white shadow-md' : 'h-32 bg-white'}`}>
      <div className={`flex items-center space-x-36 h-full px-4 md:px-8 lg:px-32 ${isScrolled ? 'py-0' : 'py-0'}`}>
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Logo"
          className={`transition-all duration-300 ${isScrolled ? 'h-12 w-auto' : 'h-28 w-38'}`}
          height={94}
          width={128}
          sizes="(max-width: 768px) 48px, 128px"
          priority
        />

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-6">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="relative group text-black"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.name)} // Only apply hover for dropdowns
                onMouseLeave={() => item.dropdown && handleMouseLeave()} // Only apply hover for dropdowns
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`font-bold focus:outline-none flex items-center ${hoverStyle} ${activeDropdown === item.name ? activeLinkStyle : ''}`}
                    >
                      {item.name}
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10">
                        {item.dropdown.map((dropdownItem) => (
                          <li key={dropdownItem.name}>
                            <a
                              href={dropdownItem.href}
                              className={`block px-4 py-2 text-sm text-black ${hoverStyle}`}
                            >
                              {dropdownItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href={item.href} className={`font-bold ${hoverStyle}`}>
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation (Conditional Rendering - still click-based for mobile) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-2">
          <ul className="flex flex-col items-center space-y-2">
            {navItems.map((item) => (
              <li key={item.name} className="w-full text-center text-black">
                {item.dropdown ? (
                  <>
                    {/* For mobile, keep click-based toggle for dropdowns */}
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      className={`font-bold w-full py-2 focus:outline-none flex items-center justify-center ${hoverStyle} ${activeDropdown === item.name ? activeLinkStyle : ''}`}
                    >
                      {item.name}
                      <svg
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <ul className="bg-gray-100 py-1">
                        {item.dropdown.map((dropdownItem) => (
                          <li key={dropdownItem.name}>
                            <a
                              href={dropdownItem.href}
                              className={`block px-4 py-2 text-sm text-black ${hoverStyle}`}
                            >
                              {dropdownItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href={item.href} className={`font-bold block py-2 ${hoverStyle}`}>
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
