import {
    FETCH_QUOTES_START,
    FETCH_QUOTES_SUCCESS,
    FETCH_QUOTES_FAILURE,
    FILTER_QUOTES
  } from '../actions/quoteActions';
  
  const initialState = {
    quotes: [],
    isFetching: false,
    error: ''
  };
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCH_QUOTES_START:
        return {
          ...state,
          isFetching: true
        }
      case FETCH_QUOTES_SUCCESS:
        console.log('payload: ', action.payload);
        return {
          ...state,
          quotes: action.payload,
          isFetching: false,
          error: ''
        }
      case FETCH_QUOTES_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        }
        case FILTER_QUOTES:
          return {
            ...state,
            quotes: state.quotes.filter( quote => {
              return quote.author.toLowerCase().includes(action.payload.toLowerCase());
            })
          }
      default: 
        return state;
    }
  }
  
  export default reducer;