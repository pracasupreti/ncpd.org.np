"use client";
import React from 'react';
export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Team</h1>
      <p className="text-lg mb-4">
        Meet the dedicated individuals who make our organization thrive:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>John Doe:</strong> CEO and Founder</li>
        <li><strong>Jane Smith:</strong> Chief Operating Officer</li>
        <li><strong>Emily Johnson:</strong> Chief Financial Officer</li>
      </ul>
    </div>
  );
};
