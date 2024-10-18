// src/components/PhotoPage.js
import React, { useEffect, useState } from 'react';
import './PhotoPage.css'; // Add the CSS file for styling

const PhotoPage = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=50') // Limit to 50 photos
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPhotos(data);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false); // Stop loading in case of an error
      });
  }, []);

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  return (
    <div className="photo-page-container">
      <h2>Photo Gallery</h2>
      {loading ? (  // Conditional rendering for loading
        <p>Loading photos...</p> 
      ) : (
        <div className="photo-grid">
          {photos.map((photo) => (
            <div key={photo.id} className="photo-item">
              <img src={photo.thumbnailUrl} alt={photo.title} className="photo-thumbnail" />
              <p>{photo.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PhotoPage;