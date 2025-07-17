// page.tsx
import React from 'react';
import Image from 'next/image';
import LogoSection from '@/components/ui/logo';
import { MdCheckCircle } from 'react-icons/md';

// Define a type for the training data for better type safety
interface Training {
  id: string;
  imageSrc: string;
  title: string;
  date: string;
  description?: string;
  seats:string;
  fees: string;
  list? :string[];
}

const trainings: Training[] = [
  {
    id: '/certified-fund-raising-specialist-cfrs-training-of-trainers-tot',
    imageSrc: '/training/latest.jpeg',
    title: 'Certified Fund Raising Specialist (CFRS) Training of Trainers (ToT)',
    date: 'July 1, 2019',
    description: 'Certificate Fund Raising Specialist (CFRS) Training of Trainers (ToT) is an intensive and internationally recognized professional fundraising course. It provides you the international as well as tailored knowledge, perspectives, tools and techniques and broadens the scope for a splendid fundraising career in the nonprofit world. It also enables you to raise fund for your organization in a competitive fundraising environment.',
   seats: '20',
   fees: 'NRS 14500/-',
   list:['Current and prospective donor research',
          'Building and sustaining a relationship with donors']
  },
  {
    id: '/keys-to-fundraising-success-and-capacity-building',
    imageSrc: '/training/key to fundraising.png',
    title: 'Keys to Fundraising Success and Capacity Building',
    date: 'June 10, 2019',
    description: 'The share of foreign aid in the national budget was 22% in FY 2017/18, compared to nearly 29% in FY 2016/17. It shows that, Nepal now faces the challenge of mobilizing more resources for, inter alia, graduating to the developing country status by 2022, achieving Sustainable Development Goals by 2030, and fulfilling the universally recognized economic, cultural and social rights that are now enshrined as fundamental rights in the constitution.',
   seats: '30',
   fees: 'NRS 8500/-',
   list: ['Small and Big Fundraising Ideas.',
    'Using PR and Social Media to Brand your INGO / NGO.'
   ]
  },
];

const TrainingsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 font-inter antialiased flex flex-col">
      {/* Header Section */}
      <header className="pt-36 pb-8 px-4 sm:px-8 md:px-16 text-center bg-gradient-to-r from-blue-100 via-white to-blue-200 shadow-md">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-2">

            Trainings
          </h1>
      </header>

      {/* Main Content Area - Training List */}
      <main className="flex flex-col items-center gap-8">
        {trainings.map((training) => (
          <div
            key={training.id}
            className="w-full max-w-7xl overflow-hidden flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 px-2 lg:px-12 py-6"
          >
            {/* Image */}
            <div className="lg:w-200 relative h-64 lg:h-auto rounded-2xl bg-gray-200 flex items-center justify-center overflow-hidden group">
              <Image
                src={training.imageSrc}
                alt={training.title}
                fill
                className="rounded-3xl"
              />
              <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0 bg-white opacity-20 group-hover:h-full transition-all duration-700 ease-in-out" />
              </div>
            </div>

            {/* Details */}
            <div className="lg:w-180 flex flex-col justify-center gap-4">
            <h1 className="text-3xl font-extrabold text-blue-800 mb-2">
                {training.title}
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-semibold">Date:</span>{training.date}
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-3">
              {training.description}
            </p>
            <div className="flex items-center gap-8 mb-4">
                          <div className="flex items-center gap-2">
                            <Image src="/home/chair.png"
                              height={50}
                              width={50} alt={""} 
                              className="rounded-2xl border-2 border-primary p-2" />
                            <div>
                              <span className="text-3xl text-primary font-bold ">{training.seats}</span>
                              <p className="text-gray-500 text-base">Seats</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 ml-8">
                            <Image src="/home/receipt.png"
                              height={50}
                              width={50} alt={""} 
                              className="rounded-2xl border-2 border-primary p-2" />
                            <div>
                              <span className="text-3xl text-primary font-bold ">{training.fees}</span>
                              <p className="text-gray-500 text-base">Fees</p>
                            </div>
                          </div>
                        </div>
              {training.list && (
                <ul className="space-y-4 text-sm mb-4">
                  {training.list.map((desc, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                                <div className="flex-shrink-0">
                                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 group-hover:bg-blue-200 transition">
                                    <MdCheckCircle size={20} />
                                  </div>
                                </div>
                                <p className="text-gray-700 group-hover:text-gray-900 font-medium transition">
                                  {desc}
                                </p>
                              </li>
                  ))}
                </ul>
              )}
              <a
                href={`${training.id}`}
                className="relative inline-block px-8 py-3 rounded-xl text-base font-medium text-white bg-primary w-fit overflow-hidden group"
            >
              <span className="absolute inset-0 bg-secondary w-0 group-hover:w-full transition-all duration-700 ease-in-out origin-left z-0"></span>
              <span className="relative z-10">View More</span>
            </a>
            </div>
          </div>
        ))}
      </main>
      {/* Logo Section */}
      <LogoSection />
    </div>
  );
};

export default TrainingsPage;
