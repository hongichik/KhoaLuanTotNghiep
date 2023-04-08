import { EnCode, DeCode } from "@/utils/encode";
import Cookie from "@/utils/cookie";
import Axios from "@/utils/axios";

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

const CheckLogin = async () => {
    const result = await Axios.post('api/checkUser',{});
    return result;
}

const AuthAPI = {
    Login,
    CheckLogin
}

export default AuthAPI;