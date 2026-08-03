import type { registerForm } from "../types/authTypes.js";
 import { apiClient } from "../lib/axios/axiosInstance.js";
 import type {loginform} from "../types/authTypes.js"


const registerUserService = async function (User: registerForm) {
 
  const formData = new FormData();

  Object.keys(User).forEach((key) => {
    formData.append(key, User[key as keyof registerForm] || "")
  });

   const res = await apiClient.post("/register" , formData )
  return res;
};

     
const loginUserService = async function (User:loginform) {
   
  const res = apiClient.post("/login", User );   return res ;
};

export   {loginUserService ,registerUserService};
 