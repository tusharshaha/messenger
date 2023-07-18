import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 10000,
  withCredentials: true
};

const axiosRequest: AxiosInstance = axios.create(axiosConfig);



export default axiosRequest;