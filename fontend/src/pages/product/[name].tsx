import ProductType from '@/components/type/ProductType';
import { useEffect, useState } from 'react';
import ProductAPI from '../api/ProductAPI';
import { hideProduct } from '@/actions/DetailProductAction';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers/index';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, EffectCube, Pagination } from "swiper";
import { DetailTypleProduct } from '@/components/type/ProductType';
import CartAPI from '@/pages/api/CartAPI';
import { useRouter } from 'next/router';
import { AddProduct } from '@/actions/PayProductAction';
import SweetAlert from '../../utils/sweetalert';
import SocketIo from '../../utils/SocketIo';


interface TypeState {
    [key: string]: string | {};
}
const ProductDetail = () => {
    const router = useRouter();
    const { name } = router.query;
    const [product, setProduct] = useState<ProductType | null>(null);
    const payProduct = useSelector((state: RootState) => state.PayProductReducer.products);
    const [type, setType] = useState<TypeState>({});
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [show, setShow] = useState(false);

    const incrementCount = () => {
        setCount(Number(count) + 1);
    };
    const decrementCount = () => {
        if (Number(count) === 0) {
            return;
        }
        setCount(Number(count) - 1);
    };
    const handleTypeChange = (key: string, value: string) => {
        setType(prevState => {
            return {
                ...prevState,
                [key]: value,
            }
        });
    };
    const refreshData = () => {
        setCount(1);
        setType({});
    }
    const btnBuy = () => {
        if (product !== null) {
            product.detail = Object.keys(type).map(key => `${key}:${type[key]}`).join(",");
            product.qty = count;
            const activeAddProduct = AddProduct(product);
            dispatch(activeAddProduct);
            refreshData();
            router.push('/pay');
        }
    }

    const eventAddCart = async () => {
        if (product) {
            const formData = new FormData();
            formData.append('detail', JSON.stringify(type));
            formData.append('count', String(count));
            const data = await CartAPI.setCart(product.id, formData);
            SweetAlert.AlertSuccess("Thông báo", "Đã thêm vào giỏ hàng", 1000)
            setCount(1);
            setType({});
        }
    }
    const getDataProduct = async () => {
        const data = await ProductAPI.getProductDetail(name);
        setProduct(data);
        if (data) {
            setShow(false);
        }
        else
            setShow(true);
    }
    useEffect(() => {
        
        if(name)
        {
            SocketIo.SocketComment(String(name));
            getDataProduct();
        }
        
    }, [name])
    if (show) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white rounded-lg p-8 mb-24">
                    <h1 className="text-3xl font-bold text-gray-700">Không tìm thấy sản phẩm</h1>
                    <p className="text-lg text-gray-700 text-center">Vui lòng thử lại với từ khóa khác</p>
                </div>
            </div>
        )
    }
    else
        return (
            <div className="flex container">
                {product ?
                    <div className="m-auto w-full bg-white my-14 flex flex-wrap justify-around">
                        <div className='flex w-full md:w-5/12 px-3'>
                            <Swiper
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                effect={"cube"}
                                grabCursor={true}
                                cubeEffect={{
                                    shadow: true,
                                    slideShadows: true,
                                    shadowOffset: 20,
                                    shadowScale: 0.94,
                                }}
                                pagination={true}
                                modules={[EffectCube, Pagination, Autoplay]}
                                className="w-full"
                            >
                                <SwiperSlide>
                                    <Image
                                        src={process.env.API_HOST + 'storage/' + product.main_image}
                                        loader={() => process.env.API_HOST + 'storage/' + product.main_image}
                                        alt={product.title} width={400} height={400} className="h-full w-full object-cover" />
                                </SwiperSlide>
                                {product.images.map((data: string, index: number) => (
                                    <SwiperSlide key={index}>
                                        <Image
                                            src={process.env.API_HOST + 'storage/' + data}
                                            loader={() => process.env.API_HOST + 'storage/' + data}
                                            alt={product.title} width={400} height={400} className="h-full w-full object-cover" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className='w-full md:w-6/12 md:mt-0 mt-12 flex flex-col relative'>
                            <h1 className='text-2xl  font-medium mb-3'>{product.title}</h1>
                            <div className='flex'>
                                <p className="text-sky-700 text-2xl mb-0 mt-auto" >{Math.ceil((product.price - product.price * product.discount / 100)).toLocaleString('vi-VN')} đ</p>
                            </div>
                            {!(product.discount == 0) ?

                                <p className="text-gray-500 line-through" >{product.price.toLocaleString('vi-VN')} đ</p>
                                : ''
                            }
                            {!(product.discount == 0) ?

                                <div className="tag_discount rounded-tr-md right-0">
                                    <p className="pt-1 text-red-500 leading-1 ">{product.discount}%</p>
                                    <p className="pb-1 -mt-1 text-gray-700">Giảm</p>
                                </div>
                                : ''}
                            <p className='mt-3 mb-auto'>{product.short_description}</p>
                            {
                                !(product.detail == null) &&
                                <div className='mb-5 mt-5'>
                                    {Array.isArray(product.detail) && product.detail.map((data: DetailTypleProduct, index: number) => (
                                        <div key={index} className="flex py-1 mb-2">
                                            <p className='pr-2 mt-auto mb-auto'>{data.key} :</p>
                                            <div className='flex'>
                                                {Array.isArray(data.value) ? (
                                                    data.value.map((detail, detailIndex) => (
                                                        <button
                                                            onClick={() => handleTypeChange(data.key, detail)}
                                                            key={detailIndex} className={`${type[data.key] == detail ? 'text-white' : "hover:text-white"} relative inline-flex items-center justify-center p-0.5  mr-2  text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 `}>
                                                            <span className={`${type[data.key] == detail ? 'bg-opacity-20' : ""} group-hover:bg-opacity-0 relative px-2.5 py-1 transition-all ease-in duration-75 bg-white rounded-md `}>
                                                                {detail}
                                                            </span>
                                                        </button>
                                                    ))
                                                ) : ""}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }

                            <div className="flex justify-center items-center text-lg mr-auto mb-5">
                                <button
                                    className="bg-gray-200  rounded-l-md px-4 py-1 outline-none border-2"
                                    onClick={decrementCount}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    className="bg-white border-t-2 border-b-2 py-1 px-1 outline-none text-center w-40"
                                    value={count}
                                    onChange={(event) => setCount(Number(event.target.value))}
                                />
                                <button
                                    className="bg-gray-200 rounded-r-md px-4 py-1 outline-none border-2 "
                                    onClick={incrementCount}
                                >
                                    +
                                </button>

                            </div>
                            <div className='flex w-100 mt-3 '>

                                <button type="button" onClick={() => btnBuy()} className="btn_cyan_blue">Đặt mua</button>

                                <button type="button" className="btn_red flex" onClick={() => { eventAddCart() }}>Thêm vào giỏ hàng
                                    <Image
                                        src={'/icon/cart_icon_white.svg'}
                                        loader={() => '/icon/cart_icon_white.svg'}
                                        unoptimized={true}
                                        alt={'icon cart'}
                                        className="w-9 my-auto px-2 cursor-pointer"
                                        width={100}
                                        height={100}
                                    />
                                </button>
                            </div>
                        </div>

                        <div className='w-full border-t-2 mt-10 px-10'>
                            <p className='text-xl font-medium mt-5'>Mô tả</p>
                            <p className='text-base'>{product.detail_description}</p>
                        </div>

                    </div>
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
export default ProductDetail;