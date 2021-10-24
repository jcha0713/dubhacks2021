import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

// page shown when user presses accept from the first page
export default function BootcampPage3() {
  const titles = [
    'What is your personal data being user for?',
    'Targeted ads',
    'Scientists study it',
    'Websites use it for internal research',
    'Companies sell your data',
    'Advertisers use it to create “consumer categories”',
    'Insurance companies analyze it',
    'Thieves use it to steal your identity',
    'Social media sites use it to help you find friends',
    'Apps use it to snoop on your whereabouts',
    'It is being stored forever',
    'End of Bootcamp!',
  ];
  const descriptions = [
    '',
    'A profile is created about you - the topics you search for, the websites you visit, your location, the links you “like” on social media, etc. - that allows websites to develop a personalized advertising experience just for you.',
    'Social scientists look at your data to understand what people decide to share, post like, and so on, in order to better observe an array of contemporary social trends.',
    'Internal research examines the links you click on, the media you share, or the time spent per page in order to optimize the user experience.',
    'There is a whole economy surrounding the buying and selling of personal data. People will pay for anything ranging from your income to your court date details.',
    `Advertisers will study huge chunks of aggregated data to create consumer categories. By doing this they group you into defined categories and use them to create even more refined targeted advertisements.`,
    'Insurance companies will buy data to set rates or premiums. Some will even browse customers’ social media pages in hopes of denying or confirming claims.',
    'Thieves would love to get your hands on your name and credit card information.',
    'Social media sites will compare your data against others to try and find people you might know.',
    'If you have a smartphone you can think of that as a personal tracking device because there’s a good chance you’re sharing your location data without even realizing it.',
    'Most information you put online is being stored indefinitely. Some of this information can end up becoming a target for hackers.',
    '',
  ];

  const [index, setIndex] = useState(0);
  const [countdown, setCountdown] = useState(10);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setIndex(index + 1);
    if (index + 1 === titles.length - 1) {
      setShow(true);
    }
    // setCountdown(10);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCountdown(countdown - 1);
  //   }, 1000);
  //   if (index + 1 === titles.length) {
  //     setShow(true);
  //     return () => clearInterval(interval);
  //   }
  //   if (countdown === -1) {
  //     setIndex(index + 1);
  //     setCountdown(10);
  //   }
  //   return () => clearInterval(interval);
  // }, [countdown, index, titles.length]);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-3/4 h-auto mt-24">
          <h1 className="text-4xl mb-10">Cyber Secuirty Bootcamp Lesson 3</h1>
          <div className="mb-10">
            <p className="text-6xl mb-4 font-semibold">{titles[index]}</p>
            <p className="text-2xl ">{descriptions[index]}</p>
          </div>
          {/* {!show && (
            <p className="text-gray-600 text-3xl mb-2">
              {countdown} seconds left
            </p>
          )} */}
          {show ? (
            <Link to="/about">
              <Confetti />
              <button
                onClick={handleClick}
                className="w-2/4 p-2 bg-black mb-4 text-white text-xl rounded-md"
              >
                End of Lessons
              </button>
            </Link>
          ) : (
            <button
              onClick={handleClick}
              className="w-1/4 p-2 bg-black mb-4 text-white text-xl rounded-md"
            >
              next page
            </button>
          )}
        </div>
      </div>
    </>
  );
}
