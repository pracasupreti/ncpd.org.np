"use client";
import React from "react";
import Link from "next/link";
import { MapPinIcon, PhoneIcon, MailIcon, ArrowRight } from "lucide-react";
import LogoSection from "@/components/ui/logo";

const ContactPage: React.FC = () => {
  const handleEmailDraft = () => {
    const email = "info@ncpd.org.np";
    const subject = "Newsletter Inquiry";
    const body = "Hello,\n\nI would like to subscribe to your newsletter.\n\nBest regards,";
    
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 sm:px-8 lg:px-20 pt-40 pb-5">
      {/* Page Header with Centered Title and Breadcrumb */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
          Contact
        </h1>
        <nav className="text-sm text-blue-600">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-1"> / </span>
          <span className="text-blue-600">Contact</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32">
        {/* Left Section – Contact Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 text-sm sm:text-base">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Nepal Center for Philanthropy & Development
            </h2>

            {/* Location */}
            <div className="flex items-start gap-3">
              <MapPinIcon className="h-5 w-5 text-blue-600 mt-1" />
              <span>Kathmandu, Nepal</span>
            </div>

            {/* Phone 1 */}
            <div className="flex items-start gap-3">
              <PhoneIcon className="h-5 w-5 text-blue-600 mt-1" />
              <a href="tel:+9779842026513" className="text-black hover:underline">
                +977 9842026513
              </a>
            </div>

            {/* Phone 2 */}
            <div className="flex items-start gap-3">
              <PhoneIcon className="h-5 w-5 text-blue-600 mt-1" />
              <a href="tel:+9779842044215" className="text-black hover:underline">
                +977 9842044215
              </a>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <MailIcon className="h-5 w-5 text-blue-600 mt-1" />
              <a href="mailto:info@ncpd.org.np" className="text-black hover:underline">
                info@ncpd.org.np
              </a>
            </div>
          </div>
        </div>

        {/* Right Section – Newsletter */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-6">
            Subscribe to<br />our organization
          </h2>

          <div className="flex items-center w-full max-w-lg">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 pr-12 rounded-lg bg-gray-100 text-sm focus:outline-none"
              />
              <button
                type="button"
                onClick={handleEmailDraft}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors"
                title="Send email to info@ncpd.org.np"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
          </div>
        </div>
      </div>

      {/* Logo Section with reduced margin */}
      <div className="mt-6">
        <LogoSection />
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-xs text-gray-500">
        ©2024 NCPD — Nepal Center for Philanthropy & Development
      </div>
    </div>
  );
};

export default ContactPage;
