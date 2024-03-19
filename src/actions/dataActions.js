import axios from 'axios';

// Action creator to fetch data from the API
export const fetchData = () => {
  return async (dispatch) => {
    // Dispatch action to indicate that data fetching has started
    dispatch(fetchDataRequest());
    try {
      // Send a GET request to the API endpoint
      const response = await axios.get('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
      // Dispatch action with fetched data if request is successful
      dispatch({ type:'FETCH_DATA_SUCCESS', payload: response.data.user });
    } catch (error) {
      // Dispatch action with error message if request fails
      dispatch(fetchDataFailure(error));
    }
  };
};

// Action creator to indicate that data fetching has started
export const fetchDataRequest = () => ({
  type: 'FETCH_DATA_REQUEST'
});

// Action creator to handle successful data fetching
export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data
});

// Action creator to handle data fetching failure
export const fetchDataFailure = (error) => ({
  type: 'FETCH_DATA_FAILURE',
  payload: error
});
