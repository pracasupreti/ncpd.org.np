"use client";
import React from 'react';
import { Facebook, Twitter, Mail, Linkedin, Youtube, MapPin, Phone, ArrowUp } from 'lucide-react';
import { FaWhatsapp, FaFacebookMessenger, FaShare } from 'react-icons/fa';


export default function Footer() {
  return (
    <div className="relative">
      
      {/* Fixed Social Media Icons on Left */}
      <div className="fixed left-0 top-82 transform -translate-y-1/2 z-50 hidden md:flex flex-col space-y-0">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-blue-600 text-white p-3 rounded-tr-md flex items-center overflow-hidden transition-all duration-200 w-12 hover:w-32 hover:rounded-r-md"
        >
          <span className="flex items-center">
        <Facebook className="w-5 h-5" />
        <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Facebook</span>
          </span>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-black text-white p-3 flex items-center overflow-hidden transition-all duration-200 w-12 hover:w-32 hover:rounded-r-md"
        >
          <span className="flex items-center">
        <Twitter className="w-5 h-5" />
        <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Twitter</span>
          </span>
        </a>
        <a
          href="mailto:info@example.com"
          className="group bg-gray-500 text-white p-3 flex items-center overflow-hidden transition-all duration-200 w-12 hover:w-32 hover:rounded-r-md"
        >
          <span className="flex items-center">
        <Mail className="w-5 h-5" />
        <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Email</span>
          </span>
        </a>
        <a
          href="https://share.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-green-400 text-white p-3 flex items-center overflow-hidden transition-all duration-200 w-12 hover:w-32 hover:rounded-r-md"
        >
          <span className="flex items-center">
        <FaShare className="w-5 h-5" />
        <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Share</span>
          </span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-blue-700 text-white p-3 flex items-center overflow-hidden transition-all duration-200 w-12 hover:w-32 hover:rounded-r-md"
        >
          <span className="flex items-center">
        <Linkedin className="w-5 h-5" />
        <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">LinkedIn</span>
          </span>
        </a>
        <a
          href="https://messenger.com/t/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-blue-500 text-white p-3 flex items-center overflow-hidden transition-all duration-200 w-12 hover:w-32 hover:rounded-r-md"
        >
          <span className="flex items-center">
        <FaFacebookMessenger className="w-5 h-5" />
        <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">Messenger</span>
          </span>
        </a>
        <a
          href="https://t.me/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-green-600 text-white p-3 rounded-br-md flex items-center overflow-hidden transition-all duration-200 w-12 hover:w-32 hover:rounded-r-md"
        >
          <span className="flex items-center">
        <FaWhatsapp className="w-5 h-5" />
        <span className="ml-3 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">WhatsApp</span>
          </span>
        </a>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-200 text-black pt-10 pb-6 px-4 md:px-8 lg:px-30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About NCPD Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">About NCPD</h3>
            <p className="text-base text-gray-700 leading-relaxed mb-4 py-4">
              NCPD is an organization dedicated in creating enabling environment and opportunities 
              for capacity building, networking,
              and collaboration whereby philanthropy and civil society organizations will grow.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/ncpd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/ncpd" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/company/ncpd" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/ncpd" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition-colors duration-200">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column 1 */}
          <div className='mt-18'>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="flex items-center text-base hover:text-green-600 transition-colors duration-200">
                  <span className="mr-2 text-blue-600 font-bold">&gt;</span> About NCPD
                </a>
              </li>
              <li>
                <a href="/about/core-values" className="flex items-center text-base hover:text-green-600 transition-colors duration-200">
                  <span className="mr-2 text-blue-600 font-bold">&gt;</span> Core Values of NCPD
                </a>
              </li>
              <li>
                <a href="/about/team" className="flex items-center text-base hover:text-green-600 transition-colors duration-200">
                  <span className="mr-2 text-blue-600 font-bold">&gt;</span> Our Team
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links Column 2 */}
          <div className='mt-18'>
            <ul className="space-y-2">
              <li>
                <a href="/services/trainings" className="flex items-center text-base hover:text-green-600 transition-colors duration-200">
                  <span className="mr-2 text-blue-600 font-bold">&gt;</span> Trainings
                </a>
              </li>
              <li>
                <a href="/services/conferences" className="flex items-center text-base hover:text-green-600 transition-colors duration-200">
                  <span className="mr-2 text-blue-600 font-bold">&gt;</span> Conferences
                </a>
              </li>
              <li>
                <a href="/news" className="flex items-center text-base hover:text-green-600 transition-colors duration-200">
                  <span className="mr-2 text-blue-600 font-bold">&gt;</span> News
                </a>
              </li>
              <li>
                <a href="/gallery" className="flex items-center text-base hover:text-green-600 transition-colors duration-200">
                  <span className="mr-2 text-blue-600 font-bold">&gt;</span> Gallery
                </a>
              </li>
              <li>
                <a href="/video" className="flex items-center text-base hover:text-green-600 transition-colors duration-200">
                  <span className="mr-2 text-blue-600 font-bold">&gt;</span> Videos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className='mt-18'>
            <ul className="space-y-2">
              <li className="flex items-start text-base">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-gray-600 flex-shrink-0" /> {/* Using MapPin from lucide-react */}
                <span>Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center text-base">
                <Phone className="w-4 h-4 mr-2 text-gray-600" /> {/* Using Phone from lucide-react */}
                <a href="tel:+9779842026513" className="text-blue-700 hover:text-blue-500 transition-colors duration-200">+977 9842026513</a>
              </li>
              <li className="flex items-center text-base">
                <Phone className="w-4 h-4 mr-2 text-gray-600" /> {/* Using Phone from lucide-react */}
                <a href="tel:+9779842044215" className="text-blue-700 hover:text-blue-500 transition-colors duration-200">+977 9842044215</a>
              </li>
              <li className="flex items-center text-base">
                <Mail className="w-4 h-4 mr-2 text-gray-600" /> {/* Using Mail from lucide-react */}
                <a href="mailto:info@ncpd.org.np" className="text-blue-700 hover:text-blue-500 transition-colors duration-200">info@ncpd.org.np</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-base text-black">
          © 2025 Nepal Center for Philanthropy & Development || All Rights Reserved.
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
}
