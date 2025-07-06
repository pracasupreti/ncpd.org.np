"use client";
import React from "react";

const CoreValuesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased flex flex-col">
      {/* Header */}
      <header className="py-3 pt-36 px-6 md:px-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-black mb-2">Core Values of NCPD</h1>
          <p className="text-base text-gray-600 text-left">Home / Core Values of NCPD</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-6 text-base sm:text-lg text-gray-800 leading-relaxed">
        <p>
          NCPD is guided by five core values in pursuing our mission and driving the organization toward the future:
        </p>

        <ul className="list-disc list-inside space-y-4">
          <li>
            <strong>Integrity:</strong> We are committed to honesty and sincere adherence to the highest professional, moral, and ethical standards.
          </li>
          <li>
            <strong>Impact:</strong> We believe that philanthropic efforts should support and enhance meaningful work that serves the public good in ways that, whenever possible, are measurable and sustainable.
          </li>
          <li>
            <strong>Inclusion:</strong> We value the full participation of communities and individuals and embrace the many forms of diversity, including, but not limited to, ethnic, cultural, racial, religious, sexual orientation, economic status, physical ability, and gender.
          </li>
          <li>
            <strong>Transparency and Accountability:</strong> We hold ourselves to the highest standards of organizational integrity and responsible stewardship, which require open, broad, and thorough disclosure of decisions, processes, and procedures.
          </li>
          <li>
            <strong>Collaboration and Partnership:</strong> We embrace sharing knowledge and taking collective action to strengthen all parties and effectively leverage resources to achieve common objectives.
          </li>
        </ul>
      </main>
    </div>
  );
};

export default CoreValuesPage;