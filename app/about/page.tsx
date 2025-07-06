"use client";
import LogoSection from "@/components/ui/logo";
import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased flex flex-col">
      {/* Header */}
      <header className="py-3 pt-36 px-6 md:px-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-black mb-2">About NCPD</h1>
          <p className="text-base text-gray-600 text-left">Home / About NCPD</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-6 text-base sm:text-lg text-gray-800 leading-relaxed">
        <p>
          NCPD is an organization dedicated to creating an enabling environment
          and opportunities for capacity building, networking, and collaboration
          whereby philanthropy and civil society organizations will grow.
        </p>

        <p>
          It conducts research, training, conferences, seminars, and workshops
          related to philanthropy, civil society organizations, fundraising, and
          communication, including other relevant topics. It also provides
          technical support in developing strategic plans, and facilitates
          dialogue to make philanthropy and civil society organizations more
          efficient and effective. Importantly, it advocates for favorable
          policies and infrastructure that foster philanthropy in Nepal.
        </p>

        <p>
          NCPD's ultimate goal is to support and enhance the capacity,
          credibility, impact, and sustainability of philanthropy and civil
          society organizations.
        </p>

        {/* Vision */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Vision</h2>
          <p>
            An enabling environment where philanthropy is impactful and
            sustainable, and corporations and individuals are jointly engaged to
            serve people and communities.
          </p>
        </section>

        {/* Mission */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Mission</h2>
          <p>
            Carry out research, capacity building, networking, and dialogue
            whereby an enabling environment is created and individuals,
            corporations, and governments are engaged in advancing philanthropy
            in terms of capacity, credibility, connections, and sustainability.
          </p>
        </section>

        {/* Goal */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Goal</h2>
          <p>
            To enhance the capacity, credibility, and sustainability of philanthropy.
          </p>
        </section>

        {/* Objectives */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">Objectives</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Conduct and organize research, training, conferences, seminars,
              and workshops related to philanthropy, fundraising, communication,
              and branding.
            </li>
            <li>
              Conduct dialogue for enabling environments where philanthropy can
              thrive.
            </li>
            <li>
              Work with donors, advisors, financial institutions, corporations,
              and foundations to advise and encourage giving.
            </li>
            <li>
              Facilitate networking and collaboration with like-minded
              philanthropies, fundraisers, funders, and nonprofit organizations.
            </li>
            <li>
              Assist with strategic plan development and provide technical
              support to philanthropy, NGOs/CSOs for fundraising.
            </li>
            <li>
              Support civil society organizations to uphold integrity,
              transparency, accountability, and professionalism.
            </li>
            <li>
              Praise and honor ideal and unsung philanthropists.
            </li>
          </ul>
        </section>
      </main>

      {/* Partner Logos */}
      <LogoSection />
    </div>
  );
};

export default AboutPage;