// page.tsx
import React from 'react';
import Image from 'next/image';
import LogoSection from '@/components/ui/logo';

// Define a type for the training data for better type safety
interface Training {
  id: string;
  imageSrc: string;
  title: string;
  date: string;
  venue: string;
  description?: string[];
}

const trainings: Training[] = [
  {
    id: '/certified-fund-raising-specialist-cfrs-training-of-trainers-tot',
    imageSrc: '/training/latest.jpeg',
    title: 'Certified Fund Raising Specialist (CFRS) Training of Trainers (ToT)',
    date: 'July 1, 2019',
    venue: 'Hotel Greenwich, Bakhundol, Sanepa, Lalitpur, Nepal',
  },
  {
    id: '/keys-to-fundraising-success-and-capacity-building',
    imageSrc: '/training/key to fundraising.png',
    title: 'Keys to Fundraising Success and Capacity Building',
    date: 'June 10, 2019',
    venue: 'Hotel Greenwich, Bakhundol, Sanepa, Lalitpur, Nepal',
    description: [
      'Donor management - how do you retain existing donors and identify new ones?',
      'Story telling. How do you showcase your INGO/ NGO?',
      'Small and Big Fundraising ideas.',
      'Using PR and Social Media to Brand your INGO / NGO. How donors react and what do they want?',
    ],
  },
];

const TrainingsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 py-24">
      {/* Header Section */}
      <header className="py-8 mt-8 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center text-blue-800 tracking-tight">
            Trainings
          </h1>
        </div>
      </header>

      {/* Main Content Area - Training List */}
      <main className="flex flex-col items-center gap-8">
        {trainings.map((training) => (
          <div
            key={training.id}
            className="w-full max-w-5xl transition-all duration-300 overflow-hidden flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 rounded-3xl bg-white shadow"
          >
            {/* Image */}
            <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden group">
              <Image
                src={training.imageSrc}
                alt={training.title}
                fill
                className="rounded-3xl lg:rounded-3xl transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Details */}
            <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 leading-snug hover:text-blue-400">
                {training.title}
              </h2>
              {training.description && (
                <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base mt-2">
                  {training.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              )}
              <p className="text-blue-600 text-sm sm:text-base">
                <span className="font-semibold">📅 Date:</span> {training.date}
              </p>
              <p className="text-blue-600 text-sm sm:text-base">
                <span className="font-semibold">📍 Venue:</span> {training.venue}
              </p>
              <a
                href={`${training.id}`}
                className="mt-2 inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm sm:text-base font-semibold tracking-wide hover:bg-blue-900 transition-colors duration-300 w-fit"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </main>
      {/* Logo Section */}
      <LogoSection/>
    </div>
  );
};

export default TrainingsPage;
