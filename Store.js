import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import StudentReducer from "./Reducers/StudentReducer";

const store = createStore(StudentReducer, applyMiddleware(thunk));

export default store;
