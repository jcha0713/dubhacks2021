import React from 'react';
import Navbar from './Navbar';

// about page
export default function AboutPage() {
    return (
        <div>
            <Navbar/>

            <div>
                <h1>About Page View</h1>
            </div>

            <div>
                <h3>Why did we choose to do this project</h3>
                <p>
                When COVID-19 threatened our community we looked towards technology and increased our online presence to connect us to our communities and resources. As our online presence increases to help us navigate our new normal, it comes with understanding there are risks involved in doing so. The internet can be a not-so-safe place and it’s important to understand the risks involved as we continue to rely on technology. We chose to implement a page asking users to accept a privacy policy because a study by PEW research found “about eight-in-ten Americans say they are asked to agree to a privacy policy at least monthly, including one-quarter of which who say this happens almost every day” therefor this application is relevant to most peoples lives (PEW). Furthermore, people may consent to the use of their personal data, without being sufficiently aware or informed of the nature and extent of potential implications. Our goal of this project was to get people thinking about how their increased online presence comes at a cost. We aren’t saying everyone should go change all their privacy setting immediately, but we want to create a more conscious community of technology users. A community where people can start to formulate opinions as to where they lie on the issue of personal data collection and cyber security.
                </p>

                <h3>The future of personal data collection</h3>
                
                    <ul><a href="https://interestingengineering.com/what-data-are-voice-assistants-collecting-and-how-to-protect-yourself">Smart Speakers</a></ul>
                    <ul><a href="https://www.wired.com/2016/01/under-armour-healthbox/">Sensor Embedded Clothing</a></ul>
                    <ul><a href="https://www.wired.com/story/apple-watch-heart-monitoring-pros-and-cons/">Wearable Health Monitors</a></ul>
                    <ul><a href="https://www.orlandosentinel.com/news/breaking-news/os-amazon-orlando-police-cameras-downtown-20180524-story.html">Facial regognition enabled surveillance cameras</a></ul>
                
                <h3>Cyber Security ethics to think about</h3>
                <ul>Should colleges be permitted to digitally track their teenage applicants?</ul>
                <ul>Do we really want health insurance companies monitoring our Instagram posts?</ul>
                <ul>As our lives become more dependent on technology are we ready to be observed and recorded to an unfathomable extent?</ul>
            </div>

            <div className="card">
                <div className="card-body">
                <h1>Our Team</h1>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src="./img/Bryan.JPG" className="cicrImg" alt="Developer Bryan"></img>
                            <div className="card-body">
                                <h5 className="card-title text-center">Developer -Bryan Phan</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="" className="circImg" alt="Developer"></img>
                            <div className="card-body">
                                <h5 className="card-title text-center">Developer -</h5>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card h-100">
                            <img src="" className="circImg" alt="Developer"></img>
                            <div className="card-body">
                                <h5 className="card-title text-center">Developer -</h5>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </div>
        </div>
        
    )
}