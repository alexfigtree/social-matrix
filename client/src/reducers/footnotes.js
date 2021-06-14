import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (footnotes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return footnotes.map((footnote) => (footnote._id === action.payload._id ? action.payload : footnote));
    case CREATE:
      return [...footnotes, action.payload];
    case UPDATE:
      return footnotes.map((footnote) => (footnote._id === action.payload._id ? action.payload : footnote));
    case DELETE:
      return footnotes.filter((footnote) => footnote._id !== action.payload);
    default:
      return footnotes;
  }
};

