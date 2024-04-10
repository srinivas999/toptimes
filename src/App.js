// Import the necessary dependencies
import React, { useState, useEffect } from 'react';
import ArticleList from './ArticleList';
import "./App.css"

// Functional component for the App
function App() {
  const API_KEY = 'iNCVOROh36nj7pbGmt6QT1bYR3SXtyXx';
  const API_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;

  // State variable initialized as an empty
  const [articles, setArticles] = useState([]);

  // Use the useEffect hook to fetch articles when the component mounts
  useEffect(() => {
    fetchArticles();
  }, []);

  // Function to fetch articles from the NY Times API
  const fetchArticles = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setArticles(data.results);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  // Return the JSX to render the component
  return (
    <div>
      <h1 className="header">NY Times Most Popular Articles</h1>
      <div className="container">
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}

// Export the App component
export default App;