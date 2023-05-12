import ComponentNotifacation from '@/components/notification';
import ComponentBlockchainNotification from '@/components/notification/BlockchainNotification';
import ComponentPayNotification from '@/components/notification/PayNotification';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useLayoutContext } from '../../layouts/index';
const Notifacation = () => {
    const router = useRouter();
    const user = useLayoutContext();
    const showRouter = router.query.page ? router.query.page : "0";
    useEffect(()=>{
        if(!user?.user.login && user?.user.login != null)
        {
            router.push('/auth/login');
        }
    },[user])
    return (
        <div className="container flex py-10 min-h-screen">
            <div className="border-r-2 text-base w-80">
                <Link href={'/notification?page=0'}>
                    <p className={`${showRouter == "0" ? 'border-sky-600' : 'border-transparent border-b-gray-100'} border-r-4 cursor-pointer border-b-2 p-2 `}>
                        Thông báo chung
                    </p>
                </Link>
                <Link href={'/notification?page=1'}>
                    <p className={`${showRouter == "1" ? 'border-sky-600' : 'border-transparent border-b-gray-100'} border-r-4 cursor-pointer border-b-2 p-2 `}>
                        Đơn hàng đang chờ
                    </p>
                </Link>

                <Link href={'/notification?page=2'}>
                    <p className={`${showRouter == "2" ? 'border-sky-600' : 'border-transparent border-b-gray-100'} border-r-4 cursor-pointer border-b-2 p-2`}>
                        Đơn hàng được xác nhận</p>
                </Link>

                <Link href={'/notification?page=3'}>
                    <p className={`${showRouter == "3" ? 'border-sky-600' : 'border-transparent border-b-gray-100'} border-r-4 cursor-pointer border-b-2 p-2`}>
                        Đơn hàng đang giao
                    </p>
                </Link>

                <Link href={'/notification?page=4'}>
                    <p className={`${showRouter == "4" ? 'border-sky-600' : 'border-transparent border-b-gray-100'} border-r-4 cursor-pointer border-b-2 p-2`}>
                        Đơn hàng giao thành công
                    </p>
                </Link>

                <Link href={'/notification?page=5'}>
                    <p className={`${showRouter == "5" ? 'border-sky-600' : 'border-transparent border-b-gray-100'} border-r-4 cursor-pointer border-b-2 p-2`}>
                        Lịch sử thanh toán ATM
                    </p>
                </Link>

            </div>
            <div className="flex-grow w-full">
                {showRouter == "0" && <ComponentNotifacation/>}
                {showRouter == "1" && <ComponentPayNotification status={0}/>}
                {showRouter == "2" && <ComponentPayNotification status={1}/>}
                {showRouter == "3" && <ComponentPayNotification status={2}/>}
                {showRouter == "4" && <ComponentPayNotification status={3}/>}
                {showRouter == "5" && <ComponentBlockchainNotification/>}
            </div>
        </div>
    )
}
export default Notifacation;