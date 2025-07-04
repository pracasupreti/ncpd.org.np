import LogoSection from "@/components/ui/logo";
import Image from "next/image";

export default function ConferencesPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <header className="py-8 mt-8 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-extrabold text-center text-blue-800 tracking-tight mt-24">
            Conferences
          </h1>
        </div>
      </header>

      {/* Main Content Area - Conference List */}
      <main className="flex justify-center">
              <div className="w-full max-w-5xl transition-all duration-300 overflow-hidden flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 rounded-3xl">
                
                {/* Image */}
                  <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden group">
                  <Image
                    src="/home/ncpd-first-national-funraising-conference.png"
                    alt="Certified Fund Raising Specialist Training"
                    layout="fill"
                    className="rounded-3xl lg:rounded-3xl object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  </div>
      
                {/* Details */}
                <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-center gap-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 leading-snug hover:text-blue-400">
                    1st National Philanthropy and Fundraising Conference
                  </h2>
                  <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base">
                      <li>Philanthropy and NGOs require insights, knowledge, tools, and</li>
                      <li>skills to meet the resources including funding for creating</li>
                      <li>impact and sustaining themselves.</li>
                  </ul>
                  <p className="text-blue-600 text-sm sm:text-base">
                <span className="font-semibold">📅 Date:</span> February 27, 2019
              </p>
              <p className="text-blue-600 text-sm sm:text-base">
                <span className="font-semibold">📍 Venue:</span> Bhanimandal, Lalitpur, Nepal
              </p>
                  <a
                    href="/1st-national-philanthropy-and-fundraising-conference"
                    className="mt-2 inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm sm:text-base font-semibold tracking-wide hover:bg-blue-900 transition-colors duration-300 w-fit"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </main>

      {/* Logo Section */}
      <LogoSection />
    </div>
  );
}