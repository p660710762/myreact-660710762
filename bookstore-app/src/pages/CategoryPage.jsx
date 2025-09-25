import React from 'react';
import {Link} from 'react-router-dom';


const CategoryPage = () => {
  return (
     <div>
            <h1>Welcome to the CategoryPage</h1>
            <Link to="/about">Go to Book List</Link>
        </div>
    );
}

export default CategoryPage;
