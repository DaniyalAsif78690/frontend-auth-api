import axios from "axios";
import type { loginform ,registerForm} from "../types/registerFormTypes";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/v1/api/users",
  withCredentials :true

});

export interface config {
  headers: {
    "Content-Type": "application/json";
  };
}
export async function postLogin(User: loginform, config: config) {
  const res = axiosInstance.post("/login", User, config as config);
  return res;
}

export interface registerConfig {
  headers:{
    "content-Type":"multipart/form-data"
  }
}

export async function postRegister(User:registerForm ,config:registerConfig) {

  const res  = axiosInstance.post("/register" , User , config as registerConfig)
  return res 
}

export async function testRequest(method:string ,endPoint:string,data:{email?:"",password?:"",fullName?:""},headers:{}){
  const res =  await axiosInstance.request({
    method:method,
    url:endPoint,
    data:data,
    headers:headers,
    withCredentials: true,
  });
  return res 
}