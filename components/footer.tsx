"use client";
import React from 'react';
import { Facebook, Twitter, Mail, Linkedin, ArrowUp } from 'lucide-react';
import { FaWhatsapp, FaFacebookMessenger, FaShare } from 'react-icons/fa';
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import { FaLocationArrow } from "react-icons/fa"

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
      <footer className="bg-slate-200 text-gray-700 px-24 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* About NCPD */}
          <div className="md:col-span-1">
            <h4 className="text-[1.5rem] font-[500] text-gray-900 mb-4">About NCPD</h4>
            <p className="text-gray-600 leading-relaxed mt-4 mb-3 text-[16px]">
              NCPD is an organization dedicated in creating enabling environment and opportunities for capacity
              building, networking, and collaboration whereby philanthropy and civil society organizations will grow.
            </p>
            <div className="flex space-x-2">
              <Link
                href="https://www.facebook.com/nepalcenter4philanthropicdevelopment"
                target="_blank"
                className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="#"
                target="_blank"
                className="w-9 h-9 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link
                href="#"
                target="_blank"
                className="w-9 h-9 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/channel/UC2cB5Rv3aLhKYdI3zngwtnw"
                target="_blank"
                className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 mt-3">
            <h4>&nbsp;</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-1.5">
                <IoIosArrowForward className="text-blue-600 text-[16px] flex-shrink-0" />
                <Link href="/about" className="text-black hover:text-blue-800 transition-colors text-[16px]">
                  About NCPD
                </Link>
              </div>
              <div className="flex items-center space-x-1.5">
                <IoIosArrowForward className="text-blue-600 text-[16px] flex-shrink-0" />
                <Link
                  href="/core-values"
                  className="text-black hover:text-blue-800 transition-colors text-[16px]"
                >
                  Core Values of NCPD
                </Link>
              </div>
              <div className="flex items-center space-x-1.5">
                <IoIosArrowForward className="text-blue-600 text-[16px] flex-shrink-0" />
                <Link href="/team" className="text-black hover:text-blue-800 transition-colors text-[16px]">
                  Our Team
                </Link>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="md:col-span-1 mt-3 text-[16px]">
            <h4>&nbsp;</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-1.5">
                <IoIosArrowForward className="text-blue-600 text-[16px] flex-shrink-0" />
                <Link href="/trainings" className="text-black hover:text-blue-800 transition-colors text-[16px]">
                  Trainings
                </Link>
              </div>
              <div className="flex items-center space-x-1.5">
                <IoIosArrowForward className="text-blue-600 text-[16px] flex-shrink-0" />
                <Link href="/conferences" className="text-black hover:text-blue-800 transition-colors text-[16px]">
                  Conferences
                </Link>
              </div>
              <div className="flex items-center space-x-1.5">
                <IoIosArrowForward className="text-blue-600 text-[16px] flex-shrink-0" />
                <Link href="/news" className="text-black hover:text-blue-800 transition-colors text-[16px]">
                  News
                </Link>
              </div>
              <div className="flex items-center space-x-1.5">
                <IoIosArrowForward className="text-blue-600 text-[16px] flex-shrink-0" />
                <Link href="/gallery" className="text-black hover:text-blue-800 transition-colors text-[16px]">
                  Gallery
                </Link>
              </div>
              <div className="flex items-center space-x-1.5">
                <IoIosArrowForward className="text-blue-600 text-[16px] flex-shrink-0" />
                <Link href="/videos" className="text-black hover:text-blue-800 transition-colors text-[16px]">
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
                <span className="text-black text-[16px]">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-gray-500">📞</span>
                <a href="tel:+9779842026513" className="text-blue-600 hover:text-blue-800 transition-colors text-[16px]">
                  +977 9842026513
                </a>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-black">📞</span>
                <a href="tel:+9779842044215" className="text-blue-600 hover:text-blue-800 transition-colors text-[16px]">
                  +977 9842044215
                </a>
              </div>
              <div className="flex items-center space-x-1.5">
                <span className="text-black">✉️</span>
                <a
                  href="mailto:info@ncpd.org.np"
                  className="text-blue-600 hover:text-blue-800 transition-colors text-[16px]"
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
