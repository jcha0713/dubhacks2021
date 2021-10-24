import React from 'react';
import Navbar from './Navbar';

// resources page
export default function ResourcesPage() {
  return (
    <div>
      <Navbar />
      <h3>The future of personal data collection</h3>

      <ul>
        <a href="https://interestingengineering.com/what-data-are-voice-assistants-collecting-and-how-to-protect-yourself">
          Smart Speakers
        </a>
      </ul>
      <ul>
        <a href="https://www.wired.com/2016/01/under-armour-healthbox/">
          Sensor Embedded Clothing
        </a>
      </ul>
      <ul>
        <a href="https://www.wired.com/story/apple-watch-heart-monitoring-pros-and-cons/">
          Wearable Health Monitors
        </a>
      </ul>
      <ul>
        <a href="https://www.orlandosentinel.com/news/breaking-news/os-amazon-orlando-police-cameras-downtown-20180524-story.html">
          Facial regognition enabled surveillance cameras
        </a>
      </ul>
    </div>
  );
}
