import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

// Reusable Component for Logos
interface SponsorLogoProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

const SponsorLogo: React.FC<SponsorLogoProps> = ({ src, alt, width = 120, height = 60, className = '' }) => {
  return (
    <div className={`flex items-center justify-center p-2 ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="intrinsic"
        objectFit="contain"
      />
    </div>
  );
};

// Reusable Section for Categories
interface SponsorSectionProps {
  title: string;
  children: React.ReactNode;
}

const SponsorSection: React.FC<SponsorSectionProps> = ({ title, children }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-orange-800">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 gap-4 items-center justify-center">
        {children}
      </div>
    </section>
  );
};

const Sponsor: React.FC = () => {
  return (
    <div className="min-h-screen py-10">
      <Head>
        <title>Our Sponsors & Partners</title>
        <meta name="description" content="Meet our valued sponsors and partners." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Our Valued Sponsors & Partners
        </h1>
         
         <div className='flex flex-col lg:flex-row space-x-8'>
        {/* Non-Profit Partner Section */}
        <SponsorSection title="Non-Profit Partner">
          <Image
            src="/sponsers/Youth-vision1.jpg"
            alt="Youth Vision"
            width={180}
            height={90}
          />
        </SponsorSection>

        {/* Knowledge Partner Section */}
        <SponsorSection title="Knowledge Partner">
          <Image
            src="/sponsers/suvadin1.jpg"
            alt="Suvadin"
            width={150}
            height={75}
          />
          <Image
            src="/sponsers/kings-college.png"
            alt="King's College"
            width={150}
            height={75}
          />
        </SponsorSection>
        </div>
        {/* Gold Sponsors Section */}
        <SponsorSection title="Gold Sponsors">
          <Image
            src="/sponsers/Ipas-Nepal.jpg"
            alt="IPAS Nepal"
            width={200}
            height={100}
          />
        </SponsorSection>


        {/* Silver Sponsors Section */}
        <SponsorSection title="Silver Sponsors">
          <Image
            src="/sponsers/Goal-busters.jpg"
            alt="Goalbusters"
            width={120}
            height={60}
          />
          <Image
            src="/sponsers/Accountability-Lab.jpg"
            alt="Accountability Lab Nepal"
            width={150}
            height={75}
          />
          <Image
            src="/sponsers/Motif(1).jpg"
            alt="Motif"
            width={120}
            height={60}
          />
          <Image
            src="/sponsers/debenara.jpg"
            alt="Gorkha Welfare Trust"
            width={100}
            height={50}
          />
          <Image
            src="/sponsers/Voice of Children.jpg"
            alt="Voice of Children"
            width={120}
            height={60}
          />
        </SponsorSection>

        {/* Bronze Sponsors Section */}
        <SponsorSection title="Bronze Sponsors">
          <Image src="/sponsers/sosec.jpg" alt="SOSEC Nepal Dailekh" width={100} height={50} />
          <Image src="/sponsers/NRDSC.jpg" alt="Nepal Bank Limited" width={100} height={50} />
          <Image src="/sponsers/csdc-150.jpg" alt="Nepal Tourism Board" width={100} height={50} />
          <Image src="/sponsers/Save%20the%20earth.jpg" alt="National Cooperative Bank" width={100} height={50} />
          <Image src="/sponsers/csrc.jpg" alt="CSTC" width={100} height={50} />
          <Image src="/sponsers/mahila-shakti-bikas-center.jpg" alt="Women Empowerment" width={100} height={50} />
          <Image src="/sponsers/NRDSC.jpg" alt="Social Awareness" width={100} height={50} />
          <Image src="/sponsers/aasaman-nepal.jpg/sponsers/ananta-nepal.png" alt="Aasman Nepal" width={100} height={50} />
          <Image src="/sponsers/Antarprerana.png" alt="Antar Rerana" width={100} height={50} />
          <Image src="/sponsers/kavach.jpg" alt="Kavach" width={100} height={50} />
          <Image src="/sponsers/diyalo-international.png" alt="Diyaalo International" width={100} height={50} />
          <Image src="/sponsers/JWAS.jpg" alt="NHA" width={100} height={50} />
          <Image src="/sponsers/Project-sarangi.png" alt="Project Sarang" width={100} height={50} />
          <Image src="/sponsers/bikalpaanalternative.jpg" alt="Bikalpa" width={100} height={50} />
          {/* Add all other bronze sponsors here following the pattern */}
        </SponsorSection>
      </main>
    </div>
  );
};

export default Sponsor;