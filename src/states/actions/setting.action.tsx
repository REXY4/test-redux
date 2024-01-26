import { SettingType } from "@/types/SettngStoreType";
import {Dispatch} from "redux";


const setIncrement = (value:number) => (dispatch:Dispatch)=>{
    dispatch({
        type : SettingType.PENJUMLAHAN,
        payload : value
    })
}


export const SettingAction = {
    setIncrement
}