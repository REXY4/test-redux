import axios from "axios";
import { Dispatch } from "redux";
import { baseUrl, configPrimary } from "../../../config/env";
import { RegisterBodyRequest } from "@/entities/auth.entities";
import { AuthStoreType } from "@/types/AuthStoreType";

const register = (body:RegisterBodyRequest) => async (dispatch:Dispatch) =>{
    try {
        const response = await axios.post(`${baseUrl.main}/register`, body, {
            headers : {
                "Content-Type" : "application/json"
            }
        });
        if(response.data.statusCode == 200){
            dispatch({
                type : AuthStoreType.REGISTER,
                isLogin : true,
                token : response.data.data.token
            })
            window.alert("Login Berhasil")
            setTimeout(()=>{
                window.location.href = "/home"
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const logout = () => async (dispatch:Dispatch) =>{
    dispatch({
        type : AuthStoreType.LOGOUT,
    })
    window.location.reload();
}


export const ActionRegister = {
    register,
    logout,
}