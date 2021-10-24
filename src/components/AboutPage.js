import React from 'react';
import Navbar from './Navbar';

// about page
export default function AboutPage() {
  return (
    <div className="w-screen h-full flex flex-col bg-accent">
      <Navbar />
      <div className="mt-8 mx-auto w-3/4">
        <h1 className="text-primary text-4xl font-semibold mb-8">
          About Our Project
        </h1>

        <div className="mb-12">
          <h3 className="text-3xl mb-2">
            Why did we choose to do this project
          </h3>
          <p className="leading-8 text-xl mb-12">
            When COVID-19 threatened our community we looked towards technology
            and increased our online presence to connect us to our communities
            and resources. As our online presence increases to help us navigate
            our new normal, it comes with understanding there are risks involved
            in doing so. We chose to implement a page asking users to accept a
            privacy policy because a study by PEW research found “about
            eight-in-ten Americans say they are asked to agree to a privacy
            policy at least monthly, including one-quarter of which who say this
            happens almost every day” therefor this application is relevant to
            most peoples lives (PEW). Furthermore, people may consent to the use
            of their personal data, without being sufficiently aware or informed
            of the nature and extent of potential implications. Our goal of this
            project was to get people thinking about how their increased online
            presence comes at a cost. We aren’t saying everyone should go change
            all their privacy setting immediately, but we want to create a more
            conscious community of technology users. A community where people
            can start to formulate opinions as to where they lie on the issue of
            personal data collection and cyber security.
          </p>

          <h3 className="text-3xl mb-2">
            Cyber Security ethics to think about
          </h3>
          <ul className="text-xl mb-2">
            - Should colleges be permitted to digitally track their teenage
            applicants?
          </ul>
          <ul className="text-xl mb-2">
            - Do we really want health insurance companies monitoring our
            Instagram posts?
          </ul>
          <ul className="text-xl mb-2">
            - As our lives become more dependent on technology are we ready to
            be observed and recorded to an unfathomable extent?
          </ul>
        </div>
        <h1 className="text-primary text-4xl font-semibold mb-8">Our Team</h1>
        <div className="flex justify-around items-center mb-12">
          <div>
            <img
              src="./img/Bryan.JPG"
              className="object-cover w-48 h-48 rounded-full mb-2"
              alt="Developer Bryan"
            />
            <p class="text-lg text-center text-primary-darker">
              Developer - Bryan Phan
            </p>
          </div>

          <div>
            <img
              src="./img/Carroll.JPG"
              className="object-cover w-48 h-48 rounded-full mb-2"
              alt="Developer Carroll"
            />
            <p class="text-lg text-center text-primary-darker">
              Developer - Ryan Carroll
            </p>
          </div>
          <div>
            <img
              src="./img/joohoon.JPG"
              className="object-cover w-48 h-48 rounded-full mb-2"
              alt="Developer Joohoon"
            />
            <p class="text-lg text-center text-primary-darker">
              Developer - Joohoon Cha
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
