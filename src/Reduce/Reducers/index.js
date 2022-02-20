import { combineReducers } from "redux";
import userReducers from "./userReduces";

const rootReducer = combineReducers (
    {
        userReducers,
    }
);

export default rootReducer;