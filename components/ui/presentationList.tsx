'use client';
import React from 'react';
import { FaFilePowerpoint } from 'react-icons/fa';

interface Presentation {
  title: string;
  presenter: string;
  pdfUrl: string;
}

const presentations: Presentation[] = [
  {
    title: 'Input, Integrity and impact',
    presenter: 'Prof Dr. Bhagawan Koirala',
    pdfUrl: '/pdfs/input-integrity.pdf',
  },
  {
    title: 'What is Philanthropy and how it is important in the current world',
    presenter: 'Prof & CFRE Bekay Ahn',
    pdfUrl: 'pdfs/philantrophy talk.pptx',
  },
  {
    title: 'I am Community, I expect!',
    presenter: 'Dr. Pramod Dhakal',
    pdfUrl: '/pdfs/i-am-community.pdf',
  },
  {
    title: 'CHALLENGES AND OPPORTUNITIES IN SOCIAL ENTERPRISE',
    presenter: 'CHIJMAN GURUNG',
    pdfUrl: '/pdfs/social-enterprise.pdf',
  },
  {
    title: 'Ingredients of Institutional Fund Raising',
    presenter: 'MR Govinda Neupane',
    pdfUrl: 'pdfs/Institutional Fund raising IM Swedish Dev Partner Govinda final final.pptx',
  },
  {
    title: 'THE JOY OF GIVING',
    presenter: 'MR JERONINIO ALMEIDA',
    pdfUrl: '/pdfs/joy-of-giving.pdf',
  },
  {
    title: 'NOP Event can make a Change',
    presenter: 'MR. KIM HONGGU',
    pdfUrl: '/pdfs/nop-event.pdf',
  },
  {
    title:
      'Development Paradigms, Foreign Aid Funding Trends, and Challenges and Opportunities for I/NGOs in Nepal',
    presenter: 'Dr. Shibesh Chandra Regmi',
    pdfUrl: '/pdfs/ngo-nepal.pdf',
  },
  {
    title: 'Fundraising in Middle East',
    presenter: 'Reem Abdelhamid',
    pdfUrl: '/pdfs/fundraising-middle-east.pdf',
  },
  {
    title: 'वेलका नगरपालिकाका',
    presenter: 'Mr. Durga Kumar Thapa',
    pdfUrl: '/pdfs/belka.pdf',
  },
];

const PresentationList: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="divide-y border rounded shadow-sm">
        {presentations.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 px-3 hover:bg-gray-100 transition-all"
          >
            <div className="text-sm md:text-base text-gray-800">{item.title}</div>
            <div className="flex items-center gap-3">
              <div className="text-sm md:text-base text-gray-600 whitespace-nowrap">{item.presenter}</div>
              <a
                href={item.pdfUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-500 text-xl hover:scale-110 transition-transform"
                title="Download PDF"
              >
                <FaFilePowerpoint />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PresentationList;
