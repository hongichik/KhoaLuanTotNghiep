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
        default:
            return state;
    }
};
export default userReducer;