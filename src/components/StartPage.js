import React from 'react';
import { Link } from 'react-router-dom';

// start page
export default function StartPage() {
    return (
        <div>
            <h1>Welcome to our project</h1>
            <div>
                <p>Accept terms and conditions</p>
                {/* When clicking on button should bring you to next page */}
                <Link to="/accept" className="btn btn-primary">Accept</Link>
            </div>

            <div>
                <p>Decline terms and conditions</p>
                {/* When clicking on button should bring you to another page */}
                <Link to="/decline" className="btn btn-primary">Decline</Link>
            </div>
        </div>
    )
}


