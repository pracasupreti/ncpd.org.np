"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";

// Reusable Component for Logos
interface SponsorLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const SponsorLogo: React.FC<SponsorLogoProps> = ({
  src,
  alt,
  width = 120,
  height = 60,
}) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  );
};

// Reusable Section for Categories
interface SponsorSectionProps {
  title: string;
  children: React.ReactNode;
}

const SponsorSection: React.FC<SponsorSectionProps> = ({
  title,
  children,
}) => {
  return (
    <section className="mb-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-800 text-center">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">
        {children}
      </div>
    </section>
  );
};

const Sponsor: React.FC = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50 font-inter text-gray-800">
      <Head>
        <title>Our Sponsors & Partners</title>
        <meta name="description" content="Meet our valued sponsors and partners." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 sm:px-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Our Valued Sponsors & Partners
        </h1>

        {/* Non-Profit Partner */}
        <SponsorSection title="Non-Profit Partner">
          <SponsorLogo src="/sponsers/Youth-vision1.jpg" alt="Youth Vision" width={180} height={90} />
        </SponsorSection>

        {/* Knowledge Partner */}
        <SponsorSection title="Knowledge Partner">
          <SponsorLogo src="/sponsers/suvadin1.jpg" alt="Suvadin" width={150} height={75} />
          <SponsorLogo src="/sponsers/kings-college.png" alt="King's College" width={150} height={75} />
        </SponsorSection>

        {/* Gold Sponsors */}
        <SponsorSection title="Gold Sponsors">
          <SponsorLogo src="/sponsers/Ipas-Nepal.jpg" alt="IPAS Nepal" width={200} height={100} />
        </SponsorSection>

        {/* Silver Sponsors */}
        <SponsorSection title="Silver Sponsors">
          <SponsorLogo src="/sponsers/Goal-busters.jpg" alt="Goalbusters" />
          <SponsorLogo src="/sponsers/Accountability-Lab.jpg" alt="Accountability Lab Nepal" />
          <SponsorLogo src="/sponsers/motif.jpg" alt="Motif" />
          <SponsorLogo src="/sponsers/debenara.jpg" alt="Gorkha Welfare Trust" />
          <SponsorLogo src="/sponsers/Voice of Children.jpg" alt="Voice of Children" />
        </SponsorSection>

        {/* Bronze Sponsors */}
        <SponsorSection title="Bronze Sponsors">
          <SponsorLogo src="/sponsers/sosec.jpg" alt="SOSEC Nepal Dailekh" />
          <SponsorLogo src="/sponsers/NRDSC.jpg" alt="Nepal Bank Limited" />
          <SponsorLogo src="/sponsers/csdc-150.jpg" alt="Nepal Tourism Board" />
          <SponsorLogo src="/sponsers/Save%20the%20earth.jpg" alt="National Cooperative Bank" />
          <SponsorLogo src="/sponsers/csrc.jpg" alt="CSRC" />
          <SponsorLogo src="/sponsers/mahila-shakti-bikas-center.jpg" alt="Women Empowerment" />
          <SponsorLogo src="/sponsers/NRDSC.jpg" alt="Social Awareness" />
          <SponsorLogo src="/sponsers/aasaman-nepal.jpg" alt="Aasman Nepal" />
          <SponsorLogo src="/sponsers/Antarprerana.png" alt="Antarprerana" />
          <SponsorLogo src="/sponsers/kavach.jpg" alt="Kavach" />
          <SponsorLogo src="/sponsers/diyalo-international.png" alt="Diyalo International" />
          <SponsorLogo src="/sponsers/JWAS.jpg" alt="JWAS" />
          <SponsorLogo src="/sponsers/Project-sarangi.png" alt="Project Sarangi" />
          <SponsorLogo src="/sponsers/bikalpaanalternative.jpg" alt="Bikalpa an Alternative" />
        </SponsorSection>
      </main>
    </div>
  );
};

export default Sponsor;