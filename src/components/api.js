// src/api.js
export const getData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Fetching posts
        const data = await response.json();
        
        return data.map(item => ({
            id: item.id,
            title: item.title,
            body: item.body, // Optional: If you want to include body content as well
        }));
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};