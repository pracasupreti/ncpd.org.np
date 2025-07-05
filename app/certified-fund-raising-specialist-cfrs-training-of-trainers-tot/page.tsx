"use client";
import LogoSection from '@/components/ui/logo';
import MapSection from '@/components/ui/map';
import React, { useState } from 'react';

// Main App Component
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Background');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Background':
        return (
          <p className="text-gray-700 leading-relaxed">
            Certificate Fund Raising Specialist (CFRS) Training of Trainers (ToT) is an intensive and internationally recognized professional fundraising course. It provides you the international as well as tailored knowledge, perspectives, tools and techniques and broadens the scope for a splendid fundraising career in the nonprofit world. It also enables you to raise fund for your organization in a competitive fundraising environment.
          </p>
        );
      case 'Objective':
        return <p className="text-gray-700">To produce competent and professional fundraisers and trainers.</p>;
      case 'Areas/Topics':
        return (
          <ul className="list-disc pl-6 text-gray-700">
            <li>Introduction and importance of philanthropy?</li>
            <li>Fundraising management; visioning and fundraising plan</li>
            <li>Current and prospective donor research</li>
            <li>The case statement for fundraising</li>
            <li>Securing fundraising gift </li>
            <li>Building and sustaining a relationship with donors </li>
            <li>Capital fundraising</li>
            <li>Fundraising ethics and accountability </li>
          </ul>
        );
      case 'Schedule':
        return <p className="text-gray-700">Schedule</p>;
      case 'Registration':
        return (
          <div className="text-gray-700 space-y-2">
            <div className="flex items-center">
              <span className="font-medium w-24 text-blue-500">Course Fee: </span>
              <span>NRS 14500/-(Including all taxes). Receive 20% early bird discount by registering before 21st June 2019.  </span>
            </div>
            <div className="flex items-center">
              <span className="font-medium w-50 text-blue-500">Deadline for Registration: </span>
              <span>28th June 2019  </span>
            </div>
          </div>
        );
      case 'FAQ':
        return (
          <div className="text-gray-700 mt-2 space-y-4">
            <div>
              <span className="font-medium space-x-4 text-blue-500">Eligible Participants:   </span>
              Individuals working and interested in fundraising. Participants require good command in writing and spoken English language.
            </div>
            <div>
              <span className="font-medium text-blue-500">Certification:  </span>
              Participants will receive internationally recognized certification from International Council of Non-Profit Management (ICNPM).
            </div>
            <div>
              <span className="font-medium w-50 text-blue-500">You will benefit from this CFRS ToT if you: </span>
              <ul className="list-disc pl-6">
                <li>Want to achieve fundraising success and enlarge your donor base.  </li>
                <li>Want to broaden professional scope as a freelancer fundraiser and instructor. </li>
                <li>Are non-profit employees and/or interested to start and advance your career in fundraising.</li>
                <li>Are a start-up organization setting up your donor programs and communications?  </li>
              </ul>
            </div>
            <div>
              <span className="font-medium w-50 text-blue-500">Training Days/Hours: </span>
              5 Days (40 Hours)
            </div>
          </div>
        );
      case 'Video':
        return <p className="text-gray-700">Video</p>;
      case 'Download':
        return <p className="text-gray-700">Download</p>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">

      {/* Header */}
      <header className="py-6 pt-40">
        <div className="container mx-auto px-4 md:px-8 lg:px-24">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-black">
            Certified Fund Raising Specialist (CFRS) Training of Trainers (ToT)
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 lg:px-24 py-12">
        {/* Hero Section */}
        <section className="relative bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="w-full h-64 sm:h-80 md:h-[28rem] lg:h-[30rem] xl:h-[30rem] relative">
            <img
              src="/training/latest.jpeg"
              alt="Certified Fund Raising Specialist Training of Trainers"
              className="absolute inset-0 w-full h-full object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </section>

        {/* Event Details and Conference Description */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Event Details */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Event Details</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="font-medium w-24">Start Date:</span>
                <span>7 Jan, 2019</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium w-24">End Date:</span>
                <span>10 July, 2019</span>
              </div>
              <div className="flex space-x-4 items-center">
                <span className="font-medium w-24">Venue:</span>
                <span>Hotel Greenwich, Bakhundol, Sanepa, Lalitpur, Nepal</span>
              </div>
              <div className="flex space-x-4 items-center">
                <span className="font-medium w-24">Location:</span>
                <span>Hotel Greenwich, Bakhundol, Sanepa, Lalitpur, Nepal</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium w-24">Seats:</span>
                <div>
                  <p>20</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="font-medium w-24">Fees:</span>
                <div>
                  <p>NRS 14500/-(Including all taxes ).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conference Description */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">Conference Description</h3>
            <p className="text-gray-700 leading-relaxed mt-12">
              Certificate Fund Raising Specialist (CFRS) Training of Trainers (ToT) is an intensive and internationally recognized professional fundraising course. It provides you the international as well as tailored knowledge, perspectives, tools and techniques and broadens the scope for a splendid fundraising career in the nonprofit world. It also enables you to raise fund for your organization in a competitive fundraising environment.
            </p>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="bg-white rounded-lg shadow-md mb-8">
          <div className="flex flex-wrap border-b border-gray-200">
            {['Background', 'Objective', 'Areas/Topics', 'Schedule', 'Registration', 'FAQ', 'Video', 'Download'].map((tab) => (
              <button
                key={tab}
                className={`py-3 px-6 text-sm font-medium rounded-tl-lg rounded-tr-lg focus:outline-none transition-colors duration-200
                  ${activeTab === tab
                    ? 'border-b-2 border-blue-600 text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-6">
            {renderTabContent()}
          </div>
        </section>

        {/* Speakers Section */}
        <section className="p-6 mb-8">
          <h3 className="text-2xl font-bold mb-6 border-b pb-3">Speakers</h3>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="flex-shrink-0">
              <img
                src="/training/Bekay Ahn.jpg"
                alt="Mr. Bekay Ahn"
                className="rounded-lg shadow-md w-32 h-32 object-cover"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-blue-500">Mr. Bekay Ahn</h4>
              <p className="text-blue-500 text-sm mb-2">CFRE(Certified Fund Raising Executive)</p>
              <p className="text-gray-700 leading-relaxed">
                BekayAhn has been working in the nonprofit sector for twenty-five years as an author, lecturer, teacher, speaker and fundraising consultant.
              </p>
              <p className="text-gray-700 leading-relaxed mt-2">
                He is the Founder & Principal of the Interna...
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors duration-200">
                Full Bio
              </button>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="p-6 mb-8">
          <h3 className="text-3xl text-black font-bold mb-6 border-b pb-3">Sponsors</h3>
          <div className="text-gray-500 italic">
            {/* Placeholder for sponsors */}
            No sponsors listed yet.
          </div>
        </section>

        {/* Organizer Section */}
        <section className="p-6 mb-8 text-md">
          <h3 className="text-3xl text-black font-bold mb-6 border-b pb-3">Organizer</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nepal Center for Philanthropy and Development (NCPD) is an organization dedicated to promoting the capacity of nonprofit organizations, philanthropies, and private sectors so they could enhance their impact and sustainability. NCPD is also a trusted ambassador and strategic partners of Asia Philanthropy Award, Korean Society of Philanthropy, International Council of Non-Profit Management and participating members of the Certified Fund Raising Executive International.  
          </p>
          <p className="text-gray-700 leading-relaxed">
            NCPD has also successfully organized 1st National Philanthropy and fundraising Conference from 27-28, February 2019.
          </p>
        </section>
        {/* Venue Section */}
        <section className="p-6 mb-8 text-md">
          <h3 className="text-3xl text-black font-bold mb-6 border-b pb-3">Venue</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hotel Greenwich, Bakhundol, Sanepa, Lalitpur, Nepal
          </p>
          <MapSection />
        </section>
        {/* Contact Section */}
        <section className="p-6 mb-8 text-md">
          <h3 className="text-3xl text-black font-bold mb-6 border-b pb-3">Contact</h3>
          <p className="text-black text-xl leading-relaxed mb-4">
           Mr. Rewati Raman Dhakal</p>
          <p className="text-black text-xl leading-relaxed">
            Founder and CEO of NCPD</p>
            <p className='text-gray-700'>9842026513, 9803183411</p>
            <p><a
              href="mailto:info@ncpd.org.np"
              className="text-blue-600 hover:underline"
            >
              info@ncpd.org.np
            </a></p>
            <p><a
              href="mailto:rewati@ncpd.org.np"
              className="text-blue-600 hover:underline"
            >
              rewati@ncpd.org.np
            </a></p>
            <p className="text-black text-xl leading-relaxed mb-4">
           Mr. Bishal Rai</p>
          <p className="text-black text-xl leading-relaxed">
            Director of NCPD
</p>
            <p className='text-gray-700'>9842044215</p>
            <p><a
              href="mailto:bishal@ncpd.org.np"
              className="text-blue-600 hover:underline"
            >
              bishal@ncpd.org.np
            </a></p>
            <p><a href="https://www.ncpd.org.np" className="text-blue-600 hover:underline">
              www.ncpd.org.np
            </a></p>
        </section>
        <LogoSection />
      </main>
    </div>
  );
};

export default App;
