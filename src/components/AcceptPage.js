import React from 'react';
import { Link } from 'react-router-dom';

// page shown when user presses accept from the first page
export default function AcceptPage() {
    return (
        <div>
            <div>
                <h1>You have given us access to your Data, your personal data is no longer private!</h1>
            </div>

            <div>
                <h2>You've been sent to Cyber Security Bootcamp</h2>
                {/* When clicking on button should bring you to next page */}
                <Link to="/bootcamp1" className="btn btn-primary">Enter Cybersecurty Bootcamp</Link>
            </div>  

        </div>
    )
}
