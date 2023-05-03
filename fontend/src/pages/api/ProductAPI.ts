import Axios from "@/utils/axios";

const getDiscount = async () =>{
    return Axios.post('/api/product/discount');
}

const getCategoryProducts = async (page: number,category: string) => {
    return Axios.post(`/api/product/${category}?page=${page}`)
}

const getProducts = async (page: number) => {
    return Axios.post(`/api/product?page=${page}`)
}
const getProductDetail = async (name: any) => {
    const data = await Axios.get(`/api/product/detailProduct/${name}`);
    return data;
}
const ProductAPI = {
    getDiscount,
    getProducts,
    getProductDetail,
    getCategoryProducts
}

export default ProductAPI;