import { setUser } from "@/actions/userAction";
import AuthAPI from "@/pages/api/authAPI";
import { User } from "@/types/user";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookie from "@/utils/cookie";
import Header from "./header";
const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const CheckUser = async () => {
        if (Cookie.GetCookie('accessToken') === undefined)
        {
            setLoading(false);
            return;
        }
        else
        {
            setLoading(true);
        }
        const result = await AuthAPI.CheckLogin();
        if (result) {
            const userData: User = {
                avatar: result.avatar,
                name: result.name,
                id: result.id

            }
            const action = setUser(userData);
            dispatch(action);
        }
        setLoading(false);
    }

    useEffect(() => {
        CheckUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen relative">
                <div className="animate-spin rounded-full h-44 w-44 border-t-4 border-b-4 border-blue-500">
                </div>
                <div className="h-32 w-32 absolute flex">
                    <Image className='object-contain h-32 w-32' src="/logo/logo_page.svg" alt="Icon" width={300} height={300} />
                </div>
            </div>
        );
    }
    return (
        <>
            <Header />
            {children}
            <h1>cuoi trang</h1>
        </>
    )
}

export default Layout;