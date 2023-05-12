import AuthAPI from "@/components/api/authAPI";
import Image from "next/image";
import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookie from "@/utils/cookie";
import Header from "./header";
import Footer from "./footer";
import { User } from "@/components/type/user";
import DetailProduct from "@/components/product/DetailProduct";

interface contextProps {
    user: User,
    setUser: React.Dispatch<React.SetStateAction<User>>;
}
const LayoutContext = createContext<contextProps | undefined>(undefined);
const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User>({
        avatar: "",
        name: "",
        id: 0,
        login: null
    });
    const CheckUser = async () => {

        if (Cookie.GetCookie('accessToken') === undefined) {
            setLoading(false);
            return;
        }
        else {
            setLoading(true);
        }
        
        const result = await AuthAPI.CheckLogin();
        if (result) {
            const userData: User = {
                avatar: result.avatar,
                name: result.name,
                id: result.id,
                address: result.address,
                phone: result.phone,
                login: true

            }
            setUser(userData);
        }
        setLoading(false);
    }

    useEffect(() => {
        CheckUser();
    },[]);
    if (loading) {
        return (
            <div>
                <div className="flex justify-center items-center h-screen relative">
                    <div className="animate-spin rounded-full h-44 w-44 border-t-4 border-b-4 border-blue-500">
                    </div>
                    <div className="h-32 w-32 absolute flex">
                        <Image className='object-contain h-32 w-32' src="/logo/logo_page.svg" alt="Icon" width={300} height={300} />
                    </div>
                </div>
            </div>

        );
    }
    const value:contextProps = {
        user,
        setUser
    }
    return (
        <LayoutContext.Provider value={value}>
            <Header />
            {children}
            <DetailProduct/>
            <Footer />
        </LayoutContext.Provider>
    )
}

export default Layout;

export function useLayoutContext() {
    return useContext(LayoutContext);
}
