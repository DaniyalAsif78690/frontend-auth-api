import { useMutation } from "@tanstack/react-query";
import  loginUserService  from "../api/login.Service.js"

export function useLogin(){

const loginMutation = useMutation({mutationFn:loginUserService})
 return {loginMutation};
}