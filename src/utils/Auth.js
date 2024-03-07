import { getToken } from "utils/Storage"

export function isLogIn(){
    return getToken() ? true : false;
}