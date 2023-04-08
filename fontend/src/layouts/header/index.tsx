import Head from 'next/head';
import Link from 'next/link';
import { IconNavbar } from '@/components/icon/icon';
import { useState } from 'react';
import Image from 'next/image';
import { MenuPC, MenuMobile } from './menu';
import Search from './search';
import { User } from './user';


export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
        <title>Shop</title>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full bg-white shadow">
        <div className="justify-between flex px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-2 md:block">
            <Link href={'/'}>
            <Image className='object-contain h-11 w-auto' src="/logo/logo_page.svg" alt="Icon" width={300} height={300} />

            </Link>
          </div>
          {/* menu PC */}
          <div className='flex flex-grow-1'>
            <div className='flex pr-5'>
              <MenuPC/>
            </div>
            <div className='flex flex-grow-1 border-l  border-gray-400 pl-8'>
              <Search className=""/>
              <IconNavbar onClick={()=>console.log("oke")} src="/icon/cart_icon.svg" alt="Icon cart" />
              <User/>
            </div>
          </div>

        </div>
      </nav>
    </div>
  );
}