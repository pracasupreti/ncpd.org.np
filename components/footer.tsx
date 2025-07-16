"use client";
import React from 'react';
import { Facebook, Twitter, Mail, Linkedin, Youtube, Phone, LocationEdit } from 'lucide-react';
import { FaWhatsapp, FaFacebookMessenger, FaArrowRight } from 'react-icons/fa';
import Link from "next/link"

export default function Footer() {
  return (
    <div className="relative">

      {/* Fixed Social Media Icons on Left */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-4">
        {/* WhatsApp */}
        <a
          href="https://www.facebook.com/dialog/send?link=https%3A%2F%2Fncpd.org.np%2F&app_id=291494419107518&redirect_uri=https%3A%2F%2Fwww.sharethis.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-200"
        >
          <FaWhatsapp className="w-6 h-6" />
        </a>

        {/* Messenger */}
        <a
          href="https://messenger.com/t/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-200"
        >
          <FaFacebookMessenger className="w-6 h-6" />
        </a>
      </div>


      {/* Footer Section */}
      <footer className="bg-slate-200 text-gray-700 lg:px-2 py-2 md:px-2 px-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* About NCPD */}
            <div className="md:col-span-1 pr-12">
              <h4 className="text-[2rem] font-bold text-gray-900 mb-4">About NCPD</h4>
              <p className="text-gray-600 leading-relaxed mt-4 mb-3 text-[16px]">
                NCPD is an organization dedicated in creating enabling environment and opportunities for capacity
                building, networking, and collaboration whereby philanthropy and civil society organizations will grow.
              </p>
              <div className="flex space-x-2">
                <a
                  href="https://www.facebook.com/nepalcenter4philanthropicdevelopment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:text-secondary"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://t.me/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:text-secondary"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://t.me/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:text-secondary"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC2cB5Rv3aLhKYdI3zngwtnw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:text-secondary"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className='text-[2rem] font-bold text-gray-900 mb-4'>Quick Links</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-1.5 hover:text-secondary group">
                  <FaArrowRight className="text-[12px] rotate-300 group-hover:translate-x-1 transition-transform duration-200" />
                  <Link href="/about" className="text-[16px] relative group">
                    About NCPD
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 origin-center transition-all duration-300"></span>
                  </Link>
                </div>

                <div className="flex items-center space-x-1.5 hover:text-secondary group">
                  <FaArrowRight className="text-[12px] rotate-300 group-hover:translate-x-1 transition-transform duration-200" />
                  <Link
                    href="/gallery"
                    className="text-[16px] relative group"
                  >
                    Gallery
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 origin-center transition-all duration-300"></span>
                  </Link>
                </div>
                 <div className="flex items-center space-x-1.5 hover:text-secondary group">
                  <FaArrowRight className="text-[12px] rotate-300 group-hover:translate-x-1 transition-transform duration-200" />
                 <Link href="/videos" className="text-[16px] relative group">
                    Videos
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 origin-center transition-all duration-300"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="md:col-span-1">
              <h4 className='text-[2rem] font-bold text-gray-900 mb-4'>Helpful Links</h4>
              <div className="space-y-2">
                 <div className="flex items-center space-x-1.5 hover:text-secondary group">
                  <FaArrowRight className="text-[12px] rotate-300 group-hover:translate-x-1 transition-transform duration-200" />
                 <Link href="/trainings" className="text-[16px] relative group">
                    Trainings
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 origin-center transition-all duration-300"></span>
                  </Link>
                </div>
                 <div className="flex items-center space-x-1.5 hover:text-secondary group">
                  <FaArrowRight className="text-[12px] rotate-300 group-hover:translate-x-1 transition-transform duration-200" />
                 <Link href="/conferences" className="text-[16px] relative group">
                    Conferences
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 origin-center transition-all duration-300"></span>
                  </Link>
                </div>
                 <div className="flex items-center space-x-1.5 hover:text-secondary group">
                  <FaArrowRight className="text-[12px] rotate-300 group-hover:translate-x-1 transition-transform duration-200" />
                 <Link href="/news" className="text-[16px] relative group">
                    News
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-secondary scale-x-0 group-hover:scale-x-100 origin-center transition-all duration-300"></span>
                  </Link>
                </div>
                
              </div>
            </div>

            {/* Contact */}
            <div className="md:col-span-1">
              <h4 className='text-[2rem] font-bold text-gray-900 mb-4'>Contact Details</h4>
              <div className="space-y-2">
                <div className="flex items-start space-x-1.5 hover:text-secondary">
                  <LocationEdit className='mt-1' />
                  <span className="hover:text-secondary text-[16px]">Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center space-x-1.5 hover:text-secondary">
                  <Phone />
                  <a href="tel:+9779842026513" className="hover:text-secondary text-[16px]">
                    +977 9842026513
                  </a>
                </div>
                <div className="flex items-center space-x-1.5 hover:text-secondary">
                  <Phone />
                  <a href="tel:+9779842044215" className="hover:text-secondary text-[16px]">
                    +977 9842044215
                  </a>
                </div>
                <div className="flex items-center space-x-1.5 hover:text-secondary">
                  <Mail />
                  <a
                    href="mailto:info@ncpd.org.np"
                    className="hover:text-secondary text-[16px]"
                  >
                    info@ncpd.org.np
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-slate-200 text-black text-center my-2">
          <p className="text-[16px]">
            © 2025 <span>Nepal Center for Philanthropy & Development</span> || All Rights
            Reserved.
          </p>
        </div>
      </footer>


      {/* Scroll to Top Button */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button> */}
    </div>
  );
}
