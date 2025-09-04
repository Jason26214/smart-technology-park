import "@ant-design/v5-patch-for-react-19";
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
  console.log("interceptors request config(data): ", config.data);
  return config;
});

// response interceptors
http.interceptors.response.use((response: AxiosResponse) => {
  console.log("interceptors response response: ", response);

  const resData = response.data;
  if (resData.code !== 200) {
    message.error(`${resData.code}: ${resData.message}`);
    return Promise.reject(new Error(resData.message));
  }
  return resData;
});

export default http;
