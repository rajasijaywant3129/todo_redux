import { createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import {TodoReducer} from "./Reducer/todoReducers"

const reducer = combineReducers({
    //this contain all reducers
    Todo:TodoReducer,
});

const initialState ={};
const middleware =[thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

