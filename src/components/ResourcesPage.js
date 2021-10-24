import React from 'react';
import Navbar from './Navbar';

// resources page
export default function ResourcesPage() {
  return (
    <div className="w-screen min-h-screen max-h-full flex flex-col bg-accent">
      <Navbar />
      <div className="mt-8 mx-auto w-3/4">
        <h1 className="text-primary text-4xl font-semibold mb-8">
          The future of personal data collection
        </h1>

        <div className="mb-12">
          <h3 className="text-3xl mb-2">
            Why did we choose to do this project
          </h3>
          <p className="leading-8 text-xl mb-12"></p>
        </div>
      </div>
    </div>
  );
}
