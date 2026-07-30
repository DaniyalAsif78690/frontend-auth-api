import { useMutation } from "@tanstack/react-query";
import  loginUserService  from "../api/login.Service.js"
import { useCookies } from 'react-cookie';

type AuthCookies = {
    refreshToken:string    
    accessToken:string   
}
export function useLogin(){
    const [cookies] = useCookies<keyof AuthCookies>(['accessToken', 'refreshToken'])
const loginMutation = useMutation({mutationFn:loginUserService})
console.log(cookies);

 
 return {loginMutation};
}