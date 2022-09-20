import { createStore, combineReducers, applyMiddleware } from "redux";
import auth from "./auth/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
