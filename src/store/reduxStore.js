import { createStore, combineReducers } from "redux";
import HeaderReducer from "./reducers/HeaderReducer";
import TrainingReducer from "./reducers/TrainingReducer";
import SerivceReducer from "./reducers/ServiceReducer";

let reducers = combineReducers({
    header:HeaderReducer,
    training:TrainingReducer,
    services:SerivceReducer
})
let store = createStore(reducers);
export default store;
