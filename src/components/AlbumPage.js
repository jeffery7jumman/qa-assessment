// src/components/AlbumPage.js
import React, { useEffect, useState } from 'react';
import './AlbumPage.css'; // Optional for specific styles

const AlbumPage = () => {
    const [albums, setAlbums] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setAlbums(data))
            .catch((error) => setError(error.message));
    }, []);

    if (error) {
        return <p>Error fetching data: {error}</p>;
    }

    return (
        <div className="container">
            <h2>Album List</h2>
            <ul>
                {albums.map((album) => (
                    <li key={album.id}>
                        {album.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumPage;