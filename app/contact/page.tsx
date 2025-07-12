"use client";
import React from "react";
import LogoSection from "@/components/ui/logo";
import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="pt-32 pb-10 px-4 sm:px-6 lg:px-12 bg-white border-b">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
            Contact
          </h1>
        </div>
      </header>

      {/* Main Contact Section */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
          Nepal Center for Philanthropy & Development
        </h2>

        <div className="space-y-5 text-base sm:text-lg">
          {/* Location */}
          <div className="flex items-start gap-3">
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
