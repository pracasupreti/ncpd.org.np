import LogoSection from "@/components/ui/logo";
import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";

export default function ConferencesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 font-inter antialiased flex flex-col">
      {/* Header Section */}
      <header className="pt-36 pb-8 px-4 sm:px-8 md:px-16 text-center bg-gradient-to-r from-blue-100 via-white to-blue-200 shadow-md">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-2">
          Conferences
        </h1>
      </header>

      {/* Main Content Area - Conference List */}
      <main className="flex justify-center py-16">
        <div className="w-full max-w-7xl overflow-hidden flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 px-2 lg:px-12 py-6">
          <div className="lg:w-200 relative h-64 lg:h-auto rounded-2xl bg-gray-200 flex items-center justify-center overflow-hidden group">
            <Image
              src="/home/ncpd-first-national-funraising-conference.png"
              alt="Certified Fund Raising Specialist Training"
              layout="fill"
              // objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0 bg-white opacity-20 group-hover:h-full transition-all duration-700 ease-in-out" />
            </div>
          </div>

          {/* Details */}
          <div className="lg:w-180 flex flex-col justify-center gap-4">
            <h1 className="text-3xl font-extrabold text-blue-800 mb-2">
              <span className="text-6xl font-extrabold text-blue-800">1</span>
              st National Philanthropy and Fundraising Conference
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              <span className="font-semibold">Date:</span> July 1, 2019
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed line-clamp-2">
              One of the main reasons for resource crunch is the shifting of donors'
              priority from Nepal to other global issues like the refugee, migration,
              trafficking, combating terrorism, global warming etc. In addition, there
              is also hope among development partners that the current government will
              itself tackle the current development given the context of its stability.
              Consequently, the development cooperation partners are diverting their resources and attention
              to other countries especially in the conflict affected regions.</p>
            <div className="flex items-center gap-8 mb-4">
              <div className="flex items-center gap-2">
                <Image src="/home/chair.png"
                  height={50}
                  width={50} alt={""}
                  className="rounded-2xl border-2 border-primary p-2" />
                <div>
                  <span className="text-3xl text-primary font-bold ">40</span>
                  <p className="text-gray-500 text-base">Seats</p>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-8">
                <Image src="/home/receipt.png"
                  height={50}
                  width={50} alt={""}
                  className="rounded-2xl border-2 border-primary p-2" />
                <div>
                  <span className="text-3xl text-primary font-bold ">NRS 17,000/-</span>
                  <p className="text-gray-500 text-base">Fees</p>
                </div>
              </div>
            </div>
            {/* List */}
            <ul className="space-y-4 text-sm mb-4">
              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 group-hover:bg-blue-200 transition">
                    <MdCheckCircle size={20} />
                  </div>
                </div>
                <p className="text-gray-700 group-hover:text-gray-900 font-medium transition line-clamp-2">
                  Philanthropy and NGOs require insights, knowledge, tools, and
                  skills to meet the resources including funding for creating impact and sustaining themselves.
                </p>
              </li>

              <li className="flex items-start gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 group-hover:bg-blue-200 transition">
                    <MdCheckCircle size={20} />
                  </div>
                </div>
                <p className="text-gray-700 group-hover:text-gray-900 font-medium transition">
                  To introduce and aware on the existing opportunities of funding/resources for their CSOs.
                </p>
              </li>
            </ul>

            <a
              href="/1st-national-philanthropy-and-fundraising-conference"
              className="relative inline-block px-8 py-3 rounded-xl text-base font-medium text-white bg-primary w-fit overflow-hidden group"
            >
              <span className="absolute inset-0 bg-secondary w-0 group-hover:w-full transition-all duration-700 ease-in-out origin-left z-0"></span>
              <span className="relative z-10">View More</span>
            </a>

          </div>
        </div>
      </main>
      {/* Logo Section */}
      <LogoSection />
    </div>
  );
}