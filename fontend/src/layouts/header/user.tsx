import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IconNavbar } from "@/components/icon/icon";
import AuthAPI from '../../pages/api/authAPI';
import { useLayoutContext } from '../index';



export const User = () => {
    const [drop, setDrop] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const user = useLayoutContext();
    const auth = user?.user.login;
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDrop(false);
            }
        };
        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [dropdownRef,auth]);

    const logout = async () => {
        const data = await AuthAPI.Logout();
        if (data)
            user?.setUser({login: false});
    }
    return (
        <div className="flex relative px-1 sm:px-3 unselect">
            {!auth &&
                <>
                    <Link href={'/auth/login'} className="flex">
                        <button type="button" className="my-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-1 sm:px-5 sm:py-2.5 text-center">
                            Đăng nhập
                        </button>
                    </Link>
                    <Link href={'/auth/register'} className="my-auto ml-3">
                        Đăng ký
                    </Link>
                </>
            }
            {
                auth &&
                <div ref={dropdownRef} className="cursor-pointer flex" onClick={() => setDrop(!drop)}>
                    <Image
                        src={process.env.API_HOST + 'storage/' + user?.user.avatar}
                        loader={() => process.env.API_HOST + 'storage/' + user?.user.avatar}
                        unoptimized={true}
                        alt="Icon user"
                        className="w-10 h-10 sm:w-12 sm:h-12 my-auto p-1 cursor-pointer rounded-full"
                        width={50}
                        height={50}
                    />
                </div>

            }

            {drop &&
                <div className="!top-12 !right-3 dropMenu ">
                    <div className="flex  flex-col">
                        <p  className='pl-6 pr-7 py-2 flex border-b-2'>
                            {user?.user.name}
                            <IconNavbar src="/icon/user_icon.svg" alt="icon" />
                        </p>
                        <p onClick={logout} className='pl-6 pr-3 py-2 hover:bg-slate-100 justify-center cursor-pointer flex'>
                            Đăng xuất
                            <IconNavbar src="/icon/logout_icon.svg" alt="icon" />
                        </p>
                    </div>
                </div>
            }


        </div>
    )
}