import Axios from "@/utils/axios";

const getMenuPC = async () =>{
    const data = await Axios.post('api/menu');
    return data;
}
const getMenuMoblie = async () =>{
    const data = await Axios.post('api/menu');
    return data;
}
const menuAPI ={
    getMenuPC,
    getMenuMoblie
}

export default menuAPI;