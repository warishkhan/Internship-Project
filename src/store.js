import { createStore, combineReducers, applyMiddleware } from "redux";
import dataReducer from './reducers/dataReducer';

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  data: dataReducer,
});

// Define a custom middleware to handle asynchronous actions without redux-thunk
const asyncMiddleware = store => next => action => {
    if (typeof action === 'function') {
      // If the action is a function (indicating asynchronous action), execute it
      return action(store.dispatch, store.getState);
    }
    // If the action is not a function, proceed with the next middleware
    return next(action);
  };
  
  const middleware = [asyncMiddleware];
  
  // Create Redux store
  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );

export default store;
