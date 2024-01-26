import { Reducer, combineReducers,AnyAction } from "redux"
import SettingReducer from "./settingReducers";


const reducers = combineReducers({
    setting : SettingReducer
})


export default reducers;