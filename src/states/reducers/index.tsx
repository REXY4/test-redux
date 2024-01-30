import { Reducer, combineReducers,AnyAction } from "redux"
import SettingReducer from "./settingReducers";
import AuthReducers from "./authentication.reducers";


const reducers = combineReducers({
    auth : AuthReducers,
    setting : SettingReducer
})


export default reducers;