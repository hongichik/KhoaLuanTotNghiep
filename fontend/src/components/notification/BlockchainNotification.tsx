import { useState, useEffect } from 'react';
import NotifacationAPI from '../api/NotificationAPI';
import Convert from '@/utils/convert';
import { BlockType } from '../type/BlockType';
import SweetAlert from '@/utils/sweetalert';
const ComponentBlockchainNotification = () => {
    const [data, setData] = useState<BlockType[]>();
    const [page, setPage] = useState(10);
    const [isBtn, setIsBtn] = useState(true);
    const getData = async (get: number = 5) => {
        const res = await NotifacationAPI.getBlockchain(get);
        if (res == false) {
            SweetAlert.AlertError("Cảnh báo", "Lịch sử giao dịch của bạn đã bị thay đổi", 30000);
            return;
        }
        
        setData(res);
        if(res.length < get)
        {
            setIsBtn(false);
        }
        else
        {
            setIsBtn(true);
        }


    }
    useEffect(() => {
        getData();
    }, [])

    const btn_show = () => {
        setPage(page + 5);
        getData(page);
    }
    return (
        <div className="flex w-full pl-3 flex-col ">
            <h3 className="text-lg font-medium border-b-2 mb-2">Lịch sử giao dịch ATM</h3>
            {data ?
                <>
                    {
                        data.map((item: BlockType, index: number) => {
                            return (
                                <div key={index} className={`border-b p-2 flex flex-col`}>
                                    <div className='flex'>
                                        <p className="text-gray-500 pr-1">{Convert.timeConvert(item.created_at)}</p>
                                        <p>{item.data}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </>
                :
                <div>Đang tải...</div>
            }
            {isBtn &&
                <div onClick={btn_show} className="cursor-pointer py-2 px-3">
                    xem thêm
                </div>
            }


        </div>
    )
}
export default ComponentBlockchainNotification;