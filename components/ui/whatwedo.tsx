"use client";
import React from 'react';

const WhatWeDoPage: React.FC = () => {
  return (
    <div className="container mx-auto px-20 py-16">
      <h1 className="text-4xl font-bold text-black mb-12">What We Do?</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card */}
        <div className="flex flex-col items-center text-left p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4 flex flex-row space-x-4 items-center">
            <img src="/whatwedo/education.png" alt="Empowering Philanthropy" className="h-16 w-16" />
          
          <h2 className="text-2xl font-semibold text-black mb-4">Empowering Philanthropy</h2>
          </div>
          <p className="text-gray-600 mb-6">
            We build the capacity of philanthropy, private sectors, and individuals through training,
             conference, seminars, workshop, coaching, mentoring and networking.
          </p>
          <a href="/empowering-philanthropy" className="text-black font-bold hover:text-green-600 mt-6">Read more</a>
        </div>

        <div className="flex flex-col items-center text-left p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4 flex flex-row space-x-4 items-center">
            <img src="/whatwedo/consulting.png" alt="Dialogue For Philanthropy Infrastructure" className="h-16 w-16" />
         
          <h2 className="text-2xl font-semibold text-black mb-4">Dialogue For Philanthropy Infrastructure</h2>
           </div>
           <p className="text-gray-600 mb-6">
            We dialogue and advocate for enabling environment; integrated societal norms,
             policies and infrastructure that fosters philanthropy in Nepal.
          </p>
          <a href="/dialogue-for-philanthropy-infrastructure" className="text-black font-bold hover:text-green-600">Read more</a>
        </div>

        <div className="flex flex-col items-center text-left p-6 bg-white rounded-lg shadow-md">
          <div className="mb-4 flex flex-row space-x-4 items-center">
            <img src="/whatwedo/conferences.png" alt="Strengthen Networks" className="h-16 w-16" />
          
          <h2 className="text-2xl font-semibold text-black mb-4">Strengthen Networks</h2>
          </div>
          <p className="text-gray-600 mb-6">
            We connect key stakeholders to foster synergies – both within Nepal and globally, 
            so that the power of human connections can nurture a better future for all.
          </p>
          <a href="/strengthening-networks" className="text-black font-bold hover:text-green-600 mt-6">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoPage;