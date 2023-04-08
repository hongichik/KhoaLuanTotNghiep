import Axios from 'axios';
import Cookie from './cookie';
import { EnCode, DeCode } from "@/utils/encode";

class AxiosClass {

    $axios;

    constructor() {
        this.$axios = Axios.create({
            baseURL: process.env.API_HOST,
            timeout: 300000,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                
            },
            // withCredentials: true
        });

        this.$axios.interceptors.request.use(function (config) {
            const accessToken = Cookie.GetCookie('accessToken');
            if (accessToken != null) {
                config.headers.Authorization = `Bearer ${DeCode(accessToken)}`;
            }
            return config;
        });
    }

    async get(url:string, query?:any) {
        try {
            const response = await this.$axios.get(url, { params: query });
            return response.data.data;
        } catch (error) {
            return false;
        }
    }

    async post(url:string, data:any) {
        try {
            const response = await this.$axios.post(url, data);

            return response.data;
        } catch (error) {
            return false;
        }
    }

    async patch(url:string, data:any) {
        try {
            const response = await this.$axios.patch(url, data);
            return response.data.data;
        } catch (error) {
            return false;
        }
    }

    async put(url:string, data:any) {
        try {
            const response = await this.$axios.put(url, data);
            return response.data.data;
        } catch (error) {
            return false;
        }
    }

    async delete(url:string) {
        try {
            const response = await this.$axios.delete(url);
            return response.data.data;
        } catch (error) {
            return false;
        }
    }
}

const adminAxios = new AxiosClass();
export default adminAxios;
