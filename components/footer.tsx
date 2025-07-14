"use client";
import React from 'react';
import { Facebook, Twitter, Mail, Linkedin, ArrowUp, Youtube, ArrowUpLeft } from 'lucide-react';
import { FaWhatsapp, FaFacebookMessenger, FaShare, FaPhone, FaMailchimp, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { FaLocationArrow } from "react-icons/fa"

export default function Footer() {
  return (
    <div className="relative">

      {/* Fixed Social Media Icons on Left */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-4">
        {/* WhatsApp */}
        <a
          href="https://t.me/yourpage"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* About NCPD */}
            <div className="md:col-span-1">
              <h4 className="text-[2rem] font-bold text-gray-900 mb-4">About NCPD</h4>
              <p className="text-gray-600 leading-relaxed mt-4 mb-3 text-[16px]">
                NCPD is an organization dedicated in creating enabling environment and opportunities for capacity
                building, networking, and collaboration whereby philanthropy and civil society organizations will grow.
              </p>
              <div className="flex space-x-2">
                <a
                  href="https://t.me/yourpage"
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
                  href="https://t.me/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center hover:text-secondary"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
</div>
              {/* Quick Links */}
              <div className="md:col-span-1 mt-3">
                <h4>&nbsp;</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 hover:text-secondary">
                    <FaArrowRight className="text-[12px] rotate-300" />
                    <Link href="/about" className="text-[16px]">
                      About NCPD
                    </Link>
                  </div>
                  <div className="flex items-center space-x-1.5 hover:text-secondary">
                    <FaArrowRight  className="text-[12px] rotate-300" />
                    <Link
                      href="/core-values"
                      className="text-[16px]"
                    >
                      Core Values of NCPD
                    </Link>
                  </div>
                  <div className="flex items-center space-x-1.5 hover:text-secondary">
                    <FaArrowRight  className="text-[12px] rotate-300" />
                    <Link href="/team" className="text-[16px]">
                      Our Team
                    </Link>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="md:col-span-1 mt-3 text-[16px]">
                <h4>&nbsp;</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-1.5 hover:text-secondary">
                    <FaArrowRight  className="text-[12px] rotate-300" />
                    <Link href="/trainings" className="text-[16px]">
                      Trainings
                    </Link>
                  </div>
                  <div className="flex items-center space-x-1.5 hover:text-secondary">
                    <FaArrowRight  className="text-[12px] rotate-300" />
                    <Link href="/conferences" className="text-[16px]">
                      Conferences
                    </Link>
                  </div>
                  <div className="flex items-center space-x-1.5 hover:text-secondary">
                    <FaArrowRight  className="text-[12px] rotate-300" />
                    <Link href="/news" className="text-[16px]">
                      News
                    </Link>
                  </div>
                  <div className="flex items-center space-x-1.5 hover:text-secondary">
                    <FaArrowRight  className="text-[12px] rotate-300" />
                    <Link href="/gallery" className="text-[16px]">
                      Gallery
                    </Link>
                  </div>
                  <div className="flex items-center space-x-1.5 hover:text-secondary">
                    <FaArrowRight  className="text-[12px] rotate-300" />
                    <Link href="/videos" className="text-[16px]">
                      Videos
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="md:col-span-1 mt-3 text-[16px]">
                <h4>&nbsp;</h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-1.5">
                    <span className="text-black mt-1"><FaLocationArrow /></span>
                    <span className="hover:text-secondary text-[16px]">Kathmandu, Nepal</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-black"><FaPhone/></span>
                    <a href="tel:+9779842026513" className="hover:text-secondary text-[16px]">
                      +977 9842026513
                    </a>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-black"><FaPhone/></span>
                    <a href="tel:+9779842044215" className="hover:text-secondary text-[16px]">
                      +977 9842044215
                    </a>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-black"><Mail/></span>
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
