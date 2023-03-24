import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { moviesReducer } from "../Reducer/movieReducer";

const Store = createStore(moviesReducer, applyMiddleware(thunk));

export default Store;
