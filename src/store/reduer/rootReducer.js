import { combineReducers } from "redux";
import { getProfileReducer } from "./getProfileREducer";

const rootReducer = combineReducers({
    getProfileReducer:getProfileReducer 
})
export default rootReducer