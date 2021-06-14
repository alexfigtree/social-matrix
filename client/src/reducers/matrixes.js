import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (matrixes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case LIKE:
      return matrixes.map((matrix) => (matrix._id === action.payload._id ? action.payload : matrix));
    case CREATE:
      return [...matrixes, action.payload];
    case UPDATE:
      return matrixes.map((matrix) => (matrix._id === action.payload._id ? action.payload : matrix));
    case DELETE:
      return matrixes.filter((matrix) => matrix._id !== action.payload);
    default:
      return matrixes;
  }
};

