import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from './redux/actions';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          {book.title} by {book.author}
          <button className='btn btn-outline-danger m-3' onClick={() => dispatch(deleteBook(book.id))}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
