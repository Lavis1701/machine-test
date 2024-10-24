// Action Types
export const ADD_BOOK = 'ADD_BOOK';
export const EDIT_BOOK = 'EDIT_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';

// Action Creators
export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book,
  };
};

export const editBook = (book) => {
  return {
    type: EDIT_BOOK,
    payload: book,
  };
};

export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id,
  };
};
