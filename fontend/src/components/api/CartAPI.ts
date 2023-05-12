import Axios from "@/utils/axios";

const setCart = async (id:number, data:FormData) =>{
    return Axios.post(`/api/cart/${id}`,data);
}
const deleteCart = async (id:number) =>{
    return Axios.delete(`/api/cart/${id}`);
}

const getCart = async ()=>{
    return await Axios.get('/api/cart');
} 
const CartAPI = {
    setCart,
    deleteCart,
    getCart
}

export default CartAPI;