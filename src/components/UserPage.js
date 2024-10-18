// src/components/UserPage.js
import React, { useEffect, useState } from 'react';
import './UserPage.css'; // Optional for specific styles

const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setUsers(data))
            .catch((error) => setError(error.message));
    }, []);

    if (error) {
        return <p>Error fetching data: {error}</p>;
    }

    return (
        <div className="container"> {/* Added container class for styling */}
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPage;