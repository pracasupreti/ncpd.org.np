'use client';
import React from 'react';

interface PresentationItem {
  title: string;
  speakers: string[];
  type?: 'list' | 'single';
}

interface PresentationSection {
  heading?: string;
  items: PresentationItem[];
}

const sections: PresentationSection[] = [
  {
    items: [
      {
        title: 'Input, Integrity, and Impact',
        speakers: ['Prof Dr. Bhagawan Koirala'],
      },
      {
        title: 'Philanthropy and Fundraising in 21st Century: Where is it moving and how can we move? Key Strategies',
        speakers: ['Prof and CFRE Bekay Ahn, President of the International Council for Non Profit Management, South Korea'],
      },
      {
        title: 'Development and Funding Trend in Nepal - Yesterday, Today and Tomorrow',
        speakers: ['Dr. Shibesh Chandra Regmi, Country Director of Ipas and Chairperson of AIN'],
      },
      {
        title: 'I am community, I expect.',
        speakers: ['Dr. Pramod Dhakal, Chairperson of Open University and Diaspora scientist and diaspora Nepalese'],
      },
      {
        title: 'Case Study - how the organization reached to the top in philanthropy and fundraising success?',
        speakers: ['Prof Bekay Ahn, President of the International Council for Non Profit Management, South Korea'],
      },
    ],
  },
  {
    heading: 'Experience Sharing',
    items: [
      {
        title: 'Challenges and opportunities of social enterprises\nSuccessful Local resource Mobilization\nKey suggestions to Nepal Non Profit Sector\nHow Nonprofit Creates Impact in Kore',
        speakers: [
          'Mr. Cheese Gurung, President of Sukhawati Foundation, Nepal',
          'Mr. Durga Bahadur Thapa, Mayor Beleka Municipality, Nepal',
          'Mr. Kim Beum Yong, Secretary General of Council of Korean Foundation',
          'Mr. Kim HongGu, HongGu Planning, South Korea',
        ],
        type: 'list',
      },
    ],
  },
  {
    items: [
      {
        title: 'Building a pipe of fund raising prospect for Nepalese I/NGOs in Middle East and in Global context',
        speakers: ['Ms Reem Abdelhamid, Head of Global Philanthropy, UNHCR'],
      },
      {
        title: 'The art & science of fundraising - developing , measuring and improving fundraising impact',
        speakers: ['Mr.Jeroninio Almeida, Fundraising Expert, India'],
      },
      {
        title: 'Key ingredients of the institutional fundraising',
        speakers: ['Mr. Govinda Neupane, Country Director of IM Swedish Development Partner, Nepal'],
      },
    ],
  },
];

const AreaPresentationList: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="space-y-10">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.heading && (
              <h3 className="text-lg md:text-xl font-semibold text-sky-700 mb-3 border-b pb-1">
                {section.heading}
              </h3>
            )}

            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="mb-6">
                {item.type === 'list' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-disc pl-5 space-y-2 text-gray-800 whitespace-pre-line text-sm md:text-base">
                      {item.title.split('\n').map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                    <ul className="list-disc pl-5 space-y-2 text-gray-600 text-sm md:text-base">
                      {item.speakers.map((speaker, i) => (
                        <li key={i}>{speaker}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <p className="text-gray-800 text-sm md:text-base md:max-w-[55%]">{item.title}</p>
                    <p className="text-gray-600 text-sm md:text-base md:text-right md:max-w-[40%]">
                      {item.speakers[0]}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AreaPresentationList;
