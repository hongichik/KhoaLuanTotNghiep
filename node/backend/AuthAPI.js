import AxiosClass from "../utils/axios.js";

const CheckLogin = async (auth) => {
    const Axios =  new AxiosClass(auth);
    const result = await Axios.post('api/checkUser', {});
    
    return result;

}

const AuthAPI = {
    CheckLogin,
}

export default AuthAPI;