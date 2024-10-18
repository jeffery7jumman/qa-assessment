// src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Hardcoded credentials for demonstration
        if (username === 'testuser' && password === 'password123') {
            localStorage.setItem('isAuthenticated', 'true'); // Set authenticated state
            navigate('/home'); // Redirect to home page after login
            window.location.reload(); // Force reload to reflect navbar changes
        } else {
            alert('Invalid credentials'); // Alert for invalid login
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Sign In</h2>
            <form onSubmit={handleLogin} className="login-form">
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Username" 
                    required 
                    className="login-input" 
                />
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Password" 
                    required 
                    className="login-input" 
                />
                <button type="submit" className="login-button">Join</button>
            </form>
        </div>
    );
};

export default LoginPage;