import React from 'react';
import { Link } from 'react-router-dom';

// page shown when user presses accept from the first page
export default function BootcampPage1() {
    return (
        <div>
            <div>
                <h1>Cyber Secuirty Bootcamp Lesson 1</h1>
                
            </div>

            <div>
                {/* This is the main question */}
                <h2>What does it really mean when you press “accept”?</h2>

                <p>If you don’t read the entire terms of use its best to assume your personal information is being collected</p>
                <h3>What kind of data is being collected?</h3>
                <ol>
                    <p><strong>1. Your Location</strong></p>
                        <ul>
                            By allowing companies access to this it can help companies and shops pinpoint our location allowing marketers to be notified when we walk past a store and how much time is spent there. This can add to our shopping or browsing experience but is giving companies an unfiltered look at our lives and the places we visit.
                        </ul>
                    <p>2. Addresses of which sites you visit/have visited (as well as where you click and your mouse strokes)</p>
                        <ul>
                            This feature pinpoints your interests and also helps companies further understand usability statistics.
                        </ul>
                    <p>3. Usernames and Passwords</p>
                    <p>4. Technical configurations of your device</p>
                </ol>
                    <p></p>
                {/* When clicking on button should bring you to next page */}
                <Link to="/bootcamp2" className="btn btn-primary">Continue to Lesson 2</Link>
            </div>  

        </div>
    )
}
