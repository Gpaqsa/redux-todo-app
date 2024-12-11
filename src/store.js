import { createStore, applyMiddleware } from 'redux';
import { todoReducer } from './features/todoSlice';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
    todoReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;