import React from 'react';
import {Link} from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <h1>Welcome to the AboutPage</h1>
            <Link to="/contact">Go to Book List</Link>
        </div>
    );
}

export default AboutPage;