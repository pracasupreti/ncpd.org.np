"use client";
import React from 'react';
export default function Header() {
  return (
    <header className="bg-white text-black px-32 py-1">
      <div className="flex items-center space-x-34">
        <img src="/logo.png" alt="Logo" className="h-30 w-38" />
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="font-bold hover:underline">Home</a></li>
            <li><a href="/about" className="font-bold hover:underline">About</a></li>
            <li><a href="/services" className="font-bold hover:underline">Services</a></li>
            <li><a href="/news" className="font-bold hover:underline">News</a></li>
            <li><a href="/gallery" className="font-bold hover:underline">Gallery</a></li>
            <li><a href="/video" className="font-bold hover:underline">Video</a></li>
            <li><a href="/contact" className="font-bold hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
