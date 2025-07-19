"use client";
import React, { useState } from "react";
import LogoSection from "@/components/ui/logo";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const team: TeamMember[] = [
  {
    name: "Rewati Raman Dhakal",
    title: "Founder & CEO",
    image: "/team/rewati.jpg",
    bio: "Rewati Raman Dhakal is the visionary founder and CEO of NCPD. With over 15 years of experience in philanthropy and civil society development, he has been instrumental in creating enabling environments for capacity building and networking. His leadership has guided NCPD to become a leading organization in Nepal's philanthropic sector, fostering collaboration between corporations, individuals, and communities to serve people effectively."
  },
  {
    name: "Bishal Rai",
    title: "Co-Founder & Director",
    image: "/team/bishal.jpg",
    bio: "Bishal Rai serves as Co-Founder and Director of NCPD, bringing extensive expertise in organizational development and strategic planning. His commitment to transparency and accountability has been crucial in establishing NCPD's credibility within the philanthropic community. He specializes in building sustainable partnerships and has played a key role in developing training programs for civil society organizations."
  },
  {
    name: "Jerry Clewett",
    title: "International Development Consultant",
    image: "/team/jerry.jpg",
    bio: "Jerry Clewett is an experienced International Development Consultant with a deep understanding of global philanthropic trends and best practices. He has worked across multiple continents, bringing international perspectives to NCPD's initiatives. His expertise in cross-cultural communication and international fundraising strategies has been invaluable in expanding NCPD's global network and impact."
  },
  {
    name: "Dr. Christian Gahrmann",
    title: "Philanthropy & Fundraising Consultant",
    image: "/team/christian.jpg",
    bio: "Dr. Christian Gahrmann is a renowned expert in philanthropy and fundraising with a doctoral background in social sciences. His research-driven approach has helped NCPD develop evidence-based strategies for effective fundraising and donor engagement. He has authored several publications on sustainable philanthropy and regularly conducts workshops on fundraising best practices for nonprofit organizations."
  },
  {
    name: "Sharad Chandra Neupane",
    title: "Development Expert",
    image: "/team/sharad.jpg",
    bio: "Sharad Chandra Neupane is a seasoned Development Expert with comprehensive knowledge of Nepal's development landscape. His experience spans across various sectors including education, healthcare, and rural development. He has been instrumental in designing and implementing capacity-building programs that have strengthened numerous civil society organizations throughout Nepal, contributing significantly to NCPD's mission of creating sustainable impact."
  },
];

const AboutPage = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'goal'>('vision');

  const openModal = (member: TeamMember) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  const tabContent = {
    vision: {
      title: "Vision",
      text: "An enabling environment where philanthropy is impactful and sustainable, and corporations and individuals are jointly engaged to serve people and communities.",
      image: "/carousel/what-is-philanthropy-bekay-ahn.jpg",
      alt: "Vision Illustration"
    },
    mission: {
      title: "Mission",
      text: "Carry out research, capacity building, networking, and dialogue whereby an enabling environment is created and individuals, corporations, and governments are engaged in advancing philanthropy in terms of capacity, credibility, connections, and sustainability.",
      image: "/carousel/ncpd-conference-2019-session.jpg",
      alt: "Mission Illustration"
    },
    goal: {
      title: "Goal",
      text: "To enhance the capacity, credibility, and sustainability of philanthropy.",
      image: "/carousel/ncpd-certified-campaign-manager-certification-distribution-program.jpeg",
      alt: "Goal Illustration"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 font-inter antialiased flex flex-col">
      <header className="pt-36 pb-8 px-4 sm:px-8 md:px-16 text-center bg-gradient-to-r from-blue-100 via-white to-blue-200">
        <motion.h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-2" initial="hidden" animate="visible" variants={fadeUp}>
          About NCPD
        </motion.h1>
        <nav className="text-sm text-gray-600 mt-2">
          <a href="/" className="text-blue-700 hover:text-blue-900">Home</a> / <span className="text-blue-600">About</span>
        </nav>
      </header>

      <motion.div initial="hidden" whileInView="visible" variants={fadeUp} className="w-full flex justify-center py-6">
        <img src="/about/ncpd-logo.png" alt="NCPD Highlight" className="w-1/2 h-auto object-contain rounded-xl" />
      </motion.div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-10 text-gray-800 leading-relaxed">
        {[
          "NCPD is an organization dedicated to creating an enabling environment and opportunities for capacity building, networking, and collaboration whereby philanthropy and civil society organizations will grow.",
          "It conducts research, training, conferences, seminars, and workshops related to philanthropy, civil society organizations, fundraising, and communication. It also provides technical support in developing strategic plans and facilitates dialogue to make philanthropy and civil society organizations more efficient and effective. Importantly, it advocates for favorable policies and infrastructure that foster philanthropy in Nepal.",
          "NCPD's ultimate goal is to support and enhance the capacity, credibility, impact, and sustainability of philanthropy and civil society organizations."
        ].map((text, index) => (
          <motion.p key={index} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 text-base sm:text-lg text-gray-800 leading-relaxed" initial="hidden" animate="visible" custom={1} variants={fadeUp}>{text}</motion.p>
        ))}

        <motion.section className="py-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-xl p-1 border border-gray-200">
              {(['vision', 'mission', 'goal'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6"
          >
            {activeTab === 'mission' ? (
              <>
                <div>
                  <h2 className="text-2xl font-semibold text-blue-800 mb-4">{tabContent[activeTab].title}</h2>
                  <p className="text-gray-700 leading-relaxed">{tabContent[activeTab].text}</p>
                </div>
                <div className="w-full h-full">
                  <img src={tabContent[activeTab].image} alt={tabContent[activeTab].alt} className="w-full h-auto rounded-xl object-cover" />
                </div>
              </>
            ) : (
              <>
                <div className="w-full h-full">
                  <img src={tabContent[activeTab].image} alt={tabContent[activeTab].alt} className="w-full h-auto rounded-xl object-cover" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-blue-800 mb-4">{tabContent[activeTab].title}</h2>
                  <p className="text-gray-700 leading-relaxed">{tabContent[activeTab].text}</p>
                </div>
              </>
            )}
          </motion.div>
        </motion.section>

        <motion.section className="bg-white rounded-2xl p-8 sm:p-10 space-y-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={6}>
          <h2 className="text-3xl text-center font-bold text-blue-800 mb-6 tracking-tight">Objectives</h2>
          <ul className="space-y-5 text-gray-700 text-base leading-relaxed">
            {[
              "Conduct and organize research, training, conferences, seminars, and workshops related to philanthropy, fundraising, communication, and branding.",
              "Conduct dialogue for enabling environments where philanthropy can thrive.",
              "Work with donors, advisors, financial institutions, corporations, and foundations to advise and encourage giving.",
              "Facilitate networking and collaboration with like-minded philanthropies, fundraisers, funders, and nonprofit organizations.",
              "Assist with strategic plan development and provide technical support to philanthropy, NGOs/CSOs for fundraising.",
              "Support civil society organizations to uphold integrity, transparency, accountability, and professionalism.",
              "Praise and honor ideal and unsung philanthropists."
            ].map((obj, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <p>{obj}</p>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section className="bg-white rounded-2xl p-8 sm:p-10 space-y-6" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={7}>
          <h2 className="text-3xl text-center font-bold text-blue-800 mb-6 tracking-tight">Core Values</h2>
          <ul className="space-y-5 text-gray-700 text-base leading-relaxed">
            {[
              "Integrity: We are committed to honesty and sincere adherence to the highest professional, moral, and ethical standards.",
              "Impact: We believe that philanthropic efforts should support and enhance meaningful work that serves the public good in ways that, whenever possible, are measurable and sustainable.",
              "Inclusion: We value the full participation of communities and individuals and embrace the many forms of diversity...",
              "Transparency and Accountability: We hold ourselves to the highest standards of organizational integrity and responsible stewardship...",
              "Collaboration and Partnership: We embrace sharing knowledge and taking collective action..."
            ].map((val, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <p><strong>{val.split(":")[0]}</strong>{val.slice(val.indexOf(":"))}</p>
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section className="py-12" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div key={index} className="bg-white rounded-2xl p-6 text-center transition-all duration-300">
                <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{member.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{member.title}</p>
                <button 
                  onClick={() => openModal(member)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Full Bio
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="px-0">
        <LogoSection />
      </motion.div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <img src={selectedMember.image} alt={selectedMember.name} className="w-20 h-20 rounded-full object-cover" />
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900">{selectedMember.name}</h3>
                      <p className="text-blue-600 font-medium">{selectedMember.title}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="text-gray-700 leading-relaxed">
                  <h4 className="text-lg font-semibold text-blue-800 mb-3">Biography</h4>
                  <p>{selectedMember.bio}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutPage;
