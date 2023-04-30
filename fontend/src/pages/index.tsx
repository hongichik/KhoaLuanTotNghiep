
import Layout from '@/layouts'
import Link from 'next/link'

import BannerTop from '@/components/home/Bannertop';
import Category from '../components/home/Category';
import Discount from '../components/home/Discount';
import BannerBetween from '@/components/home/BannerBetween';
import Products from '@/components/home/Products';
import DetailProduct from '@/components/product/DetailProduct';

export default function Home() {

  return (
    <>
        <BannerTop/>
        <Category/>
        <Discount/>
        <BannerBetween/>
        <Products/>
        <DetailProduct/>
    </>
  )
}
