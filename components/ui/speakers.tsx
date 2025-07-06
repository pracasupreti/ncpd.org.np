import React, { useState, useEffect, useRef } from 'react';

// Mock speaker data
const speakers = [
  {
    id: 1,
    name: 'MR Pramod Dhakal',
    title: 'Architect in mobilizing Diaspora Nepalese and leading international institutions',
    bio: 'Dr. Dhakal brings more than twenty-five years of outstanding professional experience in a spectrum of fields ranging from entrepreneurship, research and invention, teaching, organizational leadership, engineering, information and communication technologies, and management from Canada, Nepal and international arena. His experiences are drawn from well-known institutions like Tribhuvan University, University of Ottawa, Carleton University, University of Saskatchewan, Nepal Electricity Authority, IBM, Nortel Networks, Alcatel, EION, Canadian Space Agency, British Aerospace, Royal Canadian Mounted Police, Environment Canada, Nepal Electricity Authority, NRNA, and CFFN. He holds Ph.D. and MSc degrees from University of Saskatchewan, Canada, and Bachelor of Engineering with honors from Indian Institute of Technology, Roorkee, India.',
    image: '/speakers/PDhakal.jpg',
  },
  {
    id: 2,
    name: 'Prof. Bekay Ahn, Ph.D.',
    title: 'CFRE (Certified Fundraising Executive) and Professor of Philanthropy(HangYang University), President(International Council for Non-Profit Management, South Korea).',
    bio: 'Prof. Bekay Ahn has been working in the nonprofit sector for twenty-five years as an author, lecturer, teacher, speaker and fundraising consultant. He is the Founder & Principal of the International Council for Non-Profit Management (ICNPM) where he provides strategic counsel to not-for-profit and corporate clients, primarily in the areas of organizational development, team building, philanthropy, strategic planning, and not-for-profit management and board leadership. He has helped nonprofits raise hundreds of millions of dollars over the length of his career.',
    image: '/speakers/Bekay Ahn.jpg',
  },
  {
    id: 3,
    name: 'Mr. Kim Beum Yong',
    title: 'Secretary General of Council of Korean Community Foundation.',
    bio: 'Secretary General of Council of Korean Community Foundation.',
    image: '/speakers/Kim Beum Yong.jpg',
  },
  {
    id: 4,
    name: 'Mr. Kim Honggu',
    title: 'CEO (HongGu Planning, South Korea)',
    bio: 'Mr. Kim is the CEO of the Honggu Planning in South Korea. He is also associated with the Korea Funding Professional. Kim has profound experiences in strategy promotion and event-based fundraising. He has successfully conducted nearly 1,500 events.',
    image: '/speakers/Kim Honggu.jpg',
  },
  {
    id: 5,
    name: 'Mr Govinda Neupane',
    title: 'Country Director(IM Swedish Development Partners)',
    bio: 'Mr. Govinda Neupane is a Country Director of the IM Swedish Development Partner. He has more than 24 years of experience in the development cooperation of Nepal and South Asia. He has served in international organizations like Plan International, Britain Nepal Medical Trust, Dan Church Aid and IM Swedish Development Partner. Mr. Neupane has also closely worked with UNESCO and USAID, the European Union and other institutional development cooperation and foundations.',
    image: '/speakers/govind neupane.jpg',
  },
  {
    id: 6,
    name: 'Ms Reem Abdelhamid',
    title: 'Head of Global Philanthropy at UNHCR',
    bio: 'Reem is a graduate of the American University in Cairo (AUC) with a BA in Journalism & Mass Communication (minor in Psychology) and an MA in Journalism Research & Mass Communication.',
    image: '/speakers/Reem-Abdelhamid-Gazzaz.jpg',
  },
  {
    id: 7,
    name: 'Mr Durga Kumar Thapa',
    title: 'Elected Mayor(Beleka Municipality)',
    bio: 'Mr. Durga Kumar Thapa, Elected Mayor of the Beleka Municipality on the local resource mobilization and the allocation of state resources in Federal Nepal.',
    image: '/speakers/Durga-Kumar-Thapa.jpg',
  },
   {
    id: 8,
    name: 'Mr Narayan Adhikari',
    title: 'Co-founder and South Asia Representative for the Accountability Lab and an experienced advocate',
    bio: 'Mr. Narayan Adhikari is co-founder and South Asia Representative for the Accountability Lab and an experienced advocate and practitioner for positive social change. In his current position, Narayan has developed a number of innovative tools for accountability and open government, including a pioneering television show and movement called Integrity Idol; and the Mobile Citizen Helpdesks which have ensured citizen voices have been fed into plans for $4.4 billion of international spending after Nepal devastating earthquake.',
    image: '/speakers/Narayan Adhikari.jpg',
  },
   {
    id: 9,
    name: 'Mr Jeroninio Almeida (Jerry)',
    title: 'Missionary Entrepreneur, Bestselling Author, Management Consultant,Leadership Coach, Start-Up/Entrepreneur Mentor, Inspirational Orator, Passionate Fundraiser, Architect of global movements like RIGHT every Wrong, One Billion Hungry, Swachh Bharat Mission, REX, Karmaveer and The Joy of Giving.',
    bio: 'Jeroninio (www.jerrylearns2learn.com) is an inspirational orator / motivational speaker, storyteller, intrepid missionary entrepreneur, firebrand social crusader, Teacher, UN Advisor, internationally certified #LeadershipSubjectMatterExpert, Mentor, Coach, Trainer and an #InnovativeFundraiser. He is the author of Karma Kurry, the bestselling book series.',
    image: '/speakers/Jerry.jpg',
  },
];

const SpeakerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Function to go to the next speaker
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % speakers.length);
  };

  // Function to go to a specific speaker by index
  const goToSpeaker = (index: number) => {
    setCurrentIndex(index);
    resetAutoScroll(); 
  };

  // Function to reset the auto-scrolling timer
  const resetAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(goToNext, 5000);
  };

  // Effect for auto-scrolling
  useEffect(() => {
    resetAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const currentSpeaker = speakers[currentIndex];

  return (
    <div className="flex-col items-center p-4 font-inter">

      {/* Speaker Card */}
      <div className="w-full max-w-4xl p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10 transition-all duration-500 ease-in-out">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={currentSpeaker.image}
            alt={`Portrait of ${currentSpeaker.name}`}
            className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover shadow-md"
          />
        </div>

        {/* Details */}
        <div className="flex-grow text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
            {currentSpeaker.name}
          </h2>
          <p className="text-lg text-green-600 font-medium mb-4">
            {currentSpeaker.title}
          </p>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg line-clamp-5">
            {currentSpeaker.bio}
          </p>
          <button className="mt-4 text-green-600 hover:text-green-800 font-semibold flex items-center justify-center md:justify-start">
            Full Bio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-3 mt-8" role="tablist">
        {speakers.map((_, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={index === currentIndex}
            aria-label={`Go to speaker ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-green-500' : 'bg-gray-400 hover:bg-gray-500'
            }`}
            onClick={() => goToSpeaker(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SpeakerSection;
