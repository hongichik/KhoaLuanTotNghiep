import Image from "next/image";
import { useState } from 'react';
import AuthAPI from "@/pages/api/authAPI";
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/reducers";
import { setUser } from '../../actions/userAction';
import { User } from "@/types/user";

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState(false);
    const router = useRouter();
    const infoUser = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();
    const SubmitForm = async (event:any) =>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const result = await AuthAPI.Login(formData);
        if(result.status === 'success')
        {
            const userData: User = {
                avatar: result.user.avatar,
                name: result.user.name,
                id: result.user.id

            }

            const action = setUser(userData);
            dispatch(action);
            router.push('/about');
            
        }
        else
            setError(!result);
    }
    return (
        <form className="w-full flex flex-col" onSubmit={SubmitForm}>
            <div className="relative z-0 w-full mb-6 group">
                <input name="email" type="email" className="block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input name="password" type={!showPass ?'password' : 'text'} className="block py-2.5 px-0 pr-7 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                <label className="peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mật khẩu</label>
                {
                    showPass ?
                        <Image className="absolute right-0 top-2" onClick={()=>setShowPass(!showPass)} src={'/icon/eye.svg'} alt="icon eye" width={25} height={25} />
                        : 
                        <Image className="absolute right-0 top-2" onClick={()=>setShowPass(!showPass)} src={'/icon/uneye.svg'} alt="icon eye" width={25} height={25} />
                }

            </div>
            {error && <span className="text-red-600 pb-5">Tài khoản hoặc mật khẩu không chính xác</span>}
            {/* <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                    <input type="checkbox"  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"/>
                </div>
                <label className="ml-2  text-gray-900 dark:text-gray-300">Ghi nhớ đăng nhập</label>
            </div> */}

            <button type="submit" className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center">
                Đăng nhập
            </button>
        </form>

    )
}

export default Login;