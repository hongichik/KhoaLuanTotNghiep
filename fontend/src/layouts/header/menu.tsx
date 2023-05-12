import Link from "next/link"
import { DropdownPC, DropdownMobile } from "@/components/dropdowns/dropdownsMenu"
import menuAPI from "@/components/api/menuAPI"
import { useState, useEffect } from 'react';
import { User } from "./user";

export const MenuPC = () => {
    const [menu, setMenu] = useState([]);
    const getMenu = async () => {
        const data = await menuAPI.getMenuPC();
        setMenu(data);
    }
    useEffect(() => {
        getMenu();
    }, [])
    return (
        <div className="flex text-base">
            {menu?.map((item: any, index) => (
                item.children.length == 0 ?
                    <Link href={item.url} className='px-3 my-auto' key={index}>{item.title}</Link>
                    :
                    <DropdownPC dropdown={item} key={index} />
            ))}
        </div>

    )
}

export const MenuMobile = () => {
    const [menu, setMenu] = useState([]);
    const getMenu = async () => {
        const DataMenu = await menuAPI.getMenuMoblie();
        setMenu(DataMenu);
    }
    useEffect(() => {
        getMenu();
    }, [])
    return (
        <>
            <div className="flex flex-col w-full">
                <div className="flex justify-end">
                    <User />
                </div>
                {menu?.map((item: any, index) => (
                    item.children.length == 0 ?
                        <Link href={item.url} className='text-base py-2 ' key={index}>{item.title}</Link>
                        :
                        <DropdownMobile dropdown={item} key={index} />
                ))}
            </div>

        </>
    )
}