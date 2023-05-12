import ComponentPagination from '@/layouts/pagination/ComponentPagination';
import { useState, useEffect } from 'react';
import PaginationType from '../type/PaginationType';
import Convert from '@/utils/convert';
import PayAPI from '../api/PayAPI';
import { PayType } from '../type/PayType';
const ComponentPayNotification = ({ status }: { status: number }) => {
    const [data, setData] = useState<PayType[]>();
    const [pagination, setPagination] = useState<PaginationType>();
    let load = 1;
    const getData = async (page = 1) => {
        console.log(status);
        const res = await PayAPI.getPay(status, page)
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
            <h3 className="text-lg font-medium border-b-2 mb-2">
                {status== 0 && "Thông báo đơn hàng chờ"}
                {status == 1 && "Thông báo đơn hàng được xác nhận"}
                {status == 2 && "Thông báo đơn hàng đang giao"}
                {status == 3 && "Thông báo đơn hàng thành công"}
            </h3>
            {data ?
                <>
                    {
                        data.map((item: PayType, index: number) => {
                            return (
                                <div key={index} className={`border-b p-2 flex flex-col`}>
                                    <p>Mã giao dịch : {item.info_pay}</p>
                                    <p>Sản phẩm : {item.product.title}</p>
                                    <p>Số lượng: {item.count}</p>
                                    <p>Chi tiết: {item.detail}</p>
                                    <div className='flex'>
                                        <p className='my-auto pr-2'>Đơn giá : </p>
                                        <div className='flex'>
                                            <div className='flex flex-col'>
                                                <p>
                                                    {Convert.MoneyConvert(item.product.price - item.product.price * item.product.discount / 100)}đ
                                                </p>
                                                {
                                                    (item.product.discount > 0) &&
                                                    <p className='line-through'>
                                                        {Convert.MoneyConvert(item.product.price)}đ
                                                    </p>
                                                }
                                            </div>
                                            {
                                                (item.product.discount > 0) &&
                                                <p className='ml-2 my-auto text-red-600'>
                                                    Giảm {item.product.discount}%
                                                </p>

                                            }
                                        </div>
                                    </div>
                                    <p>Tổng giá : {Convert.MoneyConvert((item.product.price - item.product.price * item.product.discount / 100) * (item.count))}đ</p>
                                    <p>Địa chỉ: {item.address}</p>
                                    <p>Số điện thoại: {item.phone}</p>
                                    <p>Loại thanh toán: {item.type == 0 ? "Thanh toán khi giao hàng" : "Thanh toán bằng ATM"}</p>
                                </div>
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
export default ComponentPayNotification;