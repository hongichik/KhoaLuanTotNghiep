import Link from "next/link";
import { Dropdown } from "../type/dropdown";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
interface DropdownProps {
    dropdown: Dropdown
}
export const DropdownPC: React.FC<DropdownProps> = ({ dropdown }) => {
    const [drop, setDrop] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDrop(false);
            }
        };
        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [dropdownRef]);
    return (
        <div className="flex relative px-3 unselect my-auto">
            <p ref={dropdownRef} className="cursor-pointer flex" onClick={() => setDrop(!drop)}>
                {dropdown.name}
                <Image src={'/icon/down_icon.svg'} className="w-6 ml-1" alt="icon" width={30} height={30} />
            </p>
            {drop &&
                <div className="dropMenu">
                    {dropdown.child.map((item, index) => (
                        <div className="flex hover:bg-slate-100" key={index}>
                            <Link href={item.url} className='px-6 py-2 ' key={index}>{item.name}</Link>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}


export const DropdownMobile: React.FC<DropdownProps> = ({ dropdown }) => {
    const [drop, setDrop] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDrop(false);
            }
        };
        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [dropdownRef]);
    return (
        <>
            <div className="flex unselect my-auto w-full">
                <p ref={dropdownRef} className="cursor-pointer flex py-2 border-b-2 justify-between w-full" onClick={() => setDrop(!drop)}>
                    {dropdown.name}
                    <Image src={'/icon/down_icon.svg'} className="w-6 ml-1" alt="icon" width={30} height={30} />
                </p>

            </div>
            {drop &&
                <div className="flex flex-col top-10 right-0 whitespace-nowrap">
                    {dropdown.child.map((item, index) => (
                        <div className="flex hover:bg-slate-100 " key={index}>
                            <Link href={item.url} className='px-6 py-2 ' key={index}>{item.name}</Link>
                        </div>
                    ))}
                </div>
            }
        </>

    )
}