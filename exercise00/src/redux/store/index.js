import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "../reducers";
import { createStore } from 'redux';

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

export default store;
