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
          <a
            href="https://interestingengineering.com/what-data-are-voice-assistants-collecting-and-how-to-protect-yourself"
            className="block text-2xl mb-2"
          >
            Smart Speakers
          </a>
          <a
            href="https://www.wired.com/story/apple-watch-heart-monitoring-pros-and-cons/"
            className="block text-2xl mb-2"
          >
            Wearable Health Monitors
          </a>
          <a
            href="https://www.orlandosentinel.com/news/breaking-news/os-amazon-orlando-police-cameras-downtown-20180524-story.html"
            className="block text-2xl mb-2"
          >
            Facial regognition enabled surveillance cameras
          </a>
        </div>
      </div>
    </div>
  );
}
