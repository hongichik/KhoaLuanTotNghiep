import Link from "next/link"
import { DropdownPC, DropdownMobile } from "@/components/dropdowns/dropdownsMenu"
import { dropdownData } from "@/components/dataTest"

export const MenuPC = () => {
    return (
        <div className="flex text-base">
            <DropdownPC dropdown={dropdownData} />
            <Link href={'./'} className='px-3 my-auto' >Our Story</Link>
        </div>

    )
}

export const MenuMobile = () => {
    return (
        <>
            <div className="flex flex-col w-full">
                <DropdownMobile dropdown={dropdownData} />
                <Link href={'/'} className='text-base py-2 ' >Trang chủ</Link>
            </div>

        </>
    )
}