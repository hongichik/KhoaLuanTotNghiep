import Image from "next/image";
import { useState, useEffect } from 'react';
import { CommentType } from "../type/CommentType";
import CommentAPI from '../api/CommentAPI';
import Convert from "@/utils/convert";
import SocketIo from '../../utils/SocketIo/SocketIoProduct';
import { useLayoutContext } from '../../layouts/index';
import { useRouter } from 'next/router';

interface CommentProductProps {
    id: number;
}

const CommentProduct: React.FC<CommentProductProps> = ({ id }) => {
    const [comment, setComment] = useState<CommentType[]>();
    const [postComment, setPostComment] = useState("");
    const user = useLayoutContext();
    const router = useRouter();
    const getComment = async () => {
        const data = await CommentAPI.getCommentProduct(id)
        setComment(data);
    }
    const createComment = async () => {
        if(user?.user.login)
        {
            const data = await CommentAPI.createCommentProduct(id, postComment);
            SocketIo.createComment(id, data);
            setPostComment("");
        }
        else
        {
            router.push('/auth/login')
        }



    }
    const handlePostcomment = (e:any) =>{
        if (e.key === 'Enter') {
            createComment();
            return;
        }
    }
    useEffect(() => {
        getComment();
    }, [])

    useEffect(() => {
        if(comment)
        {
            SocketIo.watchComment(comment, setComment);
        }
        
    }, [comment])
    return (
        <section className="bg-white dark:bg-gray-900 pb-8 pt-3 px-5 text-base">
            <div className=" mx-auto px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Bình luận</h2>
                </div>
                <div className="mb-6">
                    <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                        <textarea
                            value={postComment}
                            onChange={(event) => setPostComment(event.target.value)}
                            onKeyDown={handlePostcomment}
                            className="px-0 w-full text-base h-24 text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Nội dung..." required></textarea>
                    </div>
                    <button type="button" onClick={() => createComment()} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                        Gửi
                    </button>
                </div>
                {comment?.map((item: CommentType, index: number) => (
                    <article key={index} className={`${!(index == 0) && "border-t border-gray-200"} py-6 text-base bg-white rounded-lg dark:bg-gray-900 `}>
                        <footer className="flex justify-between items-center mb-2">
                            <div className="flex items-center">
                                <p className="inline-flex items-center mr-3 text-base text-gray-900 dark:text-white">
                                    <Image
                                        src={process.env.API_HOST + 'storage/' + item.userAvatar}
                                        loader={() => process.env.API_HOST + 'storage/' + item.userAvatar}
                                        alt={item.userName}
                                        className="mr-2 w-7 h-7 rounded-full" width={50} height={50} />
                                    {item.userName}
                                </p>
                                <p className="text-base text-gray-600 dark:text-gray-400">
                                    {Convert.timeConvert(item.created_at)}
                                </p>
                            </div>
                        </footer>
                        <p className="text-gray-500 dark:text-gray-400">
                            {item.content}
                        </p>
                    </article>
                ))}

            </div>
        </section>
    );
}

export default CommentProduct;