import Axios from "@/utils/axios";
const getCategories = async ()=>{
    return Axios.post('/api/categories');
}

const CategoryAPI = {
    getCategories,
}

export default CategoryAPI;