import React from 'react';
import BookForm from './BookForm';
import BookList from './BookList';
import './bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <h1>Book Management</h1>
      <BookForm />
      <BookList />
    </div>
  );
}

export default App;
