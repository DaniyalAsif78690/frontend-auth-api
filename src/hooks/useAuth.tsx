import { useMutation } from "@tanstack/react-query";
import { loginUserService,registerUserService } from "../api/auth.Service";
  
    
export function useAuth(){
 const loginMutation = useMutation({mutationFn:loginUserService})
 const registerMutation =  useMutation({ mutationFn: registerUserService });
 
 return {loginMutation,registerMutation};
}