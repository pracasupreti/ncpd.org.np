"use client";
import React from "react";
import ImageCarousel from "@/components/ui/carousel";
import LogoSection from "@/components/ui/logo";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 font-inter antialiased flex flex-col">
      {/* Header */}
      <header className="pt-36 pb-8 px-4 sm:px-8 md:px-16 text-center bg-gradient-to-r from-blue-100 via-white to-blue-200 shadow-md">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-2"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          About NCPD
        </motion.h1>
      </header>

      {/* Carousel */}
      <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
        <ImageCarousel />
      </motion.div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-10 text-gray-800 leading-relaxed">
        {[
          "NCPD is an organization dedicated to creating an enabling environment and opportunities for capacity building, networking, and collaboration whereby philanthropy and civil society organizations will grow.",
          "It conducts research, training, conferences, seminars, and workshops related to philanthropy, civil society organizations, fundraising, and communication. It also provides technical support in developing strategic plans and facilitates dialogue to make philanthropy and civil society organizations more efficient and effective. Importantly, it advocates for favorable policies and infrastructure that foster philanthropy in Nepal.",
          "NCPD's ultimate goal is to support and enhance the capacity, credibility, impact, and sustainability of philanthropy and civil society organizations.",
        ].map((text, index) => (
          <motion.p
            className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 space-y-2 text-base sm:text-lg text-gray-800 leading-relaxed"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            {text}
          </motion.p>
        ))}

        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >

          <div className="w-full h-full">
            <img
              src="/carousel/what-is-philanthropy-bekay-ahn.jpg"
              alt="Vision Illustration"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              An enabling environment where philanthropy is impactful and sustainable, and
              corporations and individuals are jointly engaged to serve people and communities.
            </p>
          </div>
        </motion.section>

        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >



          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Carry out research, capacity building, networking, and dialogue whereby an enabling environment is created and individuals, corporations, and governments are engaged in advancing philanthropy in terms of capacity, credibility, connections, and sustainability.
            </p>
          </div>
          <div className="w-full h-full">
            <img
              src="/carousel/ncpd-conference-2019-session.jpg"
              alt="Mission Illustration"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
        </motion.section>
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >

          <div className="w-full h-full">
            <img
              src="/carousel/ncpd-certified-campaign-manager-certification-distribution-program.jpeg"
              alt="Goal"
              className="w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Goal</h2>
            <p className="text-gray-700 leading-relaxed">
              To enhance the capacity, credibility, and sustainability of philanthropy.
            </p>
          </div>
        </motion.section>

        {/* Objectives */}
        <motion.section
          className="bg-white shadow-md rounded-2xl p-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={6}
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">Objectives</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            {[
              "Conduct and organize research, training, conferences, seminars, and workshops related to philanthropy, fundraising, communication, and branding.",
              "Conduct dialogue for enabling environments where philanthropy can thrive.",
              "Work with donors, advisors, financial institutions, corporations, and foundations to advise and encourage giving.",
              "Facilitate networking and collaboration with like-minded philanthropies, fundraisers, funders, and nonprofit organizations.",
              "Assist with strategic plan development and provide technical support to philanthropy, NGOs/CSOs for fundraising.",
              "Support civil society organizations to uphold integrity, transparency, accountability, and professionalism.",
              "Praise and honor ideal and unsung philanthropists.",
            ].map((obj, idx) => (
              <li key={idx} className="hover:text-blue-600 transition">
                {obj}
              </li>
            ))}
          </ul>
        </motion.section>
      </main>

      {/* Partner Logos */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="px-0"
      >
        <LogoSection />
      </motion.div>
    </div>
  );
};

export default AboutPage;
