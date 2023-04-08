import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IconNavbar } from "@/components/icon/icon";
import { useSelector } from "react-redux";
import { RootState } from "@/reducers";



export const User = () => {
    const [drop, setDrop] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const infoUser = useSelector((state: RootState) => state.user.user);
    const auth = Object.keys(infoUser).length === 0;
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
    }, [dropdownRef]);
    return (
        <div className="flex relative px-3 unselect">
            {auth &&
                <>
                    <Link href={'/auth/login'} className="flex">
                        <button type="button" className="my-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                            Đăng nhập
                        </button>
                    </Link>
                    <Link href={'/auth/register'} className="my-auto ml-3">
                        Đăng ký
                    </Link>
                </>
            }
            {
                !auth &&
                <div ref={dropdownRef} className="cursor-pointer flex" onClick={() => setDrop(!drop)}>
                    <p className="my-auto">{infoUser.name}</p>
                    <Image
                        src={process.env.API_HOST + 'storage/' + infoUser.avatar}
                        loader={() => process.env.API_HOST + 'storage/' + infoUser.avatar}
                        unoptimized={true}
                        alt="Icon user"
                        className="w-12 h-12 my-auto p-1 cursor-pointer rounded-full"
                        width={50}
                        height={50}
                    />
                </div>

            }

            {drop &&
                <div className="dropMenu">
                    <h1>Noi dung</h1>
                </div>
            }


        </div>
    )
}