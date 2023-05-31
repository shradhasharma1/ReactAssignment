export const fetchPosts = () => dispatch => {
    dispatch({ type: 'FETCH_POSTS_REQUEST' });
  

    setTimeout(() => {
   
      const postsData = require('./postsData.json');
      dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: postsData });
    }, 1000);
  };
  