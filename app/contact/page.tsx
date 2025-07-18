"use client"
import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { PhoneIcon, MailIcon, MapPinIcon, ArrowRight } from "lucide-react"
import LogoSection from "@/components/ui/logo"
import MapSection from "@/components/ui/map"

const ContactPage: React.FC = () => {
  const [email, setEmail] = useState("")

  const handleEmailDraft = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.")
      return
    }
    const subject = "Newsletter Inquiry"
    const body = `Hello,\n\nI would like to subscribe to your newsletter.\n\nBest regards,\n${email}`
    const mailtoUrl = `mailto:info@ncpd.org.np?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white overflow-hidden mt-12">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
            Get In <span className="text-white">Touch</span>
          </h1>
          <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out using any method below and we'll respond promptly.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-12">
            {/* Newsletter Section */}
            <div className="bg-white p-8 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Stay up-to-date with our latest updates and news.
              </p>
              <div className="relative max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 pr-12 rounded-lg bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleEmailDraft}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-primary text-white rounded-full hover:bg-secondary transition"
                  title="Subscribe"
                >
                  <ArrowRight className="w-5 h-5 rotate-300 hover:rotate-none" />
                </button>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white p-8 rounded-2xl border border-blue-100 space-y-8">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Nepal Center for</h2>
                  <p className="text-lg font-semibold text-primary">Philanthropy & Development</p>
                </div>
              </div>

              {/* Info Blocks */}
              <div className="space-y-4">
                <div className="flex gap-4 items-start bg-blue-50 p-4 rounded-xl hover:bg-blue-100">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-full">
                    <MapPinIcon className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-700">Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-blue-50 p-4 rounded-xl hover:bg-blue-100">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-full">
                    <PhoneIcon className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-700">
                      <a href="tel:+9779842026513">+977 9842026513</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="tel:+9779842044215">+977 9842044215</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start bg-blue-50 p-4 rounded-xl hover:bg-blue-100">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary rounded-full">
                    <MailIcon className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-700">
                      <a href="mailto:info@ncpd.org.np">info@ncpd.org.np</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Larger Map */}
          <div className="bg-white p-6 rounded-3xl border border-blue-100 transition-all">
  <div className="text-center mb-8">
    <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-2">Visit Us</h1>
    <p className="text-gray-600 text-base sm:text-sm">
      Our office is located in the heart of Kathmandu, Nepal. We'd love to welcome you in person!
    </p>
  </div>

  <div className="h-[500px] w-full rounded-4xl overflow-hidden">
    <MapSection />
  </div>
</div>

        </div>
      </main>

      {/* Logos */}
        <LogoSection />
    </div>
  )
}

export default ContactPage
