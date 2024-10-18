// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true');

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        setIsAuthenticated(false); // Update state on logout
    };

    useEffect(() => {
        const handleStorageChange = () => {
            setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <nav className="navbar">
            <ul className="nav-links">
                {isAuthenticated && (
                    <>
                        <li className="nav-item">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user">User</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/album">Album</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/photo">Photo</Link>
                        </li>
                    </>
                )}
            </ul>
            <div className="nav-logout">
                {isAuthenticated ? (
                    <Link to="/login" onClick={handleLogout}>Logout</Link>
                ) : (
                    <Link to="/login">Join</Link>
                )}
            </div>
        </nav>
    );
};

export default NavBar;