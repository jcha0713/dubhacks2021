import React from 'react';
import { Link } from 'react-router-dom';

// page shown when user presses accept from the first page
export default function BootcampPage1() {
    return (
        <div>
            <div>
                <h1>Cyber Secuirty Bootcamp Lesson 3</h1>

            </div>

            <div>
                <h2>What is your personal data being user for?</h2>
                <ol>
                    <p>
                        <strong>Targeted ads: </strong>
                        <ul>
                            A profile is created about you - the topics you search for, the websites you visit, your location, the links you “like” on social media, etc. - that allows websites to develop a personalized advertising experience just for you.
                        </ul>
                    </p>
                    <p>
                        <strong>Scientists study it: </strong>
                        <ul>
                            Social scientists look at your data to understand what people decide to share, post like, and so on, in order to better observe an array of contemporary social trends.
                        </ul>
                    </p>
                    <p>
                        <strong>Websites use it for internal research: </strong>
                        <ul>
                            Internal research examines the links you click on, the media you share, or the time spent per page in order to optimize the user experience.
                        </ul>
                    </p>
                    <p>
                        <strong>Companies sell your data: </strong>
                        <ul>
                            There is a whole economy surrounding the buying and selling of personal data. People will pay for anything ranging from your income to your court date details.
                        </ul>
                    </p>
                    <p>
                        <strong>Advertisers use it to create “consumer categories”: </strong>
                        <ul>
                            Advertisers will study huge chunks of aggregated data to create consumer categories. By doing this they group you into defined categories and use them to create even more refined targeted advertisements.
                        </ul>
                    </p>
                    <p>
                        <strong>Insurance companies analyze it: </strong>
                        <ul>
                            Insurance companies will buy data to set rates or premiums. Some will even browse customers’ social media pages in hopes of denying or confirming claims.
                        </ul>
                    </p>
                    <p>
                        <strong>Thieves use it to steal your identity.: </strong>
                        <ul>
                            Thieves would love to get your hands on your name and credit card information.
                        </ul>
                    </p>
                    <p>
                        <strong>Social media sites use it to help you find friends: </strong>
                        <ul>
                            Social media sites will compare your data against others to try and find people you might know
                        </ul>
                    </p>
                    <p>
                        <strong>Apps use it to snoop on your whereabouts: </strong>
                        <ul>
                            If you have a smartphone you can think of that as a personal tracking device because there’s a good chance you’re sharing your location data without even realizing it. 
                        </ul>
                    </p>
                    <p>
                        <strong>It is being stored forever: </strong>
                        <ul>
                            Most information you put online is being stored indefinitely. Some of this information can end up becoming a target for hackers.
                        </ul>
                    </p>
                    
                </ol>
                {/* When clicking on button should bring you to next page */}
                <Link to="/about" className="btn btn-primary">Learn More</Link>
            </div>  

        </div>
    )
}
