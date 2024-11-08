import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Fetch popular books on component mount
  useEffect(() => {
    fetchPopularBooks();
  }, []);

  // Function to fetch popular books (default load)
  const fetchPopularBooks = async () => {
    setLoading(true);
    setError(null);
    setIsSearchActive(false); // Reset search state for popular books

    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=bestsellers`);
      setBooks(response.data.docs);
    } catch (err) {
      setError('Failed to fetch popular books. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch books based on user search
  const fetchBooks = async (bookTitle) => {
    setLoading(true);
    setError(null);
    setIsSearchActive(true); // Set search state for specific user search

    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${bookTitle}`);
      setBooks(response.data.docs);
    } catch (err) {
      setError('Failed to fetch books. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Book Finder</h1>
      <SearchBar onSearch={fetchBooks} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <BookList books={books} isSearchActive={isSearchActive} />
    </div>
  );
}

export default App;
