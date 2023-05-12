import FilterCategory from "@/components/category/Filter";
import { useRouter } from "next/router";
import ProductAPI from "../../components/api/ProductAPI";
import { useEffect, useState } from 'react';
import ProductType from "@/components/type/ProductType";
import Product from "@/components/product";
import PaginationType from "@/components/type/PaginationType";
import ComponentPagination from "@/layouts/pagination/ComponentPagination";

const PageProduct = () => {
    const router = useRouter();
    const [productData, setProductData] = useState<ProductType[]>();
    const [pagination, setPagination] = useState<PaginationType>();
    const getProduct = async () => {
        const formData = new FormData();

        if (router.query.page)
            formData.append('page', String(router.query.page));
        if (router.query.category)
            formData.append('category', String(router.query.category));
        if (router.query.order)
            formData.append('order', String(router.query.order));
        if (router.query.from)
            formData.append('from', String(router.query.from));
        if (router.query.to)
            formData.append('to', String(router.query.to));
        if (router.query.search)
            formData.append('search', String(router.query.search));
        formData.append('perPage', "12");
        const data = await ProductAPI.getProductCategory(formData);
        if (data.data.length == 0 && String(router.query.page) != "1") {
            router.push({
                pathname: '/product',
                query: { ...router.query, page: 1 },
            });
        }
        setProductData(data.data);
        setPagination(data.pagination);
    }
    const btn_page = (page: number) => {
        let query = { ...router.query, page: String(page) }
        router.push({
            pathname: '/product',
            query: query,
        });
    }
    useEffect(() => {
        getProduct();
    }, [router])
    return (
        <div className="container py-5 flex">
            <FilterCategory />
            <div className="w-full flex flex-wrap">
                {productData ?
                    <>
                        {productData?.map((data: ProductType, index: number) => (
                            <div key={index} className='p-2 md:w-3/12 w-6/12'>
                                <div className='rounded-lg shadow-md ' >
                                    <Product product={data} />
                                </div>
                            </div>

                        ))}
                    </>
                    :
                    <div>
                        Đang tải
                    </div>
                }
                {pagination ?
                    <>
                        <ComponentPagination btn_page={btn_page} pagination={pagination}/>
                    </>

                    :
                    <div>Đang tải...</div>
                }


            </div>
        </div>
    )
}

export default PageProduct;