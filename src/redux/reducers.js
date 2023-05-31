const initialState = {
    posts: [],
    isLoading: false,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_REQUEST':
        return {
          ...state,
          isLoading: true,
        };
      case 'FETCH_POSTS_SUCCESS':
        return {
          ...state,
          isLoading: false,
          posts: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  