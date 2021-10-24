import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// page shown when user presses accept from the first page
export default function BootcampPage1() {
  const titles = [
    'What does it really mean when you press “accept”?',
    'What kind of data is being collected?',
    'Your Location',
    'Addresses of which sites you visit/have visited (as well as where you click and your mouse strokes)',
    'Usernames and Passwords',
    'Technical configurations of your device',
  ];
  const descriptions = [
    '',
    '',
    'By allowing companies access to this it can help companies and shops pinpoint our location allowing marketers to be notified when we walk past a store and how much time is spent there. This can add to our shopping or browsing experience but is giving companies an unfiltered look at our lives and the places we visit.',
    'This feature pinpoints your interests and also helps companies further understand usability statistics.',
    '',
    '',
  ];

  const [index, setIndex] = useState(0);
  const [countdown, setCountdown] = useState(10);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setIndex(index + 1);
    setCountdown(10);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(countdown - 1);
    }, 1000);
    if (index + 1 === titles.length) {
      setShow(true);
      return () => clearInterval(interval);
    }
    if (countdown === -1) {
      setIndex(index + 1);
      setCountdown(10);
    }
    return () => clearInterval(interval);
  }, [countdown, index, titles.length]);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-3/4 h-auto mt-24">
          <h1 className="text-4xl mb-10">Cyber Secuirty Bootcamp Lesson 1</h1>
          <div className="mb-10">
            <p className="text-6xl mb-4 font-semibold">{titles[index]}</p>
            <p className="text-2xl ">{descriptions[index]}</p>
          </div>
          {!show && (
            <p className="text-gray-600 text-3xl mb-2">
              {countdown} seconds left
            </p>
          )}
          {show ? (
            <Link to="/bootcamp2">
              <button
                onClick={handleClick}
                className="w-2/4 p-2 bg-black mb-4 text-white text-xl rounded-md"
              >
                go to next lesson
              </button>
            </Link>
          ) : (
            <button
              onClick={handleClick}
              className="w-2/4 p-2 bg-black mb-4 text-white text-xl rounded-md"
            >
              ...or just send me to the next page
            </button>
          )}
        </div>
      </div>
    </>
  );
}
