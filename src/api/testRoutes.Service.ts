import { testRequest } from "./axiosInstance";



export const testRequests  = (method:string,url:string,data:{email?:"",password?:"",fullName?:""},headers:{})=>{
const res  = testRequest(method , url , data ,headers);
return res ;
}