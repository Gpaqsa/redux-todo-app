import {createStore, combineReducers, applyMiddleware} from "redux";
import todoReducer from "./features/todoSlice.js";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";

const rootReducer = combineReducers({
    todos: todoReducer, // Assign the todoReducer to the 'todos' slice of state
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
