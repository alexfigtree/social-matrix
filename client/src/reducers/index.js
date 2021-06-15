import { combineReducers } from 'redux';

import posts from './posts';
import matrixes from './matrixes';
import footnotes from './footnotes';

export const reducers = combineReducers({ posts });
