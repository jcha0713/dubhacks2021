import React from 'react';
import { Link } from 'react-router-dom';

// page shown when user presses accept from the first page
export default function BootcampPage1() {
    return (
        <div>
            <div>
                <h1>Cyber Secuirty Bootcamp Lesson 2</h1>
                
            </div>

            <div>
                <h2>What are cookies and why can they be dangerous?</h2>
                
                <p>
                    HTTP cookies, or internet cookies, are built specifically for Internet web browsers to track, personalize, and save information about each user’s session. A “session” just refers to the time you spend on a site.
                </p>
                <h2>What are they intended to be used for?</h2>
                    <ol>
                        <p>
                            <strong>Session Managment: </strong>For example, cookies let websites recognize users and recall their individual login information and preferences, such as sports news versus politics.
                        </p>
                        <p>
                            <strong>Personalization: </strong>Customized advertising is the main way cookies are used to personalize your sessions. You may view certain items or parts of a site, and cookies use this data to help build targeted ads that you might enjoy.

                        </p>
                        <p>
                            <strong>Tracking: </strong>Shopping sites use cookies to track items users previously viewed, allowing the sites to suggest other goods they might like and keep items in shopping carts while they continue shopping.
                        </p>
                    </ol>
                <h2>Third-Party Cookies</h2>
                    <ul>
                        <p>
                            Visiting a site with 10 ads could generate 10 cookies even if you didn’t interact with those ads.
                        </p>
                        <p>
                            Third-party cookies let advertisers or analytics companies track an individual's browsing history across the web on any.
                        </p>
                        <p>
                            You wouldn't want some random person tracking your browsing history.
                        </p>
                    </ul>

                <h3>If you have browsed for a particular product at an online store and then ads for similar products have followed you around the internet, you have experienced the power of tracking cookies.</h3>
                



                {/* When clicking on button should bring you to next page */}
                <Link to="/bootcamp3" className="btn btn-primary">Continue to Lesson 3</Link>
            </div>  

        </div>
    )
}
