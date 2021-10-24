import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// page shown when user presses accept from the first page
export default function BootcampPage2() {
  const titles = [
    'What are cookies and why can they be dangerous?',
    'What are they intended to be used for?',
    'Session Managment',
    'Personalization',
    'Tracking',
    'Third-Party Cookies',
  ];
  const descriptions = [
    'HTTP cookies, or internet cookies, are built specifically for Internet web browsers to track, personalize, and save information about each user’s session. A “session” just refers to the time you spend on a site.',
    '',
    'For example, cookies let websites recognize users and recall their individual login information and preferences, such as sports news versus politics.',
    'Customized advertising is the main way cookies are used to personalize your sessions. You may view certain items or parts of a site, and cookies use this data to help build targeted ads that you might enjoy.',
    'Shopping sites use cookies to track items users previously viewed, allowing the sites to suggest other goods they might like and keep items in shopping carts while they continue shopping.',
    `Visiting a site with 10 ads could generate 10 cookies even if you didn’t interact with those ads. \n Third-party cookies let advertisers or analytics companies track an individual's browsing history across the web on any You wouldn't want some random person tracking your browsing history. \n If you have browsed for a particular product at an online store and then ads for similar products have followed you around the internet, you have experienced the power of tracking cookies.`,
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
          <h1 className="text-4xl mb-10">Cyber Secuirty Bootcamp Lesson 2</h1>
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
            <Link to="/bootcamp3">
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
