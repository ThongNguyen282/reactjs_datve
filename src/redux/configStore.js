import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { QuanLyDatVeReducers } from "./reducers/QuanLyDatVeReducers";


const rootReducer = combineReducers({
    QuanLyDatVeReducers
})

export const store = createStore(rootReducer, applyMiddleware(thunk));