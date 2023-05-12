import PaginationType from '@/components/type/PaginationType';
import React from 'react';
interface ComponentPaginationProps{
    pagination: PaginationType;
    btn_page: (page:number)=>void;
}

const ComponentPagination: React.FC<ComponentPaginationProps> = ({pagination,btn_page}) => {
    return (
        <>
            {pagination.total > pagination.per_page &&
                <div className="w-full">
                    <div className="flex flex-col items-center">
                        <span className="text-sm text-gray-700 dark:text-gray-400">
                            Hiển thị
                            <span className="font-semibold text-gray-900 dark:text-white">
                                {" "} từ {pagination.from}</span>
                            {" "}đến {" "}
                            <span className="font-semibold text-gray-900 dark:text-white">
                                {pagination.to}
                            </span> trong <span className="font-semibold text-gray-900 dark:text-white">
                                {pagination.total}
                            </span>
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                            {pagination.prev_page_url == 0 ?
                                <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg cursor-auto border border-gray-200 ">
                                    Trang trước
                                </button>
                                :
                                <button type="button" onClick={() => btn_page(pagination.prev_page_url)} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                    Trang trước
                                </button>
                            }

                            {pagination.next_page_url == 0 ?
                                <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg cursor-auto border border-gray-200">
                                    Trang sau
                                </button>
                                :
                                <button type="button" onClick={() => btn_page(pagination.next_page_url)} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                    Trang tiếp theo
                                </button>
                            }
                        </div>
                    </div>
                </div>
            }</>
    )
}
export default ComponentPagination;