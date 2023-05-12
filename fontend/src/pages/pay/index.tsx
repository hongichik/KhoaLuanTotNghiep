import TablePayProduct from "@/components/product/TablePayProduct";
import { RootState } from "@/reducers";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useLayoutContext } from '../../layouts/index';
import Convert from '../../utils/convert';
import { useRouter } from 'next/router';
import PayAPI from "../../components/api/PayAPI";
import { DeleteAllProduct } from '../../actions/PayProductAction';
import SweetAlert from '../../utils/sweetalert';
export default function Pay() {
  const listProduct = useSelector((state: RootState) => state.PayProductReducer.products);
  const [sumPrice, setSumPrice] = useState<number>(0);
  const userInfo = useLayoutContext();
  const router = useRouter();
  const now = new Date();
  const year = now.getFullYear();
  const month = ('0' + (now.getMonth() + 1)).slice(-2);
  const day = ('0' + now.getDate()).slice(-2);
  const info_pay = "Code" + Math.floor(1000 + Math.random() * 9000)
    + "ID" + userInfo?.user.id + "Name" + userInfo?.user.name + "Time " + day + " " + month + " " + year;
  const dispatch = useDispatch();
  const deleteAllProduct = DeleteAllProduct();

  useEffect(() => {
    let sum = 0;
    if (listProduct.length > 0) {
      sum = listProduct.reduce((acc, product) => {
        return acc + (product.price - product.price * product.discount / 100) * product.qty;
      }, 0);
    }
    setSumPrice(sum);
  }, [listProduct])

  const btnPay = async () => {
    let isSuccess = true;
    var formData = new FormData();
    for (const item of listProduct) {
      formData.append('product_id[]', String(item.id));
      formData.append('count[]', String(item.qty));
      formData.append('status[]', "0");
      formData.append('detail[]', String(item.detail));
      formData.append('type[]', "0");
      formData.append('info_pay[]', info_pay);
      formData.append('phone[]', String(userInfo?.user.phone));
      formData.append('address[]', String(userInfo?.user.address));
    }
    try {
      const data = await PayAPI.createPay(formData);
      if (!data) {
        isSuccess = false;
      }
    } catch (error) {
      isSuccess = false;
      console.error(error);
    }
    if (isSuccess) {
      SweetAlert.AlertSuccess("Thông báo", "Đặt hàng hành công", 1000);
      dispatch(deleteAllProduct);
      router.push('/');
    } else {
      SweetAlert.AlertError("Thông báo", "Đã có lỗi xảy ra trong quá trình thanh toán");
      router.push('/');
    }
  };


  const btnPayATM = async () => {
    const check = await SweetAlert.AlertQRATM(info_pay, sumPrice);
    if (!check) {
      return;
    }
    let isSuccess = true;
    var formData = new FormData();
    for (const item of listProduct) {
        formData.append('product_id[]', String(item.id));
        formData.append('count[]', String(item.qty));
        formData.append('status[]', "0");
        formData.append('detail[]', String(item.detail));
        formData.append('type[]', "1");
        formData.append('info_pay[]', info_pay);
        formData.append('phone[]', String(userInfo?.user.phone));
        formData.append('address[]', String(userInfo?.user.address));
    }
    formData.append('sumPrice',String(sumPrice));
    try {
      const data = await PayAPI.createPay(formData);
      if (!data) {
        isSuccess = false;
      }
    } catch (error) {
      isSuccess = false;
      console.error(error);
    }
    if (isSuccess) {
      SweetAlert.AlertSuccess("Thông báo", "Đặt hàng hành công", 1000);
      dispatch(deleteAllProduct);
      router.push('/');
    } else {
      SweetAlert.AlertError("Thông báo", "Đã có lỗi xảy ra trong quá trình thanh toán");
      router.push('/');
    }
  };

  return (
    <div className='container text-lg pt-12'>
      <h1 className='font-medium text-2xl'>Thanh toán</h1>
      {listProduct.length > 0 ?
        <>
          <TablePayProduct ListProducts={listProduct} />
          <div className="flex justify-end mb-5 mt-5">
            <div className="flex flex-col">
              <p>Tổng tiền : {sumPrice && Convert.MoneyConvert(sumPrice)} đ</p>
              <p>Họ và tên: {userInfo?.user.name}</p>
              <p>Địa chỉ nhận hàng: {userInfo?.user.address !== null ? userInfo?.user.address : "Chưa có thông tin"}</p>
            </div>
          </div>
          <div className="flex justify-end mb-10 mt-5">
            <div className="flex flex-col">
              <div className="flex">
                <button onClick={() => btnPay()} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Thanh toán khi nhận hàng
                </button>
                <button onClick={() => btnPayATM()} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Thanh toán thông qua ngân hàng
                  </span>
                </button>

                <button type="button" onClick={() => router.push('/')} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Hủy
                </button>
              </div>
            </div>
          </div>
        </>
        :
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white rounded-lg p-8 mb-24">
            <h1 className="text-3xl font-bold text-gray-700">Không sản phẩm nào</h1>
            <p className="text-lg text-gray-700 text-center">Bạn hãy tiếp tục mua sắm thêm sản phẩm</p>
          </div>
        </div>
      }

    </div>
  )
}
