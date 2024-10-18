// src/components/Auth.js
export const isAuthenticated = () => {
    return !!localStorage.getItem('authToken'); // Simple auth check
};

export const logout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/login'; // Redirect to login page
};