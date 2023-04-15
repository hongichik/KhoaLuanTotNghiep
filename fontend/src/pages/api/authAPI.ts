import { EnCode } from "@/utils/encode";
import Cookie from "@/utils/cookie";
import Axios from "@/utils/axios";
import { removeUserAction } from '../../actions/userAction';

const Login = async (data:FormData)=>{
    const result = await Axios.post('api/login',data);
    if(result)
    {
        Cookie.SetCookie('accessToken',EnCode(result.authorisation.token));
        return result;
    }
    else
    {
        return result;
    }
    
    
}

const Register = async (data: FormData) => {
    const result = await Axios.post('api/register', data);
    if (!result.errors) {
        Cookie.SetCookie('accessToken', EnCode(result.authorisation.token));
        return result;
    }
    else {
        return result;
    }
}
const CheckLogin = async () => {

    if (Cookie.GetCookie('accessToken') === undefined)
        return false;
    const result = await Axios.post('api/checkUser', {});
    if (result.error) {
        Cookie.RemoveCookie('accessToken');
        return false;
    }
    else {
        return result;
    }

}


const Logout = async () => {
    const data = await Axios.post('api/logout', {});
    if (data.status === "success") {
        Cookie.RemoveCookie('accessToken');
        const action = removeUserAction();
        return action;
    }
    return false;
}

const AuthAPI = {
    Login,
    CheckLogin,
    Register,
    Logout
}

export default AuthAPI;