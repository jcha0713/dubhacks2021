import { useState } from 'react';
import Popup from './Popup';
import Input from './Input';

// start page
export default function StartPage() {
  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsOpen(true);
  }

  return (
    <div>
      {isOpen ? (
        <Popup />
      ) : (
        <div className="w-screen h-screen grid place-items-center bg-accent">
          <div className="w-1/3 h-auto bg-white shadow-2xl rounded-2xl flex flex-col items-center">
            <h1 className="text-primary-dark text-4xl font-medium p-4 pb-3">
              Welcome
            </h1>
            <h2 className="text-center text-primary text-xl mb-4">
              Sign up today and get a free iphone! <br /> IT'S FREE!
            </h2>
            <form
              onSubmit={handleSubmit}
              className="w-52 flex flex-col items-center"
            >
              <Input type="text" placeholder="name" />
              <Input type="email" placeholder="email" />
              <Input type="password" placeholder="password" />
              <button
                type="submit"
                className="w-full h-12 p-1 m-1 mb-8 bg-primary text-white rounded-md hover:bg-primary-lighter transition-colors ease-in-out duration-200"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
