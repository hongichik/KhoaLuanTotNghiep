import AuthAPI from "@/components/api/authAPI";
import Image from "next/image";
import { useEffect, useState } from 'react';
import Dropzone from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { RootState } from "@/reducers";
import { User } from "../type/user";
import { useLayoutContext } from '../../layouts/index';

interface ErrorObject {
    avatar?: string;
    passwordCheck?: String;
    name?: String;
    email?: String;
    phone?: String;
    address?: String;
    password?: String;

}
const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const inputClassName = "block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
    const lableClassName = "peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
    const [fileAvatar, setFile] = useState<File | null>(null);
    const [error, setError] = useState<ErrorObject>({});
    const user = useLayoutContext();
    const router = useRouter();
    const phoneNumberInputChange = (event: React.FormEvent<HTMLInputElement>) => {
        let value = event.currentTarget.value;
        if (value === '') {
            return;
        }
        else if (isNaN(Number(value)) || value.charAt(0) === '0') {
            return;
        }
        value = '0' + value;
        event.currentTarget.value = value;
    }
    const SubmitForm = async (event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        if (fileAvatar)
            formData.append('avatar', fileAvatar);
        if (formData.get('password') != formData.get('passwordCheck')) {
            setError({
                ...error,
                passwordCheck: "Mật khẩu không trùng khớp"
            });
            return;
        }
        else {
            setError({
                ...error,
                passwordCheck: undefined
            });
        }
        const result = await AuthAPI.Register(formData);
        if (!result.errors) {
            const userData: User = {
                avatar: result.user.avatar,
                name: result.user.name,
                id: result.user.id,
                address: result.user.address,
                phone: result.user.phone,
                login: true,

            }
            user?.setUser(userData);
            router.push('/');
        }
        else {
            setError({ ...error, ...result.errors });
        }
    }
    // useEffect(() => {
    //     if (!auth) {
    //       router.push('/');
    //     }
    //   }, [auth, router]);
    return (
        <form className="w-full pb-24 flex flex-col" onSubmit={SubmitForm}>
            <div className="flex flex-col w-full mb-6">
                <label className="text-gray-400">Avatar</label>
                <Dropzone onDrop={(e) => setFile(e[0])}>
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()} className="border-2 flex w-36 m-auto h-36 border-dashed border-gray-400 rounded-full">
                            <input {...getInputProps()} {...getInputProps({ accept: "image/png,image/jpeg" })} />
                            {fileAvatar ? (
                                <Image src={URL.createObjectURL(fileAvatar)} alt="Avatar" className=" object-cover rounded-full" width={144} height={144} />
                            ) : (
                                <p className="text-gray-400 m-auto text-center">Chọn avatar của bạn</p>
                            )}
                        </div>
                    )}
                </Dropzone>

            </div>
            {error?.avatar &&
                <span className="text-red-600 pb-5">{error.avatar}</span>
            }
            <div className="relative z-0 w-full mb-3 group">
                <input name="name" type="text" className={inputClassName} placeholder=" " required />
                <label className={lableClassName}>Họ và tên</label>
            </div>
            {error?.name &&
                <span className="text-red-600 pb-5">{error.name}</span>
            }
            <div className="relative z-0 w-full mb-3 group">
                <input name="email" type="email" className={inputClassName} placeholder=" " required />
                <label className={lableClassName}>Email</label>
            </div>
            {error?.email &&
                <span className="text-red-600 pb-5">{error.email}</span>
            }
            <div className="relative z-0 w-full mb-3 group">
                <input name="phone" type="text" onInput={phoneNumberInputChange} className={inputClassName} placeholder=" " required />
                <label className={lableClassName}>Số điện thoại</label>
            </div>
            {error?.phone &&
                <span className="text-red-600 pb-5">{error.phone}</span>
            }
            <div className="relative z-0 w-full mb-3 group">
                <input name="address" type="text" className={inputClassName} placeholder=" " required />
                <label className={lableClassName}>Địa chỉ</label>
            </div>
            {error?.address &&
                <span className="text-red-600 pb-5">{error.address}</span>
            }
            <div className="relative z-0 w-full mb-3 group">
                <input name="password" type={!showPass ? 'password' : 'text'} className={inputClassName} placeholder=" " required />
                <label className={lableClassName}>Mật khẩu</label>
                {
                    showPass ?
                        <Image className="absolute right-0 top-2" onClick={() => setShowPass(!showPass)} src={'/icon/eye.svg'} alt="icon eye" width={25} height={25} />
                        :
                        <Image className="absolute right-0 top-2" onClick={() => setShowPass(!showPass)} src={'/icon/uneye.svg'} alt="icon eye" width={25} height={25} />
                }
            </div>
            {error?.password &&
                <span className="text-red-600 pb-5">{error.password}</span>
            }
            <div className="relative z-0 w-full mb-3 group">
                <input name="passwordCheck" type={!showPass ? 'password' : 'text'} className={inputClassName} placeholder=" " required />
                <label className={lableClassName}>Nhập lại mật khẩu</label>
                {
                    showPass ?
                        <Image className="absolute right-0 top-2" onClick={() => setShowPass(!showPass)} src={'/icon/eye.svg'} alt="icon eye" width={25} height={25} />
                        :
                        <Image className="absolute right-0 top-2" onClick={() => setShowPass(!showPass)} src={'/icon/uneye.svg'} alt="icon eye" width={25} height={25} />
                }
            </div>
            {error?.passwordCheck &&
                <span className="text-red-600 pb-5">{error.passwordCheck}</span>
            }

            <button type="submit" className="w-full mt-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center">
                Đăng ký
            </button>
        </form>

    )
}

export default Register;