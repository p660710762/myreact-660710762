import React from 'react';
import {Link} from 'react-router-dom';

const BookPage = () => {
    return (
        <div>
            <h1>Welcome to the BOOKDETAILS</h1>
            <p>This is the BOOKDETAILS of the bookstore application.</p>
            <p>Explore our colllection of books and find your next read!</p>
            <Link to="/categories">Go to Book List</Link>
        </div>
    );
}

export default BookPage;