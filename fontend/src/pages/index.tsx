
import BannerTop from '@/components/home/Bannertop';
import Category from '../components/home/Category';
import Discount from '../components/home/Discount';
import BannerBetween from '@/components/home/BannerBetween';
import Products from '@/components/home/Products';

export default function Home() {

  return (
    <>
        <BannerTop/>
        <Category/>
        <Discount/>
        <BannerBetween/>
        <Products/>
    </>
  )
}
