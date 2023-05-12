import { CartType } from '@/components/type/CartType';
import Convert from '@/utils/convert';
import SweetAlert from '@/utils/sweetalert';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CartAPI from '../../components/api/CartAPI';
import { useDispatch } from 'react-redux';
import { AddProduct } from '../../actions/PayProductAction';
import ProductType from '@/components/type/ProductType';
import { useRouter } from 'next/router';
import { useLayoutContext } from '../../layouts/index';
const Cart = () => {
    const [cart, setCart] = useState<CartType[]>();
    const dispatch = useDispatch();
    const router = useRouter();
    const user = useLayoutContext();
    const getCart = async () => {
        if(!user?.user.login && user?.user.login != null)
        {
            router.push('/auth/login');
            return;
        }
        const data = await CartAPI.getCart();

        if (data) {
            setCart(data);
        }
    }
    const handleCheckboxChange = (itemId: number) => {
        const updatedCart = cart?.map((item) =>
            item.id === itemId ? { ...item, isChoose: !item.isChoose } : item
        );
        setCart(updatedCart);
    };

    const CheckBoxAll = (e: boolean) => {
        let updateCart;
        if (e) {
            updateCart = cart?.map((item) => ({
                ...item, isChoose: true
            }))
        }
        else {
            updateCart = cart?.map((item) => ({
                ...item, isChoose: false
            }))
        }
        setCart(updateCart);
    }

    const btnDeleteList = () => {
        cart?.forEach((item) => {
            if (item.isChoose == true)
                DelteCart(item.product_id);
        })
        getCart();
    }

    const btnPay = () => {
        cart?.forEach((item) => {
            if (item.isChoose == true)
                DelteCart(item.product_id);
            const product: ProductType = {
                id: item.product_id,
                title: item.productTitle,
                slug: item.productSlug,
                main_image: "",
                images: [""],
                price: item.productPrice,
                discount: item.productDiscount,
                qty: item.count,
                status: 0,
                category_id: 0,
                order: 0,
                short_description: 0,
                detail_description: "",
                detail: Convert.JsonConvert(item.detail),
                created_at: "",
                updated_at: "",
                cart: true,
            };
            const addProduct =  AddProduct(product);
            dispatch(addProduct);
        })
        router.push('/pay');
    }
    const DelteCart = async (id: number) => {
        const data = await CartAPI.deleteCart(id);
        setCart(cart?.filter(item => item.product_id !== id));
    }
    useEffect(() => {
        getCart()
    }, [])
    return (
        <div className="container mt-10">
            <h1 className="text-xl font-medium mb-5">Giỏ hàng</h1>
            {
                cart ?
                    <>
                        {(cart?.length > 0) ?
                            <>
                                <div className='flex'>
                                    <button type="button" onClick={() => btnDeleteList()} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                        Xóa
                                    </button>
                                    <button type="button" onClick={() => btnPay()} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
                                        Thanh toán
                                    </button>
                                </div>
                                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="p-4">
                                                    <div className="flex items-center">
                                                        <input type="checkbox" onChange={(e) => CheckBoxAll(e.target.checked)} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Tên sản phẩm
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Số lượng
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Đơn giá
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Tổng giá
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Chi tiết
                                                </th>
                                                <th scope="col" className="px-6 py-3">

                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {cart?.map((item: CartType, index: number) => (
                                                <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td className="w-4 p-4">
                                                        <div className="flex items-center">
                                                            <input type="checkbox" onChange={() => handleCheckboxChange(item.id)} checked={item.isChoose} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                        </div>
                                                    </td>
                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {item.productTitle}
                                                    </th>
                                                    <td className="px-6 py-4">
                                                        {item.count}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className='flex'>
                                                            <div className='flex flex-col'>
                                                                <p>
                                                                    {Convert.MoneyConvert(item.productPrice - item.productPrice * item.productDiscount / 100)}đ
                                                                </p>
                                                                {
                                                                    (item.productDiscount > 0) &&
                                                                    <p className='line-through'>
                                                                        {Convert.MoneyConvert(item.productPrice)}đ
                                                                    </p>
                                                                }
                                                            </div>
                                                            {
                                                                (item.productDiscount > 0) &&
                                                                <p className='ml-2 my-auto text-red-600'>
                                                                    Giảm {item.productDiscount}%
                                                                </p>

                                                            }
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {Convert.MoneyConvert((item.productPrice - item.productPrice * item.productDiscount / 100) * item.count)}đ
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {Convert.JsonConvert(item.detail)}
                                                    </td>
                                                    <td className="flex items-center px-6 py-4 space-x-3">
                                                        <Link href={'/product/' + item.productSlug} >
                                                            <p className="font-medium text-blue-600 dark:text-blue-500 cursor-pointer">Sửa</p>
                                                        </Link>
                                                        <p onClick={() => DelteCart(item.product_id)} className="cursor-pointer font-medium text-red-600 dark:text-red-500 ">Xóa</p>
                                                    </td>
                                                </tr>
                                            ))}


                                        </tbody>
                                    </table>
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
                    </>

                    :
                    <div className="flex justify-center items-center h-screen">
                        <div className="bg-white rounded-lg p-8 mb-24">
                            <h1 className="text-2xl font-bold text-gray-700 text-center">Đang tải...</h1>
                        </div>
                    </div>
            }




        </div>
    )
}

export default Cart;