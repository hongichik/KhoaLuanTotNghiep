import Image from "next/image";
import { useState } from 'react';
import Dropzone from 'react-dropzone';

const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const inputClassName = "block py-2.5 px-0 w-full  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
    const lableClassName = "peer-focus:font-medium absolute  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
    const [file, setFile] = useState<File | null>(null);
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

    return (
        <form className="w-full pb-24">
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" className={inputClassName} placeholder=" " required />
                <label className={lableClassName}>Họ và tên</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="email" className={inputClassName} placeholder=" " required />
                <label className={lableClassName}>Email</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" onInput={phoneNumberInputChange} className={inputClassName} placeholder=" " required />
                <label className={lableClassName}>Số điện thoại</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type="text" className={inputClassName} placeholder=" " required />
                <label className={lableClassName}>Địa chỉ</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type={!showPass ? 'password' : 'text'} className={inputClassName} placeholder=" " required />
                <label className={lableClassName}>Mật khẩu</label>
                {
                    showPass ?
                        <Image className="absolute right-0 top-2" onClick={() => setShowPass(!showPass)} src={'/icon/eye.svg'} alt="icon eye" width={25} height={25} />
                        :
                        <Image className="absolute right-0 top-2" onClick={() => setShowPass(!showPass)} src={'/icon/uneye.svg'} alt="icon eye" width={25} height={25} />
                }
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <input type={!showPass ? 'password' : 'text'} className={inputClassName} placeholder=" " required />
                <label className={lableClassName}>Nhập lại mật khẩu</label>
                {
                    showPass ?
                        <Image className="absolute right-0 top-2" onClick={() => setShowPass(!showPass)} src={'/icon/eye.svg'} alt="icon eye" width={25} height={25} />
                        :
                        <Image className="absolute right-0 top-2" onClick={() => setShowPass(!showPass)} src={'/icon/uneye.svg'} alt="icon eye" width={25} height={25} />
                }
            </div>
            <div className="flex flex-col w-full mb-6">
                <label className="text-gray-400">Avatar</label>
                <Dropzone onDrop={(e) => setFile(e[0])}>
                    {({ getRootProps, getInputProps }) => (
                        <div {...getRootProps()} className="border-2 flex w-36 m-auto h-36 border-dashed border-gray-400 rounded-full">
                            <input {...getInputProps()} {...getInputProps({ accept: "image/png,image/jpeg" })} />
                            {file ? (
                                <Image src={URL.createObjectURL(file)} alt="Avatar" className=" object-cover rounded-full" width={144} height={144} />
                            ) : (
                                <p className="text-gray-400 m-auto text-center">Chọn avatar của bạn</p>
                            )}
                        </div>
                    )}
                </Dropzone>

            </div>

            <button type="submit" className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg px-5 py-2.5 text-center">
                Đăng ký
            </button>
        </form>

    )
}

export default Register;