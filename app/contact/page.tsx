"use client";
import React from 'react';
import LogoSection from '@/components/ui/logo';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="py-4 pt-40 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4 md:mb-0">Contact</h1>
          <p className="text-base text-black px-20 py-2">
            Home / Contact
          </p>
        </div>
      </header>

      {/* Main Contact Section */}
      <main className="container mx-auto px-6 md:px-70 py-8">
        <h2 className="text-2xl font-semibold mb-6">Nepal Center for Philanthropy & Development</h2>

        <div className="space-y-3">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m11.314 0A9.952 9.952 0 0112 21c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8c0 2.21-.89 4.21-2.343 5.657z"
              />
            </svg>
            <span>Kathmandu, Nepal</span>
          </div>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 9.25a1 1 0 01-1.054 1.348L7.433 9.406C6.732 9.09 6 9.535 6 10.372v1.737c0 1.253.518 2.477 1.442 3.399l2.25 2.25c.922.922 2.146 1.44 3.399 1.442h1.737c.837 0 1.282-.732.966-1.433l-1.19-2.013a1 1 0 011.348-1.054l4.204 1.432a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V5z"
              />
            </svg>
            <a href="tel:+9779842026513" className="text-blue-600 hover:underline">
              +977 9842026513
            </a>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 9.25a1 1 0 01-1.054 1.348L7.433 9.406C6.732 9.09 6 9.535 6 10.372v1.737c0 1.253.518 2.477 1.442 3.399l2.25 2.25c.922.922 2.146 1.44 3.399 1.442h1.737c.837 0 1.282-.732.966-1.433l-1.19-2.013a1 1 0 011.348-1.054l4.204 1.432a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V5z"
              />
            </svg>
            <a href="tel:+9779842044215" className="text-blue-600 hover:underline">
              +977 9842044215
            </a>
          </div>

          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4m0-7a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H7a2 2 0 01-2-2V5z"
              />
            </svg>
            <a href="mailto:info@ncpd.org.np" className="text-blue-600 hover:underline">
              info@ncpd.org.np
            </a>
          </div>
        </div>
      </main>

      {/* Partner Logos Section */}
     <LogoSection />
    </div>
  );
};

export default ContactPage;