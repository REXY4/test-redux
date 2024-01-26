import { SettingAction } from "@/states/actions/setting.action";
import { SettingStoreState } from "@/states/reducers/settingReducers";
import { SettingStore } from "@/states/setting-store/setting.store";
import { AppRootState } from "@/states/stores";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";


const settingSelector = (state:AppRootState) => state.setting;

const SettingUseCase = ():SettingStore =>{
    const {
        angka
    } = useSelector<
    AppRootState,
    SettingStoreState
    >(settingSelector)
    const dispatch = useDispatch();

    const setIncrement = useCallback((value:number)=>SettingAction.setIncrement(value)(dispatch),[dispatch]);

    return {
        angka,
        
        //function
        setIncrement,
    }

}

export default SettingUseCase;