"use client";
import React from "react";

const teamMembers = [
  {
    name: "Rewati Raman Dhakal",
    role: "Founder & CEO",
    bio: "Full Bio",
    image: "/team/rewati.jpg",
  },
  {
    name: "Bishal Rai",
    role: "Co-Founder & Director",
    bio: "Full Bio",
    image: "/team/bishal.jpg",
  },
  {
    name: "Jerry Clewett",
    role: "International Development Consultant",
    bio: "Full Bio",
    image: "/team/jerry.jpg",
  },
  {
    name: "Dr. Christian Gahrmann",
    role: "Philanthropy & Fundraising Consultant",
    bio: "Full Bio",
    image: "/team/christian.jpg",
  },
  {
    name: "Sharad Chandra Neupane",
    role: "Development Expert",
    bio: "Full Bio",
    image: "/team/sharad.jpg",
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased flex flex-col">
      {/* Header */}
      <header className="py-3 pt-36 px-6 md:px-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-black mb-2">Our Team</h1>
          <p className="text-base text-gray-600">
            Meet the dedicated individuals who lead and guide NCPD.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center text-center p-6 hover:shadow-xl transition duration-300"
              style={{
                width: "280px",
                height: "380px", // Slightly taller than before
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover mb-4 border-2 border-blue-600"
              />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{member.role}</p>
              <button className="mt-auto text-blue-600 hover:underline text-sm font-medium">
                {member.bio}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}