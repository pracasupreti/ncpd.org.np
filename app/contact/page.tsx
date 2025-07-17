"use client";
import React, { useState } from "react";
import LogoSection from "@/components/ui/logo";
import { PhoneIcon, MailIcon, MapPinIcon, ArrowRight } from "lucide-react";
import MapSection from "@/components/ui/map";

const ContactPage: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleEmailDraft = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const subject = "Newsletter Inquiry";
    const body = `Hello,\n\nI would like to subscribe to your newsletter.\n\nBest regards,\n${email}`;

    const mailtoUrl = `mailto:info@ncpd.org.np?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="pt-28 pb-10 px-4 sm:px-6 lg:px-12 bg-white border-b">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
            Contact Us
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            We’d love to hear from you. Reach out using any method below.
          </p>
        </div>
      </header>

      {/* Contact Info */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
              Nepal Center for Philanthropy & Development
            </h2>
            <div className="space-y-5 text-base sm:text-lg">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="text-blue-600" />
                <a
                  href="tel:+9779842026513"
                  className="text-blue-600 hover:underline"
                >
                  +977 9842026513
                </a>
              </div>
              <div className="flex items-start gap-3">
                <PhoneIcon className="text-blue-600" />
                <a
                  href="tel:+9779842044215"
                  className="text-blue-600 hover:underline"
                >
                  +977 9842044215
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MailIcon className="text-blue-600" />
                <a
                  href="mailto:info@ncpd.org.np"
                  className="text-blue-600 hover:underline"
                >
                  info@ncpd.org.np
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Enter your email and we’ll contact you with updates.
            </p>
            <div className="relative max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleEmailDraft}
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition"
                title="Send Email"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="rounded-4xl overflow-hidden">
          <MapSection />
        </div>
      </main>

      {/* Partner Logos */}
      <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-12 border-t">
        <LogoSection />
      </div>
    </div>
  );
};

export default ContactPage;
