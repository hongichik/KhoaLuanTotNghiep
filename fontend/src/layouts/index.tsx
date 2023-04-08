import { setUser } from "@/actions/userAction";
import AuthAPI from "@/pages/api/authAPI";
import { RootState } from "@/reducers";
import { User } from "@/types/user";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header";
const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const CheckUser = async () => {
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
    }, []);
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
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