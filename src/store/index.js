import { createStore, combineReducers, applyMiddleware } from "redux";
import authentication from "./authentication/reducer";
import userReducer from "./user/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
  authentication
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
