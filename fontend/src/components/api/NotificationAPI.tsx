import Axios from "@/utils/axios";

const getNotification = async (page:number) =>{
    return await Axios.post('/api/notification?page='+page);
}

const getBlockchain = async (page:number) =>{
    return await Axios.post('/api/blockchain?get='+page);
}

const NotifacationAPI = {
    getNotification,
    getBlockchain
}

export default NotifacationAPI;