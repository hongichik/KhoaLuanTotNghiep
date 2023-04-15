import { User } from "@/types/user";
const initialState = {
    user: {},
}
const userReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case 'SET_USER': {
            return {
                ...state,
                user: action.payload
            }
        }
        case 'REMOVE_USER': {
            return {
                ...state,
                user: {}
            }
        }
        default:
            return state;
    }
};
export default userReducer;