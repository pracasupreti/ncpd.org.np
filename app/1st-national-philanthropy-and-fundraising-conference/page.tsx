"use client";
import Image from 'next/image';
import LogoSection from '@/components/ui/logo';
import MapSection from '@/components/ui/map';
import AliyahProfile from '@/components/ui/ms.aliyah';
import Sponsor from '@/components/ui/sponser';
import React, { useState } from 'react';
import { ImRocket } from 'react-icons/im';
import SpeakerSection from '@/components/ui/speakers';
import PresentationList from '@/components/ui/presentationList';
import AreaPresentationList from '@/components/ui/areaPresentationList';

const National: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('Background');
    const [showAliyahBio, setShowAliyahBio] = useState(false);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Background':
                return (
                    <>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            The level of investment and collaboration from the development partners in Nepal has been gradually decreasing in the recent years. This scenario has been particularly felt after the course of reconstruction efforts in 2016-17 after the devastating earthquake that rattled the country in April and May 2015.</p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            One of the main reasons for resource crunch is the shifting of donors' priority from Nepal to other global issues like the refugee, migration, trafficking, combating terrorism, global warming etc. In addition, there is also hope among development partners that the current government will itself tackle the current development given the context of its stability. Consequently, the development cooperation partners are diverting their resources and attention to other countries especially in the conflict affected regions.</p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            However, Nepal still remains one of the poorest countries in South Asia and there are numerous issues to be resolved by civil society organizations in an aftermath of the decade-long arms conflict, devastating earthquake and new political structure which have high liquidity along with numerous other socio-economic issues that are unaddressed.</p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            But the current CSOs/NGOs functioning in different parts of Nepal are struggling to generate resources and hence sustain their mission. There is also a high competition for resources between CSOs in Nepal that has resulted in ceasing of the work after the end of funding. In this present context, there is a high need to empower CSOs as well as INGOs in the resource mobilization arena.</p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            With this in mind, The Nepal Center for Philanthropy and Development (NCPD) is pleased to present two-days conference on the topic of Fundraising. The conference is designed to provide knowledge, skills, and networks and enable participants to identify resources and opportunities, devise and implement resource mobilization strategies to bring along needed resources in order to sustain their noble mission. This conference will also shed light on the urgency to overcome the trust deficit and elevate the current image of the Nepalese CSOs which is a key to ensure resources and sustainability. Similarly, conference will also introduce with the national and international level prominent CSO actors, philanthropists, scholars, academia, fundraisers, resource mobilization experts, leaders and motivational speakers which will accelerate their nonprofit mission.</p>
                    </>
                );
            case 'Objective':
                return <p className="text-gray-700"><ol className='list-decimal'>
                    <li>To provide the knowledge on the importance and current global trend of philanthropy and fundraising among CSOs actors.</li>
                    <li>To create a platform where philanthropists, fundraisers, donors and CSO actors from Nepal and abroad network to create solid foundation of collaboration.</li>
                    <li>To introduce and aware on the existing opportunities of funding/resources for their CSOs.</li>
                    <li>To provide knowledge, tools and techniques of fundraising to CSOs in order to generate and diversify the source of fund to their organizations.</li>
                    <li>To identify the opportunities and challenges of promoting the philanthropy and fundraising in Nepal.</li>
                </ol></p>;
            case 'Areas/Topics':
                return (
                    <AreaPresentationList/>
                );
            case 'Schedule':
                return (
                    <div>
                        <Image
                            src="/speakers/Program Schedule_NCPD.png"
                            alt="Program Schedule"
                            height={500}
                            width={800}
                            className="mx-auto"
                        />
                    </div>
                );
            case 'Registration':
                return (
                    <div className="text-gray-700 space-y-2">
                        <p>The registration fee for the two days conference including VAT will be as follows: </p>
                        <p>INGOs 17,000/- NRS (Seventeen Thousand Only) per person - 40 Seats Only.</p>
                        <p>NGOs 10,000/- NRS (Ten Thousand Only) per person - 40 Seats Only.</p>
                        <p><span className='font-semibold'>Payment Via Bank:</span>
                            Bank: Nepal Investment Bank Ltd., Account: Nepal Center for Philanthropy & Development, Account No: 00401010264303</p>
                        <p><span className='font-semibold'>Payment Via eSewa:</span>
                            eSewa ID: 9842026513
                            <ul className='list-disc'>
                                <li>It includes stationary, training contents, breakfast, lunch, hi-tea during the two days of training.</li>
                                <li>The participants of the conference will also receive 5 credits hours credential of the Certified Campaign Manager Professional Fundraising Course of International Council of Non-Profit Management, South Korea.</li>
                                <li>Simply visit www.ncpd.org.np to register. You can visit our office or deposit the registration fee at our bank account. If you need any help kindly reach us at : 9803183411 and 9842026513 and Email us at <span className='font-semibold hover:text-green-200'>info@ncpd.org.np</span></li>
                                <li>Early Bird Discount: People and organization registering before 15 January will receive a 10% discount in the full registration fee.</li>
                            </ul></p>
                    </div>
                );
            case 'FAQ':
                return (
                    <div className="text-gray-700 mt-2 space-y-4">
                        <p>The National Fundraising Conference 2019 has something for every type of INGOs, CSOs/NGOs, philanthropists, fundraiser, development experts and mid-career professionals including students perusing social work.</p>
                        <p>The conference invites around 100 delegates including International Experts, Country Directors, Chief Executives, Directors, Managers, Head of fundraising/business development, and Marketing and Communications Departments and mid-career development professionals including students. </p>
                    </div>
                );
            case 'Video':
                return (<div className="p-4">
                    <h3 className="text-xl sm:text-xl font-semibold text-blue-500 mb-3 truncate" title="Message from Professor Bekay Ahn">
                        Message from Professor Bekay Ahn
                    </h3>
                    <div className="relative w-full h-0 pb-[56.25%] rounded-md overflow-hidden bg-gray-200 flex items-center justify-center">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/5BOq94N4pdU"
                            title="{video.title}"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>);
            case 'Download':
                return (
                <PresentationList/>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
            {/* Header */}
            <header className="py-6 pt-40">
                <div className="container mx-auto px-4 md:px-8 lg:px-24">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center text-black">
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
                        <h1 className="text-4xl font-bold text-gray-800 mb-2 self-start">
                            Events Details
                            <div className="w-16 h-1 bg-[#0d83b8] rounded-full mt-2"></div>
                        </h1>
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
                        <h1 className="text-4xl font-bold text-gray-800 mb-2 self-start">
                            Conference Description
                            <div className="w-16 h-1 bg-[#0d83b8] rounded-full mt-2"></div>
                        </h1>
                        <p className="text-gray-700 leading-relaxed mt-12">
                            One of the main reasons for resource crunch is the shifting of donors' priority from Nepal to other global issues like the refugee, migration, trafficking, combating terrorism, global warming etc. In addition, there is also hope among development partners that the current government will itself tackle the current development given the context of its stability. Consequently, the development cooperation partners are diverting their resources and attention to other countries especially in the conflict affected regions.
                        </p>
                    </div>
                </section>

                {/* Tabs Navigation */}
                <section className="bg-white rounded-lg shadow-md mb-8 p-2">
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
                    <h1 className="text-4xl font-bold text-gray-800 mb-8 mt-8 self-start">
                        Speakers
                        <div className="w-16 h-1 bg-[#0d83b8] rounded-full mt-2"></div>
                    </h1>
                    <SpeakerSection />
                </section>

                {/* Sponsors Section */}
                <section className="p-6 mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2 mt-2 self-start">
                        Sponsers
                        <div className="w-16 h-1 bg-[#0d83b8] rounded-full mt-2"></div>
                    </h1>
                    <Sponsor />
                </section>

                {/* Organizer Section */}
                <section className="p-6 mb-8 text-md">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2 mt-2 self-start">
                        Organizer
                        <div className="w-16 h-1 bg-[#0d83b8] rounded-full mt-2"></div>
                    </h1>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Nepal Center for Philanthropy and Development (NCPD) is a consulting entity that promotes the culture of philanthropy in Nepal as well as works towards creating high impact, integrity of CSOs. It enhances the talent, trust and treasure of philanthropies and civil society organizations of Nepal for the sustainability of resources and impact. NCPD is a trusted ambassador, partner and member of various global organizations including but not limited to Resource Alliance, UK, Asia Philanthropy Award, Korea, Korean Society of Philanthropy, International Council of Non Profit Management, Alliance for Good, Singapore and participating member of the globally reputed Certified Fund Raising Executive (CFRE).
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        The conference is an initiative of the Nepal Center for Philanthropy and Development (NCPD) in collaboration with national and international level profit and nonprofit organizations. It is registered in 2018 under Private Company Act of Nepal.
                    </p>
                    <div className='flex flex-row space-x-8'>
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
                        <div>
                            <p className='text-black font-semibold mt-4'>Organizing Committee Members</p>
                            <ul className="list-disc pl-6 mt-2 text-black">
                                <li>Mr Rewati Raman Dhakal, Founder and CEO, NCPD</li>
                                <li>Mr Bishal Rai, Director, NCPD</li>
                                <li>Mr Narottam Aryal, Head of Quality Assurance  </li>
                                <li>Mr Nirmal Bhandari, Head of Communication and Networking </li>
                                <li>Mr Uttam Dhakal, Head of Admin and Finance </li>
                                <li>Mr Hari Sapkota, Venue and Logistic Coordinator</li>
                                <li>Ms Oshin Maharjan, Volunteer Coordinator </li>
                                <Image
                                    src="/contact/cfre.jpg"
                                    alt="cfre"
                                    height={100}
                                    width={100}
                                />
                            </ul>
                        </div>
                    </div>
                </section>
                {/* Venue Section */}
                <section className="p-6 mb-8 text-md">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2 mt-2 self-start">
                        Venue
                        <div className="w-16 h-1 bg-[#0d83b8] rounded-full mt-2"></div>
                    </h1>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Hotel Greenwich, Bakhundol, Sanepa, Lalitpur, Nepal
                    </p>
                    <MapSection />
                </section>
                {/* Contact Section */}
                <section className="p-6 mb-8 text-md">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2 mt-2 self-start">
                        Contact
                        <div className="w-16 h-1 bg-[#0d83b8] rounded-full mt-2"></div>
                    </h1>
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
