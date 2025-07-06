"use client";
import LogoSection from '@/components/ui/logo';
import MapSection from '@/components/ui/map';
import AliyahProfile from '@/components/ui/ms.aliyah';
import Sponsor from '@/components/ui/sponser';
import React, { useState } from 'react';

const National: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('Background');
    const [showAliyahBio, setShowAliyahBio] = useState(false);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Background':
                return (
                    <>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            The share of foreign aid in the national budget was 22% in FY 2017/18, compared to nearly 29% in FY 2016/17. It shows that Nepal now faces the challenge of mobilizing more resources for, inter alia, graduating to the developing country status by 2022, achieving Sustainable Development Goals by 2030, and fulfilling the universally recognized economic, cultural and social rights that are now enshrined as fundamental rights in the Constitution.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            I/NGOs are playing crucial roles in Nepal, however financial distress and vulnerability are common for many I/NGO leaders, with more organizations closing as a result of these financial constraints after 2017.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            I/NGOs working in Nepal had also learned a critical lesson about the importance of revenue diversification during the global recession in early 2000 and early 2010. Organizations that were dependent on just one or two funding sources had to fight for their survival. The lesson is age-old: Don’t put all of your funding eggs in one basket.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            As resources become more limited and demand increases, the topics of how to raise and grow funding sources and sustain a program are of utmost importance. Therefore, I/NGOs have to take concrete and deliberate efforts to diversify revenue streams to mitigate the risk of losing any single source of funding. Considering these challenges, Nepal Center for Philanthropy and Development (NCPD) has designed a one day training "Keys to Fundraising Success and Capacity Building" for the executive level human resource of I/NGOs in Nepal.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            The participants of the training will be able to explore and tap new funding opportunities for sustainability. It offers international experts with good track records, tailored training content considering the need of I/NGOs in Nepal, and a co-learning and effective networking environment with experts and leaders from the development fraternity.
                        </p>
                    </>
                );
            case 'Objective':
                return <p className="text-gray-700">To enable I/NGO executives to diversify funding opportunities for their organizations.</p>;
            case 'Areas/Topics':
                return (
                    <ul className="list-disc pl-6 text-gray-700">
                        <li>Donor management - how do you retain existing donors and identify new ones?</li>
                        <li>Storytelling. How do you showcase your INGO/NGO?</li>
                        <li>Small and Big Fundraising Ideas.</li>
                        <li>Using PR and Social Media to Brand your INGO/NGO. How do donors react and what do they want?</li>
                    </ul>
                );
            case 'Schedule':
                return <p className="text-gray-700">Schedule</p>;
            case 'Registration':
                return (
                    <div className="text-gray-700 space-y-2">
                        <p>Please visit our website www.ncpd.org.np or email us at info@ncpd.org.np by 23 May, 2019. The seats will be secured on a first come first served basis.</p>
                        <p>INGO 8500/- and NGOs 6500/- (Including all taxes). It covers training materials, lunch, and an internationally recognized Certified Fund Raising Executive certificate.</p>
                    </div>
                );
            case 'FAQ':
                return (
                    <div className="text-gray-700 mt-2 space-y-4">
                        <p>Persons working in I/NGOs at an executive level and interested in fundraising and resource mobilization would be assets for effective mutual learning, sharing, and translating it into organizational fundraising work.</p>
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
                        1st National Philanthropy and Fundraising Conference
                    </h1>
                </div>
            </header>

            <main className="container mx-auto px-4 md:px-8 lg:px-24 py-12">
                {/* Hero Section */}
                <section className="relative bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="w-full h-64 sm:h-80 md:h-[28rem] lg:h-[30rem] xl:h-[30rem] relative">
                        <img
                            src="/home/ncpd-first-national-funraising-conference.png"
                            alt="national philanthropy and fundraising conference"
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
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <span className="font-medium w-32 sm:w-24">Start Date:</span>
                                <span>27 Feb, 2019</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <span className="font-medium w-32 sm:w-24">End Date:</span>
                                <span>28 Feb, 2019</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <span className="font-medium w-32 sm:w-24">Venue:</span>
                                <span>Bhanimandal, Lalitpur, Nepal</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center">
                                <span className="font-medium w-32 sm:w-24">Location:</span>
                                <span>Bhanimandal, Lalitpur, Nepal</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-start">
                                <span className="font-medium w-32 sm:w-24">Seats:</span>
                                <div>
                                    <p>INGOs - 40 Seats || NGOs - 40 Seats Only.</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-start space-x-8">
                                <span className="font-medium w-36 sm:w-24">Fees:</span>
                                <div>
                                    <p>INGOs 17,000/- NRS (Seventeen Thousand Only) per person || NGOs 10,000/- NRS (Ten Thousand Only) per person</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conference Description */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4 border-b border-green-500 pb-2">Conference Description</h3>
                        <p className="text-gray-700 leading-relaxed mt-12">
                            One of the main reasons for resource crunch is the shifting of donors' priority from Nepal to other global issues like the refugee, migration, trafficking, combating terrorism, global warming etc. In addition, there is also hope among development partners that the current government will itself tackle the current development given the context of its stability. Consequently, the development cooperation partners are diverting their resources and attention to other countries especially in the conflict affected regions.
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
                                type="button"
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
                                src="/training/Aliyah Karen.jpg"
                                alt="Ms. Aliyah Karen"
                                className="rounded-lg shadow-md w-32 h-32 object-cover"
                            />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-blue-500">Ms. Aliyah Karen</h4>
                            <p className="text-blue-500 text-sm mb-2">Fundraising Trainer, and Speaker Malaysia</p>
                            <p className="text-gray-700 leading-relaxed">
                                Aliyah Karen is Ph.D from International Royal Academy of United Nations and MBA in Human Resources Management from Nottingham Trent UK. She is heading the Medicare Charitable Foundation from ...
                            </p>
                            <button
                                className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors duration-200"
                                onClick={() => setShowAliyahBio(true)}
                                type="button"
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
                                    type="button"
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
                    <h3 className="text-3xl text-black font-bold mb-6 border-b pb-3">Sponsors</h3>
                    <Sponsor />
                </section>

                {/* Organizer Section */}
                <section className="p-6 mb-8 text-md">
                    <h3 className="text-3xl text-black font-bold mb-6 border-b pb-3">Organizer</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Nepal Center for Philanthropy and Development (NCPD) is a consulting entity that promotes the culture of philanthropy in Nepal as well as works towards creating high impact, integrity of CSOs. It enhances the talent, trust and treasure of philanthropies and civil society organizations of Nepal for the sustainability of resources and impact. NCPD is a trusted ambassador, partner and member of various global organizations including but not limited to Resource Alliance, UK, Asia Philanthropy Award, Korea, Korean Society of Philanthropy, International Council of Non Profit Management, Alliance for Good, Singapore and participating member of the globally reputed Certified Fund Raising Executive (CFRE).
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        The conference is an initiative of the Nepal Center for Philanthropy and Development (NCPD) in collaboration with national and international level profit and nonprofit organizations. It is registered in 2018 under Private Company Act of Nepal.
                    </p>
                    <div>
                        <p className='text-black font-semibold mt-4'>Advisors</p>
                            <ul className="list-disc pl-6 mt-2 text-black">
                                <li>Mr. Jagdish Lohani, Executive Director, Youth Vision</li>
                                <li>Mr. Shobhakar Budhathoki, President at Peace and Justice Center</li>
                                <li>Mr. Govinda Neupane, Country Representative, IM Swedish Development Partners </li>
                                <li>Mr. Bekay Ahn, Professor of Philanthropy, HangYang University</li>
                                <li>Mr. Ken Wyman, Professor, Humber College, Ontario</li>
                                <li>Mrs. Usha Menon, Usha Management Consultancy, Singapore</li>
                                <li>Mr. Robert Russell, Head of Fundraising at Scottish Bible Society</li>
                                <li>Mr. Ashutosh Tiwari, Founder and Managing Director of SAFAL Partners and former Chairperson of Association of International NGOs(AIN)</li>
                                <li>Mr. Narayan Gyawali, Director of Lutheran World Relief</li>
                                <li>Ms Srijana Karki, Regional Director of South Asia at World Neighbors </li>
                                <li>Mr. Prakash Pokharel, President BICODEC, Kathmandu</li>
                                <li>Mr. Milan Mukhia, Former Country Director, Cordaid Nepal</li>
                            </ul>
                    </div>
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
                        Mr. Rewati Raman Dhakal
                    </p>
                    <p className="text-black text-xl leading-relaxed">
                        Founder and CEO of NCPD
                    </p>
                    <p className="text-gray-700">9842026513, 9803183411</p>
                    <p>
                        <a
                            href="mailto:info@ncpd.org.np"
                            className="text-blue-600 hover:underline"
                        >
                            info@ncpd.org.np
                        </a>
                    </p>
                    <p>
                        <a
                            href="mailto:rewati@ncpd.org.np"
                            className="text-blue-600 hover:underline"
                        >
                            rewati@ncpd.org.np
                        </a>
                    </p>
                    <p className="text-black text-xl leading-relaxed mb-4">
                        Mr. Bishal Rai
                    </p>
                    <p className="text-black text-xl leading-relaxed">
                        Director of NCPD
                    </p>
                    <p className="text-gray-700">9842044215</p>
                    <p>
                        <a
                            href="mailto:bishal@ncpd.org.np"
                            className="text-blue-600 hover:underline"
                        >
                            bishal@ncpd.org.np
                        </a>
                    </p>
                    <p>
                        <a href="https://www.ncpd.org.np" className="text-blue-600 hover:underline">
                            www.ncpd.org.np
                        </a>
                    </p>
                </section>
                <LogoSection />
            </main>
        </div>
    );
};

export default National;
