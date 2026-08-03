 import { apiClient } from "../lib/axios/axiosInstance.js";

export const testRequests  = async (method:string,url:string,data:{email?:"",password?:"",fullName?:""})=>{
 
    const res =  await apiClient.request({
        method:method,
        url:url,
        data:data,
        withCredentials: true,
      });
      return res;
} 