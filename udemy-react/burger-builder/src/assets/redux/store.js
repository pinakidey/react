import orderReducer from "./orderReducer"
import ingredientReducer from "./ingredientReducer"
import fillingReducer from "./fillingReducer";
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// Root Reducer
const rootReducer = combineReducers({
  orders: orderReducer,
  ingredients: ingredientReducer,
  //fillings: fillingReducer //TODO
})

// Logger Middleware
const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    }
  }
}

// Create Store
const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(logger, thunk),
  // other store enhancers if any
));

export default store;