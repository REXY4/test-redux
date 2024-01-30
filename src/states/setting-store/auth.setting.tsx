import { RegisterBodyRequest } from "@/entities/auth.entities";

interface AuthSettingStore {
    isLogin : boolean
    token : string | null
                                        //jika menggunakan async tambahkan promise
    register(body:RegisterBodyRequest):Promise<void>
    logout():Promise<void>
}

export type {AuthSettingStore};