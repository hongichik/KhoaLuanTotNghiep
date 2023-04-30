import { IconNavbar } from "@/components/icon/icon";
import { useEffect, useRef, useState } from "react";


const Search = ({ className }: { className: string }) => {
    const [drop, setDrop] = useState(false);
    const searchRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);
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

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        // console.log(searchRef.current?.value);
    }
    return (
        <div ref={dropdownRef} className={`relative flex` + className}>
            <IconNavbar onClick={() => { setDrop(!drop) }} src="/icon/search_icon.svg" alt="Icon search" />
            {drop &&
                <div className="dropMenu w-96 p-2 z-10">
                    <form className="w-pull h-pull flex text-sm" onSubmit={handlerSubmit}>
                        <input ref={searchRef} type="text" className="input_from my-auto" placeholder="Tìm kiếm" required />
                        <button type="submit" className="my-auto ml-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg  px-5 py-2.5 text-center ">
                            Tìm kiếm
                        </button>
                    </form>

                </div>
            }
        </div>

    )
}

export default Search;