import { apiClient } from "./axiosInstance";
import type { loginform ,registerForm} from "../../types/registerFormTypes";



export interface config {
    headers: {
      "Content-Type": "application/json";
    };
  }
  export async function postLogin(User: loginform, config: config) {
    const res = apiClient.post("/login", User, config as config);
    return res;
  }
  
  export interface registerConfig {
    headers:{
      "content-Type":"multipart/form-data"
    }
  }
  
  export async function postRegister(User:registerForm ,config:registerConfig) {
  
    const res  = apiClient.post("/register" , User , config as registerConfig)
    return res 
  }
  
  export async function testRequest(method:string ,endPoint:string,data:{ email ?:"", password ?:"", fullName ?:""},headers:{}){
    const res =  await apiClient.request({
      method:method,
      url:endPoint,
      data:JSON.stringify(data),
      headers:headers,
      withCredentials: true,
    });
    return res 
  }