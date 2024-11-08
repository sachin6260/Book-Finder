import React from 'react';
import "../styles/BookItem.css"

function BookItem({ book }) {
  const coverImage = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/128x193.png?text=No+Cover';

  return (
    <div className="book-item">
      <img src={coverImage} alt={book.title} />
      <h2>{book.title}</h2>
      <p>Author: {book.author_name ? book.author_name.join(', ') : 'N/A'}</p>
      <p>First Published: {book.first_publish_year || 'N/A'}</p>
    </div>
  );
}

export default BookItem;
