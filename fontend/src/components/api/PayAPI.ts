import Axios from "@/utils/axios";

const createPay = async (data:FormData) =>{
    return await Axios.post('/api/pay/create',data);
}


const getPay = async (status:number,page:number) =>{
    return await Axios.post('/api/pay/get?status='+status+"&page="+page);
}

const PayAPI = {
    createPay,
    getPay
}
export default PayAPI;