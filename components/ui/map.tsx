"use client";
import React from 'react';

const MapSection: React.FC = () => {
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.74837583648!2d85.3134633150244!3d27.69408298279893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a1a1a1a1a1%3A0x1a1a1a1a1a1a1a1a!2sAgeno%20Restro!5e0!3m2!1sen!2snp!4v1678901234567!5m2!1sen!2snp";

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">

      {/* Header */}
      {/* <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            Hotel Greenwich, Bakundol, Sanepa, Lalitpur, Nepal
          </h1>
        </div>
      </header> */}

      <main className="container mx-auto px-4 md:px-8 lg:px-16 py-8">
        <div className="overflow-hidden">

          {/* Google Map Embed */}
          <div className="relative w-full" style={{ paddingBottom: '75%' /* 4:3 Aspect Ratio */ }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1766.7111323178638!2d85.308071!3d27.673341!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18317c66fa0f%3A0x840fa607dc845194!2sAgeno%20Restro!5e0!3m2!1sen!2sus!4v1751705796887!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MapSection;
