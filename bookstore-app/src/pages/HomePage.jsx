import React from 'react';
import {Link} from 'react-router-dom';


const HomePage = () => {
    return (
        <div>
            <h1>Welcome to the Bookstore</h1>
            <p>This is the home page of the bookstore application.</p>
            <p>Explore our colllection of books and find your next read!</p>
            <Link to="/books">Go to Book List</Link>
        </div>
    );
}


export default HomePage;