"use client";
import LogoSection from '@/components/ui/logo';
import MapSection from '@/components/ui/map';
import AliyahProfile from '@/components/ui/ms.aliyah';
import React, { useState } from 'react';

// Main App Component
const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Background');
  const [showAliyahBio, setShowAliyahBio] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Background':
        return (
          <><p className="text-gray-700 leading-relaxed mt-4">The share of foreign aid in the national budget was 22% in FY 2017/18, compared to nearly 29% in FY 2016/17. It shows that, Nepal now faces the challenge of mobilizing more resources for, inter alia, graduating to the developing country status by 2022, achieving Sustainable Development Goals by 2030, and fulfilling the universally recognized economic, cultural and social rights that are now enshrined as fundamental rights in the Constitution .
            </p><p className="text-gray-700 leading-relaxed mt-4">I/NGOs are playing crucial roles in Nepal, however financial distress and vulnerability are common for many I/NGOs leaders, with more organizations closing as a result of these financial constraints after 2017.
                </p><p className="text-gray-700 leading-relaxed mt-4">I/NGOs working in Nepal had also learned a critical lesson about the importance of revenue diversification during the global recession in early 2000 and early 2010. Organizations that were dependent on just one or two funding sources had to fight for their survival. The lesson is age-old: Don’t put all of your funding eggs in one basket.
                </p><p className="text-gray-700 leading-relaxed mt-4">As resources becoming more limited and demand increases, the topics of how to raise and grow funding sources and sustain a program are of utmost importance. Therefore, I/NGOs have to take concrete and deliberate efforts to diversified revenue stream to mitigate the risk of losing any single source of funding. Considering these challenges, Nepal Center for philanthropy and Development(NCPD) has designed a one day training the "Keys to Fundraising Success and Capacity Building" for the executive level human resource or I/NGOs in Nepal.
                </p><p className="text-gray-700 leading-relaxed mt-4">The participants of the training will able to explore and tab new funding opportunities for the sustainability. It offers international experts with good track records, tailored training content considering the need of I/NGOs in Nepal and  co learning and effective networking environment with experts and leaders from development fraternity.


                </p></>
        );
      case 'Objective':
        return <p className="text-gray-700">To enable  I/NGOs executives for diversifying funding opportunities for their organization. </p>;
      case 'Areas/Topics':
        return (
          <ul className="list-disc pl-6 text-gray-700">
            <li>Donor management - how do you retain existing donors and identify new ones?.  </li>
            <li>Story telling. How do you showcase your INGO/ NGO? </li>
            <li>Small and Big Fundraising Ideas.</li>
            <li>Using PR and Social Media to Brand your INGO / NGO. How donors react and what do they want? </li>
          </ul>
        );
      case 'Schedule':
        return <p className="text-gray-700">Schedule</p>;
      case 'Registration':
        return (
          <div className="text-gray-700 space-y-2">
            <p>Please visit our website www.ncpd.org.np or email us at info@ncpd.org.np  by 23 May, 2019. The seats will be secured on first come first served basis. </p>
          <p>INGO 8500/- and NGOs 6500/-(Including all taxes). It covers training materials, lunch, and internationally recognized Certified Fund Raising Executive certificate .</p>
          </div>
        );
      case 'FAQ':
        return (
          <div className="text-gray-700 mt-2 space-y-4">
            <p>Persons working in I/NGOs at an executive level and interested in fundraising and resource mobilization would be an assets for effective mutual learning, sharing and translating it organizational fundraising work. </p>
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
            Keys to Fundraising Success and Capacity Building
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-8 lg:px-24 py-12">
        {/* Hero Section */}
        <section className="relative bg-white rounded-lg overflow-hidden mb-8">
          <div className="w-full h-64 sm:h-80 md:h-[28rem] lg:h-[30rem] xl:h-[30rem] relative">
            <img
              src="/training/key to fundraising.png"
              alt="Keys to Fundraising Success and Capacity Building"
              className="absolute inset-0 w-full h-full object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </section>

        {/* Event Details and Conference Description */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Event Details */}
          <div className="lg:col-span-1 bg-white p-6 rounded-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-2 self-start">
                            Event Details
                            <div className="w-16 h-1 bg-green-500 rounded-full mt-2"></div>
                        </h1>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="font-medium w-24">Start Date:</span>
                <span>6 Oct, 2019</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium w-24">End Date:</span>
                <span>10 June, 2019</span>
              </div>
              <div className="flex space-x-6 items-center">
                <span className="font-medium w-24">Venue:</span>
                <span>Hotel Greenwich, Bakhundol, Sanepa, Lalitpur, Nepal</span>
              </div>
              <div className="flex space-x-6 items-center">
                <span className="font-medium w-24">Location:</span>
                <span>Hotel Greenwich, Bakhundol, Sanepa, Lalitpur, Nepal</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium w-24">Seats:</span>
                <div>
                  <p>30 seats (50% for NGOs)</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="font-medium w-24">Fees:</span>
                <div>
                  <p>INGO 8500/- and NGOs 6500/-(Including all taxes).</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conference Description */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg">
            <h1 className="text-4xl font-bold text-gray-800 mb-2 self-start">
                            Conference Description
                            <div className="w-16 h-1 bg-green-500 rounded-full mt-2"></div>
                        </h1>
            <p className="text-gray-700 leading-relaxed mt-12">
              The share of foreign aid in the national budget was 22% in FY 2017/18, compared to nearly 29% in FY 2016/17. It shows that, Nepal now faces the challenge of mobilizing more resources for, inter alia, graduating to the developing country status by 2022, achieving Sustainable Development Goals by 2030, and fulfilling the universally recognized economic, cultural and social rights that are now enshrined as fundamental rights in the constitution.
              </p>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="bg-white rounded-lg mb-8">
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
          <h1 className="text-4xl font-bold text-gray-800 mb-2 self-start">
                             Speakers
                            <div className="w-16 h-1 bg-green-500 rounded-full mt-2"></div>
                        </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="flex-shrink-0">
              <img
                src="/training/Aliyah Karen.jpg"
                alt="Ms. Aliyah Karen"
                className="rounded-lg w-32 h-32 object-cover"
              />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-blue-500">Ms. Aliyah Karen</h4>
              <p className="text-blue-500 text-sm mb-2">Fundraising Trainer, and Speaker Malaysia</p>
              <p className="text-gray-700 leading-relaxed">
                Aliyah Karen is Ph.D from International Royal Academy of United Nations and MBA in Human Resources Management from Nottingham Trent UK.  She is heading the Medicare Charitable Foundation from ...
                </p>
              <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors duration-200"
                onClick={() => setShowAliyahBio(true)}
              >
                Full Bio
              </button>
            </div>
          </div>
          {showAliyahBio && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-transparent flex items-center justify-center">
                <button
                  className="absolute top-12 right-4 bg-blue-500 text-white rounded-full px-3 py-1 text-xs font-bold hover:bg-blue-900 z-10"
                  onClick={() => setShowAliyahBio(false)}
                >
                  Exit
                </button>
                <div className="w-full">
                  <AliyahProfile />
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Sponsors Section */}
        <section className="p-6 mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 self-start">
                            Sponsors
                            <div className="w-16 h-1 bg-green-500 rounded-full mt-2"></div>
                        </h1>
          <div className="text-gray-500 italic">
            {/* Placeholder for sponsors */}
            No sponsors listed yet.
          </div>
        </section>

        {/* Organizer Section */}
        <section className="p-6 mb-8 text-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 self-start">
                            Organizer
                            <div className="w-16 h-1 bg-green-500 rounded-full mt-2"></div>
                        </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nepal Center for Philanthropy and Development (NCPD) is a organization dedicated to promote the capacity of nonprofit organizations, philanthropies, and private sectors so they could enhance their impact and sustainability. NCPD is also a trusted ambassador and strategic partners of Asia Philanthropy Award, Korean Society of Philanthropy, International Council of Non Profit Management and participating members of the Certified Fund Raising Executive International.  
            </p>
          <p className="text-gray-700 leading-relaxed">
            NCPD has also successfully organized 1st National Philanthropy and fundraising Conference from 27-28, February, 2019.  </p>
        </section>
        {/* Venue Section */}
        <section className="p-6 mb-8 text-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 self-start">
                            Venue
                            <div className="w-16 h-1 bg-green-500 rounded-full mt-2"></div>
                        </h1>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hotel Greenwich, Bakhundol, Sanepa, Lalitpur, Nepal
          </p>
          <MapSection />
        </section>
        {/* Contact Section */}
        <section className="p-6 mb-8 text-md">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 self-start">
                            Contact
                            <div className="w-16 h-1 bg-green-500 rounded-full mt-2"></div>
                        </h1>
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
