"use client";
import LogoSection from "@/components/ui/logo";

export default function DialogueForPhilanthropyInfrastructurePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="py-8 pt-48 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4 md:mb-0">Dialogue For Philanthropy Infrastructure</h1>
          <p className="text-base text-black px-20 py-4">
            Home / <span className="text-red-500"> Dialogue For Philanthropy Infrastructure</span>
          </p>
        </div>
      </header>

      {/* Main Contact Section */}
      <main className="container mx-auto px-6 md:px-70 py-2">
        <h2 className="text-xl mb-6 text-gray-700">We dialogue and advocate for enabling environment; integrated societal norms, policies and infrastructure that fosters philanthropy in Nepal. </h2>
      </main>
        {/* Partner Logos Section */}
        <LogoSection />
    </div>
  );
}