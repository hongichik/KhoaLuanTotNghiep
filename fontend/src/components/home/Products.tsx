import ProductAPI from "@/components/api/ProductAPI";
import { RootState } from "@/reducers";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Product from "../product";
import ProductType from "../type/ProductType";

const Products = () => {
    const [product, setProduct] = useState([]);
    const status = useSelector((state: RootState) => state.DetailProductReducer.status);
    const getProducts = async () => {
        const { data } = await ProductAPI.getProducts(1);
        setProduct(data);
    }
    useEffect(() => {
        getProducts();
    }, [status])
    return (
        <div className="container pb-6">
            <div className="flex flex-wrap">
                {product?.map((data: ProductType, index: number) => (
                    <div key={index} className='p-2 lg:w-2/12 md:w-3/12 w-6/12'>
                        <div className='rounded-lg shadow-md ' >
                            <Product product={data} />
                        </div>
                    </div>

                ))}

            </div>
            <div className="w-full flex">
                <Link href={'/product'} className="m-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2 mb-2">
                    Xem thêm
                </Link>
            </div>

        </div>
    )
}

export default Products;