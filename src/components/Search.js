// src/components/Search.js
import React, { useState } from 'react';
import './Search.css'; // Optional: Import a separate CSS file for styles

const Search = ({ data, setFilteredData }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        if (term) {
            const filtered = data.filter(item =>
                (item.title && item.title.toLowerCase().includes(term)) || 
                (item.body && item.body.toLowerCase().includes(term))
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(data); // Reset to full data if the search term is cleared
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
            />
            {searchTerm && (
                <button
                    className="clear-button"
                    onClick={() => {
                        setSearchTerm('');
                        setFilteredData(data); // Reset filtered data to full data
                    }}
                >
                    ✖️
                </button>
            )}
        </div>
    );
};

export default Search;