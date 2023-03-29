import { combineReducers } from "redux";
import reducer from './Reducers_register'
import current_user_reducer from "./Reducer_login";
const reducers=combineReducers({
    user_func:reducer,
    user:current_user_reducer
})
export default reducers