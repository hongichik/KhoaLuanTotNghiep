import Axios from "@/utils/axios";

const getDiscount = async () =>{
    return Axios.post('/api/product/discount');
}

const getProducts = async (page: number) => {
    return Axios.post(`/api/product?page=${page}`)
}
const ProductAPI = {
    getDiscount,
    getProducts
}

export default ProductAPI;