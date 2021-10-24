import React from 'react';
import { Link } from 'react-router-dom';

// components

// page shown when user presses decline from the first page 
export default function DeclinePage() {
    return (
        <div>

            <div>
                <h1>You will not be able to use our services since you decided to decline!</h1>
            </div>

            <div>
                <h2>Go back to previous page</h2>
                {/* When clicking on button should bring you back to start page */}
                <Link to="/start" className="btn btn-primary">Go Back</Link>
            </div>    
        </div>
    
    )
}
