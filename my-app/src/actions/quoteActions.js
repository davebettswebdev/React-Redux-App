import axios from 'axios';

export const FETCH_QUOTES_START = 'FETCH_QUOTES_START';
export const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS';
export const FETCH_QUOTES_FAILURE = 'FETCH_QUOTES_FAILURE';
export const FILTER_QUOTES = 'FILTER_QUOTES';

export const getQuotes = number => dispatch => {
  dispatch({type: FETCH_QUOTES_START});
  // console.log('getQuotes fired');
  axios.get(`https://breaking-bad-quotes.herokuapp.com/v1/quotes/${number}`)
    .then( response => {
      // console.log('API response: ', response.data)
      dispatch({type: FETCH_QUOTES_SUCCESS, payload: response.data})
    })
    .catch( err => {
      dispatch({type: FETCH_QUOTES_SUCCESS, payload: err})
    })
}

export const filterQuotes = term => {
  return {
    type: FILTER_QUOTES,
    payload: term
  }
}