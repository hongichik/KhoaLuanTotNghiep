import { DeleteProduct } from '@/actions/PayProductAction';
import { useDispatch } from 'react-redux';
import ProductType from '../type/ProductType';
import Convert from '../../utils/convert';
interface ListProductProps {
    ListProducts: ProductType[]
}
const TablePayProduct: React.FC<ListProductProps> = ({ ListProducts }) => {
    const dispatch = useDispatch();
    const btnDeleteProduct = (data: ProductType) => {
        const deleteProduct = DeleteProduct(data);
        dispatch(deleteProduct);
    }
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Sản phẩm
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Số lượng
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
                    {ListProducts.map((item: ProductType, index: number) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.title}
                            </th>
                            <td className="px-6 py-4">
                                {item.qty}
                            </td>
                            <td className="px-6 py-4">
                                {Convert.MoneyConvert(item.price * item.qty)} đ
                            </td>
                            <td className="px-6 py-4">
                                {typeof item.detail === 'string' && (item.detail == '' ? "Tất cả loại sản phẩm": item.detail )}
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={() => btnDeleteProduct(item)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Xóa
                                    </span>
                                </button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    )
}

export default TablePayProduct;