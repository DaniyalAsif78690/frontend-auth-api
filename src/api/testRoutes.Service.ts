 import { apiClient } from "../lib/axios/axiosInstance.js";

export const testRequests  = async (method:string,url:string,data:{email?:"",password?:"",fullName?:""},headers:{})=>{
 
    const res =  await apiClient.request({
        method:method,
        url:url,
        data:JSON.stringify(data),
        headers:headers,
        withCredentials: true,
      });
      return res;
} 