// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Make sure this import is correct

const LandingPage = () => {
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    const handleJoin = () => {
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="landing-container">
            <h1>Welcome to the Landing Page</h1>
            {!isAuthenticated && (
                <button onClick={handleJoin} className="join-button">Join</button>
            )}
        </div>
    );
};

export default LandingPage;