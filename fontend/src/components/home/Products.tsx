import ProductAPI from "@/pages/api/ProductAPI";
import { RootState } from "@/reducers";
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
        <div className="container">
            <div className="flex flex-wrap">
                {product?.map((data: ProductType, index:number) => (
                    <div key={index} className='p-2 lg:w-2/12 md:w-3/12 w-6/12'>
                        <div className='rounded-lg shadow-md ' >
                            <Product product={data}/>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default Products;