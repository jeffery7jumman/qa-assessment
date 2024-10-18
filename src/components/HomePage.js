// src/components/HomePage.js
import React from 'react';
import './HomePage.css'; // Make sure this import is correct

const HomePage = () => {
    return (
        <div className="home-container"> {/* Use the home-container class */}
            <h1>Welcome to the Home Page</h1>
            {/* Remove the Logout button here */}
        </div>
    );
};

export default HomePage;