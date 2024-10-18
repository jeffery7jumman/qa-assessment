// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import './HomePage.css';
import { getData } from './api'; // Ensure this import is correct
import Search from './Search'; // Import the Search component

const HomePage = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); // State for filtered data
    const [showAll, setShowAll] = useState(false); // State to manage "View All" button

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData();
            setData(result);
            setFilteredData(result); // Set initial filtered data to all data
        };
        fetchData();
    }, []);

    const handleViewAll = () => {
        setShowAll(true);
    };

    return (
        <div className="home-container"> {/* Use the home-container class */}
            <h1>Welcome to the Home Page</h1>
            <Search data={data} setFilteredData={setFilteredData} /> {/* Add the Search component */}
            {filteredData.length > 0 && filteredData !== data ? ( // Conditional rendering based on filteredData length
                <div>
                    <ul>
                        {filteredData.slice(0, showAll ? filteredData.length : 3).map(item => ( // Display only 3 or all items based on showAll state
                            <li key={item.id}>{item.title}</li> // Displaying the title of the posts
                        ))}
                    </ul>
                    {!showAll && filteredData.length > 3 && ( // Show "View All" button if there are more than 3 results
                        <button onClick={handleViewAll} className="view-all-button">View All</button>
                    )}
                </div>
            ) : (
                filteredData.length === 0 && <p>No results found.</p> // Message when there are no results
            )}
        </div>
    );
};

export default HomePage;