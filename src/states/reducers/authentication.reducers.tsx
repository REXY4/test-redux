import { AnyAction } from "redux";
import { AuthSettingStore } from "../setting-store/auth.setting";
import { AuthStoreType } from "@/types/AuthStoreType";

type AuthStoreState = Omit<
    AuthSettingStore,
    "register" | 
    "logout"
>

const INITIAL_STATE: AuthStoreState= {
    isLogin : false,
    token : null
}


const AuthReducers = (state:AuthSettingStore | any = INITIAL_STATE, action :AnyAction )=>{
    const {type, payload} = action;
    switch (type) {
        case AuthStoreType.REGISTER:
            return {
                ...state,
                isLogin : action.isLogin,
                token : action.token
            }
        case AuthStoreType.LOGOUT:
            return {
                isLogin : false,
                token : null
            }    
        default:
            return state;
    } 
}

export type {AuthStoreState}
export default AuthReducers;