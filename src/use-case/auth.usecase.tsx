import { RegisterBodyRequest } from "@/entities/auth.entities";
import { ActionRegister } from "@/states/actions/auth.action";
import { AuthStoreState } from "@/states/reducers/authentication.reducers";
import { AuthSettingStore } from "@/states/setting-store/auth.setting";
import { AppRootState } from "@/states/stores";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const selector = (state:AppRootState) => state.auth;

const AuthUseCase = ():AuthSettingStore =>{
    const {
        isLogin,
        token,
    } = useSelector<
    AppRootState,
    AuthStoreState
    >(selector)
    const dispatch = useDispatch();
    const register = useCallback((body:RegisterBodyRequest)=> ActionRegister.register(body)(dispatch),[dispatch]);
    const logout = useCallback(()=> ActionRegister.logout()(dispatch),[dispatch]);

    return {
        isLogin,
        token,

        register,
        logout,
    }
}

export default AuthUseCase;