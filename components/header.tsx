"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
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
    <>
      {/* Fixed Header Wrapper */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Contact Bar + Navbar */}
        <div className="bg-white shadow-md transition-all duration-300">
          {/* Contact Bar */}
          <div
            className={`bg-[#0ea5e9] text-xs text-white transition-all duration-300 overflow-hidden leading-tight ${
              isScrolled ? "max-h-0 opacity-0" : "max-h-14 opacity-100"
            }`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-3 flex justify-between items-center min-h-full">
              {/* Contact Info - Left Side */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <span>📞</span>
                  <span>+977 9842026513</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>📞</span>
                  <span>+977 9842044215</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>✉️</span>
                  <span>info@ncpd.org.np</span>
                </div>
              </div>

              {/* Social Media Icons - Right Side */}
              <div className="flex items-center space-x-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity text-white">
                  <FaTwitter size={16} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity text-white">
                  <FaFacebookF size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity text-white">
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Navbar */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex items-center h-[54px] relative">
            {/* Logo */}
            <a href="/" className="flex items-center absolute left-4 lg:left-8 top-1/2 -translate-y-1/2">
              <Image
                src="/logo.png"
                alt="Logo"
                priority
                quality={100}
                width={65} // you can keep or remove this now
                height={65} // keep or remove this now
                className="w-[45px] h-[35px] transition-all duration-300"
              />
            </a>

            {/* Mobile Toggle */}
            <div className="lg:hidden absolute right-4 top-1/2 -translate-y-1/2">
              <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
                <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:block mx-auto">
              <ul className="flex space-x-6 items-center font-medium text-sm text-black">
                {navItems.map((item) => (
                  <li key={item.name} className="relative group">
                    {item.dropdown ? (
                      <>
                        <button className="relative font-semibold group text-black hover:text-blue-600 transition-colors duration-300">
                          {item.name}
                          <svg className="ml-1 w-3 h-3 inline-block transform transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <ul className="absolute left-0 top-full w-56 bg-white shadow-lg rounded-md overflow-hidden opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-all duration-200 z-30">
                          {item.dropdown.map((subItem, index) => (
                            <li
                              key={subItem.name}
                              className="relative"
                            >
                              <a
                                href={subItem.href}
                                className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-100 w-full 
                                first:rounded-t-md last:rounded-b-md"
                              >
                                {subItem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <a href={item.href} className="relative font-semibold group text-black hover:text-blue-600 transition-colors duration-300">
                        {item.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`lg:hidden overflow-hidden bg-white transition-all text-black duration-300 ${
            mobileOpen ? "max-h-[1000px] py-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col space-y-2 px-6 text-sm">
            {navItems.map((item) => (
              <li key={item.name}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveMobileDropdown(activeMobileDropdown === item.name ? null : item.name)
                      }
                      className="w-full flex justify-between items-center font-semibold text-left"
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          activeMobileDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeMobileDropdown === item.name && (
                      <ul className="bg-gray-50 mt-1">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.name} className="relative overflow-hidden">
                            <a
                              href={subItem.href}
                              className="group relative block px-4 py-3 text-sm text-gray-800 hover:text-blue-600 transition-all duration-300 hover:translate-x-2"
                            >
                              {/* Horizontal line that extends from left on hover - mobile version */}
                              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-blue-500 w-3 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                              {subItem.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <a href={item.href} className="block font-semibold py-1">
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
