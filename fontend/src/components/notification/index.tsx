import ComponentPagination from '@/layouts/pagination/ComponentPagination';
import { useState, useEffect } from 'react';
import NotifacationAPI from '../api/NotificationAPI';
import PaginationType from '../type/PaginationType';
import { NotificationCommonType } from '../type/NotificationType';
import Link from 'next/link';
import Convert from '@/utils/convert';
const ComponentNotifacation = () => {
    const [data, setData] = useState<NotificationCommonType[]>();
    const [pagination, setPagination] = useState<PaginationType>();
    let load = 1;
    const getData = async (page = 1) => {
        const res = await NotifacationAPI.getNotification(page);
        setData(res.data);
        setPagination(res.pagination);
    }

    const btn_page = (page: number) => {
        getData(page);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="flex w-full pl-3 flex-col ">
            <h3 className="text-lg font-medium border-b-2 mb-2">Thông báo</h3>
            {data ?
                <>
                    {
                        data.map((item: NotificationCommonType, index: number) => {
                            return (
                                <Link key={index} className={`${item.status == 0 && 'bg-sky-50 '} border-b p-2 flex flex-col`} href={'/notification?page=' + item.type}>
                                    <p className="font-medium">
                                        {item.type == 0 && "Thông báo chung"}
                                        {item.type == 1 && "Thông báo đơn hàng chờ"}
                                        {item.type == 2 && "Thông báo đơn hàng được xác nhận"}
                                        {item.type == 3 && "Thông báo đơn hàng đang giao"}
                                        {item.type == 4 && "Thông báo đơn hàng thành công"}
                                    </p>
                                    <div className='flex'>
                                        <p className="text-gray-500 pr-1">{Convert.timeConvert(item.created_at)} :</p>
                                        <p>{item.content}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </>
                :
                <div>Đang tải...</div>
            }

            {
                pagination && <ComponentPagination pagination={pagination} btn_page={btn_page} />
            }

        </div>
    )
}
export default ComponentNotifacation;