"use client";
import LogoSection from '@/components/ui/logo';
import React from 'react';

interface Video {
  id: string;
  title: string;
  embedUrl: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: "Brief documentary on Nepal's Philanthropy",
    embedUrl: 'https://www.youtube.com/embed/4d51G464g5s',
  },
  {
    id: '2',
    title: 'Message from Ms. Reem Abdelhamid',
    embedUrl: 'https://www.youtube.com/embed/zbO_Daf1Low',
  },
  {
    id: '3',
    title: 'Message from Professor Bekay Ahn',
    embedUrl: 'https://www.youtube.com/embed/5BOq94N4pdU',
  },
];

const VideoCard: React.FC<{ video: Video }> = ({ video }) => (
  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">
    {/* Title */}
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{video.title}</h3>
    </div>

    {/* Video Embed */}
    <div className="relative w-full h-0 pb-[56.25%]">
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
  </div>
);

const VideoGalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-inter antialiased flex flex-col">
      {/* Header */}
      <header className="py-3 pt-36 px-6 md:px-12 bg-gray-50">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-black mb-2">Video Gallery</h1>
          <p className="text-base text-gray-600 text-left">Home / Video</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </main>

      {/* Partner Logos */}
      <LogoSection />
    </div>
  );
};

export default VideoGalleryPage;