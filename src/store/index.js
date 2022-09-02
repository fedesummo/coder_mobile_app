import { createStore, combineReducers, applyMiddleware } from "redux";
import auth from "./auth/reducer";
import userReducer from "./user/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
  auth
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
