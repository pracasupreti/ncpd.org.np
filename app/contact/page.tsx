"use client";
import LogoSection from "@/components/ui/logo";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased flex flex-col">
      {/* Header */}
      <header className="py-3 pt-36 px-6 md:px-12 bg-white">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-center mb-2 md:mb-0 text-black">
              Contact
            </h1>
             <p className="text-base text-black px-20 py-2">
              <a href="/" className="text-blue-600 hover:underline">
               Home
              </a>{" "}
               / Contact
            </p>
          </div>
     </header>

      {/* Main Contact Section */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
          Nepal Center for Philanthropy & Development
        </h2>

        <div className="space-y-5 text-base sm:text-lg">
          {/* Location */}
          <div className="flex items-center gap-3">
            <MapPinIcon className="h-6 w-6 text-blue-600 flex-shrink-0" />
            <span>Kathmandu, Nepal</span>
          </div>

          {/* Phone 1 */}
          <div className="flex items-start gap-3">
            <PhoneIcon />
            <a
              href="tel:+9779842026513"
              className="text-blue-600 hover:underline"
            >
              +977 9842026513
            </a>
          </div>

          {/* Phone 2 */}
          <div className="flex items-start gap-3">
            <PhoneIcon />
            <a
              href="tel:+9779842044215"
              className="text-blue-600 hover:underline"
            >
              +977 9842044215
            </a>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <MailIcon />
            <a
              href="mailto:info@ncpd.org.np"
              className="text-blue-600 hover:underline"
            >
              info@ncpd.org.np
            </a>
          </div>
        </div>

      </main>
      
      {/* Partner Logos */}
      <LogoSection />
    </div>
  );
};

export default ContactPage;