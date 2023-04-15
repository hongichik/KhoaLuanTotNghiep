import { User } from "@/types/user";

export const setUser = (user:User) =>{
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const removeUserAction = () =>{
    return {
        type: 'REMOVE_USER',
        payload: null
    }
}