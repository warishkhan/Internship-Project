// Define initial state for the data reducer
const initialState = {
  myData: {},   // Object to hold fetched data
  loading: false, // Flag to indicate loading state
  error: null // Variable to store any error that occurs during data fetching
};

// Define the data reducer function
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    // Action dispatched when data fetching begins
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    // Action dispatched when data fetching is successful
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        myData: action.payload // Update state with fetched data
      };
    // Action dispatched when data fetching fails
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload // Update state with error message
      };
    // Default case, return current state if action type doesn't match
    default:
      return state;
  }
};

// Export the data reducer function
export default dataReducer;

  