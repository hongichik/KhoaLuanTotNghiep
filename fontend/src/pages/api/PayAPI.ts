import Axios from "@/utils/axios";

const createPay = async (data:FormData) =>{
    return await Axios.post('/api/pay/create',data);
}

const PayAPI = {
    createPay
}
export default PayAPI;