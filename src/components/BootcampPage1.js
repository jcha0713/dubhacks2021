import React from 'react';
import { Link } from 'react-router-dom';

// page shown when user presses accept from the first page
export default function BootcampPage1() {
    return (
        <div>
            <div>
                <h1>Class Session 1</h1>

            </div>

            <div>
                <p>Answer</p>
                {/* When clicking on button should bring you to next page */}
                <Link to="/bootcamp2" className="btn btn-primary">Next</Link>
            </div>  

        </div>
    )
}
