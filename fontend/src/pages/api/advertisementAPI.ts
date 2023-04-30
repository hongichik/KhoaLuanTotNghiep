import Axios from "@/utils/axios";

const getBannerRight = async () =>{
    const data = await Axios.post('/api/advertisement/carousel_banner_right');
    return data;
}
const getBannerLeft = async () =>{
    const data = await Axios.post('/api/advertisement/banner_left');
    return data;
}
const advertisementAPI = {
    getBannerRight,
    getBannerLeft
}
export default advertisementAPI;