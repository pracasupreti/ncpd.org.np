"use client";
import LogoSection from "@/components/ui/logo";
import React from "react";

// Define the Video interface
interface Video {
  id: string;
  title: string;
  embedUrl: string;
}

// Define the video data
const videos: Video[] = [
  {
    id: "1",
    title: "Brief documentary on Nepal's Philanthropy",
    embedUrl: "https://www.youtube.com/embed/4d51G464g5s",
  },
  {
    id: "2",
    title: "Message from Ms. Reem Abdelhamid",
    embedUrl: "https://www.youtube.com/embed/zbO_Daf1Low",
  },
  {
    id: "3",
    title: "Message from Professor Bekay Ahn",
    embedUrl: "https://www.youtube.com/embed/5BOq94N4pdU",
  },
];

// VideoCard Component
interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => (
  <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg bg-white">
    <div className="p-4">
      {/* Embedded Video */}
      <div className="relative w-full h-0 pb-[56.25%] rounded-md overflow-hidden bg-gray-200 flex items-center justify-center mb-4">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={video.embedUrl}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Title Below Video */}
      <h3 className="text-lg sm:text-xl font-semibold text-blue-600 text-center">
        {video.title}
      </h3>
    </div>
  </div>
);

// Main Video Gallery Page
const VideoGalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased flex flex-col pt-40">
      {/* Header Section */}
      <header className="px-4 sm:px-8 lg:px-20 pb-12">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black mb-2">Videos</h1>
          <nav className="text-sm text-blue-600">
            <a href="/" className="hover:underline">Home</a>
            <span className="mx-1"> / </span>
            <span className="text-blue-600">Video</span>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-24 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Logo Section */}
        <div className="mt-16">
          <LogoSection />
        </div>
      </main>
    </div>
  );
};

export default VideoGalleryPage;
