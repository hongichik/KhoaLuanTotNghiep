import { useEffect, useState } from 'react';
import ProductAPI from '../api/ProductAPI';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Grid } from "swiper";
import Product from '../product';
import ProductType from '../type/ProductType';
import { useSelector } from 'react-redux';
import { RootState } from '@/reducers';

const Discount = () => {
    const [productDiscount, setProductDisconut] = useState([]);
    const status = useSelector((state: RootState) => state.DetailProductReducer.status);
    const getProductDiscount = async () => {
        const data = await ProductAPI.getDiscount();
        setProductDisconut(data);
    }
    useEffect(() => {
        getProductDiscount();
    }, [status])
    return (
        <div className='flex py-8'>
            <div className="container">
                <h2 className='text-2xl mt-4 mb-1'>SEO</h2>
                <Swiper
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    grid={{
                        rows: 2,
                    }}
                    speed={2000}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        340: {
                            slidesPerView: 3,
                        },
                        640: {
                            slidesPerView: 4,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                    modules={[Autoplay, Grid]}
                    className="w-full flex flex-wrap product_discount"
                >
                    {productDiscount?.map((data: ProductType, index: number) => (
                        <SwiperSlide key={index} className='p-2'>
                            <div className='rounded-lg shadow-md'>
                                <Product product={data} />
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default Discount;