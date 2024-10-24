import { createStore } from 'redux';
import { bookReducer } from './bookReducer';

// Create the store
const store = createStore(bookReducer);

export default store;
