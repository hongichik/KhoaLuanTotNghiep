import Axios from "@/utils/axios";

const createCommentProduct = async (id:number, content: string) => {
    const formData = new FormData();
    formData.append('product_id', String(id));
    formData.append('content',content);
    return await Axios.post('/api/comment/create',formData);
}

const getCommentProduct = async (id:number) => {
    return await Axios.get(`/api/comment/${id}`);
}

const CommentAPI = {
    createCommentProduct,
    getCommentProduct
}

export default CommentAPI;