import Axios from "axios";

class AxiosClass {
  $axios;

  constructor(token = null) {
    this.$axios = Axios.create({
      baseURL: process.env.API_HOST,
      timeout: 300000,
      headers: {
        Accept: "multipart/form-data",
        "Content-Type": "multipart/form-data",
        "Authorization": `Bearer ${token}`
      },
      // withCredentials: true
    });

    // this.$axios.interceptors.request.use(function (config) {
    //   console.log(token+"   oke");
    //   if (token != null) {
    //     config.headers.Authorization = `Bearer ${token}`;
    //   }
    //   return config;
    // });
  }

  async get(url, query) {
    try {
      const response = await this.$axios.get(url, { params: query });
      return response.data;
    } catch (error) {
      return false;
    }
  }

  async post(url, data) {
    try {
      const response = await this.$axios.post(url, data);

      return response.data;
    } catch (error) {
        // console.log(error);
        // console.log(error.response);

      return false;
    }
  }

  async patch(url, data) {
    try {
      const response = await this.$axios.patch(url, data);
      return response.data.data;
    } catch (error) {
      return false;
    }
  }

  async put(url, data) {
    try {
      const response = await this.$axios.put(url, data);
      return response.data.data;
    } catch (error) {
      return false;
    }
  }

  async delete(url) {
    try {
      const response = await this.$axios.delete(url);
      return response.data.data;
    } catch (error) {
      return false;
    }
  }
}

export default AxiosClass;
