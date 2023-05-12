import { IconNavbar } from "@/components/icon/icon";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from 'react';
import { useLayoutContext } from '../index';
import SocketIoNotification from '../../utils/SocketIo/SocketIoNotification';
import { NotificationType } from "@/components/type/NotificationType";

const Notifacation = () => {
    const [bell, setBell] = useState(false);
    const [drop, setDrop] = useState(false);
    const [notification, setNotification] = useState<NotificationType[]>([]);

    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const user = useLayoutContext();
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
    useEffect(() => {
        if (user?.user.login) {
            SocketIoNotification.connect(user.user.id);
        }
    }, [user])

    useEffect(()=>{
        if(notification)
        {
            SocketIoNotification.watchNotification(notification, setNotification);
        }
    },[notification])

    return (
        <div ref={dropdownRef} className="my-auto relative">
            {
                bell ?
                    <IconNavbar onClick={() => { setDrop(!drop) }} src="/icon/Bell_true.svg" alt="Icon bell" />
                    :
                    <IconNavbar onClick={() => setDrop(!drop)} src="/icon/Bell_false.svg" alt="Icon bell" />
            }
            {
                drop &&
                <div className="absolute w-96 z-40 bg-white right-0 rounded-lg flex flex-col max-h-80vh shadow">
                    <h1 className="text-lg text-white font-medium py-2 border-b px-5 bg-sky-500 rounded-t-lg">Thông báo</h1>
                    <div className="overflow-y-auto flex flex-col">
                        <>
                            {notification.map((item: any, index: number) => {
                                return (
                                    <div key={index} className="bg-sky-100 px-5 py-2 border-b-2 border-sky-200  cursor-pointer hover:bg-slate-200">
                                        <p>{item.message}</p>
                                        <p className="text-sm text-gray-500">{item.time}</p>
                                    </div>
                                );
                            })}

                        </>

                        <Link href={""} className="w-full text-sky-500 cursor-pointer py-2 text-center">
                            Xem tất cả
                        </Link>
                    </div>

                </div>
            }

        </div>
    )
}
export default Notifacation;