import { useState, useEffect } from 'react';
import CategoryAPI from '@/components/api/categoriesAPI';
import CategoryType from '../type/CategoryType';
import { useRouter } from 'next/router';
import Convert from '@/utils/convert';
import SweetAlert from '@/utils/sweetalert';
import ProductAPI from '../api/ProductAPI';
const FilterCategory = () => {
    const [category, setCategory] = useState<CategoryType[]>([]);
    const [categoryShow, steCategoryShow] = useState(5);
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState(0);
    const [priceFrom, setPriceFrom] = useState<String | undefined>();
    const [priceTo, setPriceTo] = useState<String | undefined>();
    const router = useRouter();
    let queryCategoryArray = Convert.urlConvertArray(router.query.category);
    const getCategory = async () => {
        const data = await CategoryAPI.getCategories();
        setCategory(data);
    }
    const changeCategory = (data: string) => {
        if (queryCategoryArray.includes(data))
            queryCategoryArray = queryCategoryArray.filter(item => item !== data);
        else
            queryCategoryArray = [...queryCategoryArray, data];
        if (queryCategoryArray.length == 0) {
            router.push({
                pathname: '/product',
                query: { ...router.query, category: undefined, page: 1 },
            });
        }
        else
            router.push({
                pathname: '/product',
                query: { ...router.query, category: Convert.urlConvertString(queryCategoryArray), page: 1 },
            });
    }
    const searchSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        setSearch("");
        router.push({
            pathname: '/product',
            query: { ...router.query, search: String(formData.get('search')), page: 1  },
        });
    }

    const btnFilter = () => {
        if (priceTo != "" && !/^\d+$/.test(String(priceTo)) && priceTo != undefined) {
            SweetAlert.AlertError("Cảnh báo", "Bạn cần nhập thông tin giá tiền là số");
            return;
        }

        if (!/^\d+$/.test(String(priceFrom)) && priceFrom != "" && priceFrom != undefined) {
            SweetAlert.AlertError("Cảnh báo", "Bạn cần nhập thông tin giá tiền là số");
            return;
        }

        let query = router.query;
        if (Number(priceFrom) > 0)
            query = { ...query, from: String(priceFrom) }
        else
            query = { ...query, from: undefined }
        if (Number(priceTo) > 0)
            query = { ...query, to: String(priceTo) }
        else
            query = { ...query, to: undefined }
        query = { ...query, order: String(order) }
        router.push({
            pathname: '/product',
            query: query,
        });
    }

    const btnSearch = () => {
        let query = router.query;
        query = { ...query, search: "" };
        router.push({
            pathname: '/product',
            query: query,
        });
    }

    const btnEnterSearch = (e: any) => {
        if (e.key === 'Enter') {
            btnSearch();
            return;
        }
    }


    useEffect(() => {
        getCategory();
    }, [router])
    return (
        <div className="w-64 border">
            <div className='border-b p-2'>
                <h2>Tìm kiếm</h2>
                <form className="flex items-center pt-2" onSubmit={searchSubmit}>
                    <div className="relative w-full">
                        <input type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={(e) => btnEnterSearch(e)}
                            name='search'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline focus-visible:outline-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5" placeholder="Sản phẩm..." />
                        <button type="submit" onClick={btnSearch} className="absolute inset-y-0 right-0 flex items-center px-2">
                            <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </div>
                </form>

            </div>
            <div className="flex flex-col pt-5 px-3">
                <h2>Danh mục</h2>
                <ul className="w-full text-sm font-medium text-gray-900 bg-white">
                    {!(category.length == 0) ?
                        <>
                            {
                                category.map((item: CategoryType, index: number) => (

                                    (categoryShow > index) &&
                                    <li key={index} className={`w-full border-b border-gray-200 rounded-t-lg`}>
                                        <div className="flex items-center pl-3 cursor-pointer" onClick={() => changeCategory(item.slug)}>
                                            <input type="checkbox"
                                                checked={queryCategoryArray?.includes(item.slug)}
                                                readOnly
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-100 focus:ring-0" />
                                            <label className="cursor-pointer w-full py-2 ml-2 text-sm font-medium text-gray-900 ">
                                                {item.name}
                                            </label>
                                        </div>
                                    </li>
                                ))
                            }
                            {(category.length > categoryShow) ?
                                <p onClick={() => steCategoryShow(categoryShow + 3)} className='text-blue-600 py-3 hover:text-blue-500 cursor-pointer text-center'>
                                    Xem Thêm
                                </p>
                                :
                                <p onClick={() => steCategoryShow(5)} className='text-blue-600 py-3 hover:text-blue-500 cursor-pointer text-center'>
                                    Ẩn bớt
                                </p>
                            }

                        </>

                        :
                        <div>
                            Đang tải...
                        </div>
                    }
                </ul>
            </div >

            <div className="flex flex-col pt-3 border-t px-3">
                <h2>Bộ lọc</h2>
                <div className='flex flex-wrap'>
                    <div className='flex pt-4'>
                        <p className='m-auto w-10'>Từ</p>
                        <input type="text" value={String((priceFrom == undefined) ? "" : priceFrom)}
                            onChange={(e) => setPriceFrom(e.target.value)}
                            className='bg-gray-100 border rounded-lg w-full p-1 outline-none' placeholder='vd: 1000' />
                    </div>
                    <div className='flex mt-3'>
                        <p className='m-auto w-10'>Đến</p>
                        <input type="text" value={String((priceTo == undefined) ? "" : priceTo)}
                            onChange={(e) => setPriceTo(e.target.value)}
                            className='bg-gray-100 border rounded-lg w-full p-1 outline-none' placeholder='vd: 1000' />
                    </div>
                </div>
                <p>Giá</p>
                <div className='flex m-auto'>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={order == 1} onChange={(e) => setOrder(e.target.checked ? 1 : 0)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Thấp đến cao</span>
                    </label>
                </div>
                <div className='flex m-auto mt-2'>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={order == 2} onChange={(e) => setOrder(e.target.checked ? 2 : 0)} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Cao đến thấp</span>
                    </label>
                </div>
                <div className='m-auto pt-3'>
                    <button type="button" onClick={() => btnFilter()} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Áp dụng
                    </button>
                </div>
            </div>
        </div >
    )
}

export default FilterCategory;