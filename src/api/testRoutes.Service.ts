import { testRequest } from "../lib/axios/apiRequests.js";
// import { injectAxiosInterceptor } from "../lib/axios/axiosInstance.js";
 

export const testRequests  =async (method:string,url:string,data:{email?:"",password?:"",fullName?:""},headers:{})=>{
 
 const res  =   await  testRequest(method , url , data ,headers);
return res ;
}