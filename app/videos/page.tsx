"use client";
import LogoSection from '@/components/ui/logo';
import React from 'react';

// Define the Video interface
interface Video {
    id: string;
    title: string;
    embedUrl: string;
}

// Define the video data directly in this file
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

// VideoCard Component
interface VideoCardProps {
    video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => (
    <div className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="p-4">
            <h3 className="text-xl sm:text-xl font-semibold text-blue-500 mb-3 truncate" title={video.title}>
                {video.title}
            </h3>
            <div className="relative w-full h-0 pb-[56.25%] rounded-md overflow-hidden bg-gray-200 flex items-center justify-center">
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
    </div>
);

// Main Video Gallery Page Component
const VideoGalleryPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-inter antialiased flex flex-col">
            <header className="py-3 pt-36 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4 md:mb-0 text-black">Video Gallery</h1>
          <p className="text-base text-black px-20 py-2">
            <a href="/" className="text-blue-600 hover:underline">
               Home
              </a>{" "}
               / Video
            </p>
        </div>
      </header>


            {/* Main Content Area - Video Grid */}
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-24 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>

                {/* Logos Section */}
                <LogoSection />
            </main>
        </div>
    );
};

export default VideoGalleryPage;
