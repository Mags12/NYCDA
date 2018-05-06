// actions/index.js
// Namespace actions
export const LOAD_REQUEST = 'movieList/LOAD_REQUEST';
export const LOAD_SUCCESS = 'movieList/LOAD_SUCCESS';
export const LOAD_FAILURE = 'movieList/LOAD_FAILURE';
import key from './api-key';

import fetch from 'isomorphic-fetch';

export const loadMovies = (searchParam, dispatch) => {
  let search = searchParam;
  return (dispatch) => {
    dispatch({ type: LOAD_REQUEST })
    
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${ClientId}&s=${searchVal}`)
        .then((response) => response.json())
            .then((responseJson) => {
            dispatch({
                type: LOAD_SUCCESS,
                payload: 
                   responseJson.Search
            })
            })
        .catch((err) => {
            dispatch({type: LOAD_FAILURE})
        })
  }
}

export const someActionCreator = (jsonData) => {
  return {
    type: LOAD_SUCCESS,
    data: jsonData.Search
  }
};