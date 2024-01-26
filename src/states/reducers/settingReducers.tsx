import { AnyAction } from "redux"
import { SettingStore } from "../setting-store/setting.store"
import {ActionFromReducer} from "redux"
import { SettingType } from "@/types/SettngStoreType"


type SettingStoreState = Omit<
    SettingStore,
    "setIncrement" 
>

const INITIAL_STATE :SettingStoreState = {
    angka : null
}

const SettingReducer = (state:SettingStoreState = INITIAL_STATE, action:AnyAction ) =>{
    switch(action.type){
        case SettingType.PENJUMLAHAN:
            return {
                ...state,
                angka : (state.angka == null ? 0 : state.angka) + action.payload,
            }
        default :{
            return state;    
        }
    }
}


export type {SettingStoreState}
export default  SettingReducer


