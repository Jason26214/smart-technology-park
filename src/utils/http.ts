import { message } from "antd";
import axios, {
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from "axios";

const http: AxiosInstance = axios.create({
  baseURL: "https://www.smartechpark.com",
});

// request interceptors
http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  console.log("interceptors request config: ", config);
  return config;
});

// response interceptors
http.interceptors.response.use((response: AxiosResponse) => {
  console.log("interceptors response response: ", response);

  const res = response.data;
  if (res.code !== 200) {
    message.error(`${res.code}: ${res.message}`);
    return Promise.reject(new Error(res.message));
  }
  return res;
});

export default http;
