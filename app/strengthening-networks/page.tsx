"use client";
import React from "react";
import LogoSection from "@/components/ui/logo";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function StrengtheningNetworksPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="pt-36 pb-8 px-4 sm:px-8 md:px-16 text-center bg-gradient-to-r from-blue-100 via-white to-blue-200">
        <motion.h1
          className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Strengthening Networks
        </motion.h1>
        <nav className="text-sm text-gray-600 mt-2">
          <a href="/" className="text-blue-700 hover:text-blue-900">
            Home
          </a>{" "}
          / <span className="text-blue-600">Strengthening Networks</span>
        </nav>
      </header>

      {/* Main Section */}
      <main className="container mx-auto px-6 md:px-20 py-12">
        <h2 className="text-xl mb-6 text-gray-700 leading-relaxed">
          We connect key stakeholders to foster synergies – both within Nepal and globally, 
          so that the power of human connections can nurture a better future for all.
        </h2>
      </main>

      {/* Partner Logos Section */}
      <LogoSection />
    </div>
  );
}