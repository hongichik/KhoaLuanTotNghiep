// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from 'react';
import CategoryAPI from "@/pages/api/categoriesAPI";
import Link from "next/link";
import Image from "next/image";
import { Autoplay } from "swiper";


const Category = () => {
    const [categories, setCategories] = useState([]);
    const getData = async () => {
        const DataCategories = await CategoryAPI.getCategories();
        setCategories(DataCategories);
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="container">
            <p className="text-2xl mt-4 mb-1">Danh mục</p>
            <Swiper
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                slidesPerView={1}
                spaceBetween={1}
                breakpoints={{
                    0: {
                        slidesPerView: 4,
                    },
                    640: {
                        slidesPerView: 5,
                    },
                    768: {
                        slidesPerView: 6,
                    },
                    1024: {
                        slidesPerView: 9,
                    },
                }}
                modules={[Autoplay]}
                className="w-full border"
            >
                {categories?.map((data: any, index: any) => (
                    <SwiperSlide key={index} className='last:border-r-0 border-r h-11'>
                        <Link href={"/category/"+data.slug} key={index} className=' md:w-full md:first:pb-1 md:last:pt-1 md:last:pl-0 md:first:pr-0 md:px-0  last:pl-1 first:pr-1 '>
                            <Image
                                className='h-full w-full object-cover'
                                src={process.env.API_HOST + 'storage/' + data.image} alt={data.name}
                                loader={() => process.env.API_HOST + 'storage/' + data.image}
                                width={100} height={100}
                            />
                            <p className="text-sm sm:text-base text-center">{data.name}</p>
                        </Link>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>

    )
}

export default Category;