// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';
import AlbumPage from './components/AlbumPage';
import PhotoPage from './components/PhotoPage';
import PrivateRoute from './components/PrivateRoute';
import NotFoundPage from './components/NotFoundPage';

const App = () => {
    // Add authentication state to trigger re-renders
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem('isAuthenticated') === 'true'
    );

    useEffect(() => {
        // Update state when localStorage changes
        const handleStorageChange = () => {
            setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true');
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <Router>
            <NavBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} /> 
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route 
                    path="/login" 
                    element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} 
                />
                <Route 
                    path="/home" 
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <HomePage />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/user" 
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <UserPage />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/album" 
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <AlbumPage />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/photo" 
                    element={
                        <PrivateRoute isAuthenticated={isAuthenticated}>
                            <PhotoPage />
                        </PrivateRoute>
                    } 
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App;