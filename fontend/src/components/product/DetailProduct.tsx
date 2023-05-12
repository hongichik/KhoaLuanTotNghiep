import { hideProduct } from '@/actions/DetailProductAction';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers/index';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { Autoplay, EffectCube, Pagination } from "swiper";
import { DetailTypleProduct } from '../type/ProductType';
import CartAPI from '@/components/api/CartAPI';
import { useRouter } from 'next/router';
import { AddProduct } from '@/actions/PayProductAction';


interface TypeState {
    [key: string]: string | {};
}
const DetailProduct = () => {
    const status = useSelector((state: RootState) => state.DetailProductReducer.status);
    const product = useSelector((state: RootState) => state.DetailProductReducer.product);
    const payProduct = useSelector((state: RootState) => state.PayProductReducer.products);
    const [type, setType] = useState<TypeState>({});
    const dispatch = useDispatch();
    const productRef = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(1);
    const router = useRouter();
    const activeHide = hideProduct();

    const incrementCount = () => {
        setCount(Number(count) + 1);
    };
    const decrementCount = () => {
        if (Number(count) === 0) {
            return;
        }
        setCount(Number(count) - 1);
    };
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        
        if (productRef.current && !productRef.current.contains(event.target as HTMLElement)) {
            refreshData();
        }
    };
    const handleTypeChange = (key: string, value: string) => {
        setType(prevState => {
            return {
                ...prevState,
                [key]: value,
            }
        });
    };
    const refreshData = ()=>{
        setCount(1);
        setType({});
        dispatch(activeHide);
    }
    const btnBuy = () => {
        if(product !== null)
        {
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
            const data =  await CartAPI.setCart(product.id, formData);
            const activeHide = hideProduct();
            dispatch(activeHide);
            setCount(1);
            setType({});
        }
    }
    if (status)
        return (
            <div onClick={handleClick} className="fixed w-full h-full top-0 left-0 right-0 bg-black/70 z-50 flex">
                {product &&
                    <div ref={productRef} className="relative md:w-10/12 lg:w-7/12 m-auto w-full bg-white rounded-xl shadow-sm py-14 px-10 flex">
                        <div className='flex w-6/12 ml-0 mr-auto px-3'>
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
                        <div className='w-6/12 px-3 flex flex-col justify-between'>
                            <h1 className='text-2xl  font-medium mb-3'>{product.title}</h1>
                            <div className='flex'>
                                <p className="text-sky-700 text-2xl mb-0 mt-auto" >{Math.ceil((product.price - product.price * product.discount/100)).toLocaleString('vi-VN')} đ</p>
                            </div>
                            {!(product.discount == 0) ?

                                <p className="text-gray-500 line-through" >{product.price.toLocaleString('vi-VN')} đ</p>
                                : ''
                            }
                            {!(product.discount == 0) ?

                                <div className="tag_discount left-0">
                                    <p className="pt-1 text-red-500 leading-1 ">{product.discount}%</p>
                                    <p className="pb-1 -mt-1 text-gray-700">Giảm</p>
                                </div>
                                : ''}
                            <p className='mt-3 mb-3'>{product.short_description}</p>
                            {
                                !(product.detail == null) &&
                                <>
                                    {Array.isArray(product.detail) && product.detail.map((data: DetailTypleProduct, index: number) => (
                                        <div key={index} className="flex py-1">
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
                                </>
                            }

                            <div className="flex justify-center items-center mt-3 text-lg">
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
                            <div className='flex w-100 mt-3'>

                                <button type="button" onClick={()=>btnBuy()} className="btn_cyan_blue">Đặt mua</button>
                                
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


                    </div>
                }

            </div>
        );
    else
        return(
            <></>
        );

}
export default DetailProduct;