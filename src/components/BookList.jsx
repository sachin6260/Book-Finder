import React from 'react';
import BookItem from './BookItem';
import '../styles/BookList.css';

function BookList({ books, isSearchActive }) {
  if (books.length === 0) {
    return <p>No books found. Try searching for another title.</p>;
  }

  return (
    <div>
      <h2>{isSearchActive ? 'Search Results' : 'Popular Books'}</h2>
      <div className="book-list">
        {books.map((book) => (
          <BookItem key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
