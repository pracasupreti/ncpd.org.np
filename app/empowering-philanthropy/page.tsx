"use client";
import LogoSection from "@/components/ui/logo";

export default function EmpoweringPhilanthropyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="py-8 pt-48 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4 md:mb-0">Empowering Philanthropy</h1>
          <p className="text-base text-black px-20 py-4">
            Home / <span className="text-red-500">Empowering Philanthropy</span>
          </p>
        </div>
      </header>

      {/* Main Contact Section */}
      <main className="container mx-auto px-6 md:px-70 py-2">
        <h2 className="text-xl mb-6 text-gray-700">We build the capacity of philanthropy, private sectors, and individuals through training, conference, seminars, workshop, 
            coaching, mentoring and networking. We will primarily support in building talent treasure and trust of key factors involved for doing good in Nepal.</h2>
      </main>
        {/* Partner Logos Section */}
        <LogoSection />
    </div>
  );
}