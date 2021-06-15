import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};


export const getMatrix = () => async (dispatch) => {
  try {
    const { matrix } = await api.fetchMatrix();

    dispatch({ type: FETCH_ALL, payload: matrix });
  } catch (error) {
    console.log(error.message);
  }
};

export const createMatrix = (matrix) => async (dispatch) => {
  console.log('createMatrix is called with matrix', matrix);
  try {
    const { matrix } = await api.createMatrix(matrix);

    dispatch({ type: CREATE, payload: matrix });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMatrix = (id, matrix) => async (dispatch) => {
  try {
    const { matrix } = await api.updateMatrix(id, matrix);

    dispatch({ type: UPDATE, payload: matrix });
  } catch (error) {
    console.log(error.message);
  }
};


export const getFootnotes = () => async (dispatch) => {
  try {
    const { footnotes } = await api.fetchFootnotes();

    dispatch({ type: FETCH_ALL, payload: footnotes });
  } catch (error) {
    console.log(error.message);
  }
};

export const createFootnotes = (footnotes) => async (dispatch) => {
  console.log('createFootnotes is called with footnotes', footnotes);
  try {
    const { footnotes } = await api.createFootnotes(footnotes);

    dispatch({ type: CREATE, payload: footnotes });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateFootnotes = (id, footnotes) => async (dispatch) => {
  try {
    const { footnotes } = await api.updateFootnotes(id, footnotes);

    dispatch({ type: UPDATE, payload: footnotes });
  } catch (error) {
    console.log(error.message);
  }
};

