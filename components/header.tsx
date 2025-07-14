"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

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
    <>
      {/* Fixed Header Wrapper */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Contact Bar + Navbar */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "h-14 pt-0 bg-white/5 backdrop-blur-xs shadow-md"
              : "h-20 pt-0 bg-white shadow-md"
          } flex flex-col`}
        >
          {/* Contact Bar */}
          <div
            className={`bg-gradient-to-r from-blue-600 to-red-600 text-xs text-white transition-all duration-300 overflow-hidden leading-tight ${
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
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Navbar */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-12 flex items-center h-full relative">
            {/* Logo */}
            <a href="/" className="flex items-center absolute left-4 lg:left-8 top-1/2 -translate-y-1/2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={isScrolled ? 60 : 85}
                height={isScrolled ? 25 : 35}
                priority
                quality={100}
                className="h-auto w-auto transition-all duration-300"
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
                        <button className="relative font-semibold group text-black">
                          {item.name}
                          <svg className="ml-1 w-3 h-3 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                          <span className="absolute left-0 bottom-[-2px] h-0.5 bg-green-500 w-0 group-hover:w-full transition-all duration-300"></span>
                        </button>
                        <ul className="absolute left-0 top-full w-56 bg-white border-t-4 border-green-500 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none transition-all duration-200 z-30">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.name}>
                              <a
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                              >
                                {subItem.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <a href={item.href} className="relative font-semibold group text-black">
                        {item.name}
                        <span className="absolute left-0 bottom-[-2px] h-0.5 bg-green-500 w-0 group-hover:w-full transition-all duration-300"></span>
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
                      <ul className="border-t-4 border-green-500 rounded-md bg-gray-50 mt-1">
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.name}>
                            <a
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 transition"
                            >
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
