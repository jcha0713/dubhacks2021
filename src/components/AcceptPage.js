import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// page shown when user presses accept from the first page
export default function AcceptPage() {
  const [bgRed, setBgRed] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgRed(!bgRed);
    }, 1000);
    return () => clearInterval(interval);
  }, [bgRed]);

  return (
    <div
      className={`w-screen h-screen flex flex-col items-center justify-center transition-colors ease-in-out duration-1000 bg-red-600`}
    >
      <div className="mb-36 z-10">
        <h1 className="text-9xl text-center font-bold mt-8 mb-2">Uh-oh</h1>
        <p className="text-center font-medium text-4xl">
          You have given us access to your Data, <br /> your personal data is no
          longer private!
        </p>
      </div>

      <p className="text-center font-medium text-2xl">
        You've been sent to Cyber Security Bootcamp
      </p>
      {/* When clicking on button should bring you to next page */}
      <Link to="/bootcamp1">
        <button className="w-96 h-24 p-1 m-4 bg-black text-white text-xl rounded-md">
          Enter Cybersecurty Bootcamp
        </button>
      </Link>
    </div>
  );
}
