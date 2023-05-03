import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import advertisementAPI from '@/pages/api/advertisementAPI';
import { Pagination, Autoplay } from "swiper";
import Image from 'next/image';
import Link from 'next/link';

const BannerTop = () => {
    const [dataRight, setDataRight] = useState([]);
    const [dataLeft, setDataLeft] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const dataRight = await advertisementAPI.getBannerRight();
            setDataRight(dataRight);
            const dataLeft = await advertisementAPI.getBannerLeft();
            setDataLeft(dataLeft);
        }
        getData();
    }, []);

    return (
        <div className='flex bg-gray-200'>
            <div className='container flex flex-wrap pt-8 pb-8'>
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    speed={800}
                    className='w-full md:w-8/12'
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                >
                    {dataRight?.map((banner: any, index: any) => (
                        <SwiperSlide key={index} className='h-full'>
                            <Link href={banner.url}>
                                <Image
                                    className='md:pr-2 md:pb-0 pb-2  h-full w-full object-cover'
                                    src={process.env.API_HOST + 'storage/' + banner.image} alt={banner.name}
                                    loader={() => process.env.API_HOST + 'storage/' + banner.image}
                                    width={790} height={235} />
                            </Link>

                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='flex md:w-4/12 md:flex-col w-full flex-row'>
                    {dataLeft?.map((banner: any, index: any) => (
                        <Link href={banner.url} key={index} className='w-6/12 md:w-full md:first:pb-1 md:last:pt-1 md:last:pl-0 md:first:pr-0 md:px-0  last:pl-1 first:pr-1 '>
                            <Image
                                className='h-full w-full object-cover'
                                src={process.env.API_HOST + 'storage/' + banner.image} alt={banner.name}
                                loader={() => process.env.API_HOST + 'storage/' + banner.image}
                                width={389} height={115}
                            />
                        </Link>

                    ))}
                </div>
            </div>
        </div>

    );
}

export default BannerTop;
