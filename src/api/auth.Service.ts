import type { registerForm } from "../types/authTypes.js";
 import { apiClient } from "../lib/axios/axiosInstance.js";
 import type {loginform} from "../types/authTypes.js"


const registerUserService = async function (User: registerForm) {
 
  const formData = new FormData();

  Object.keys(User).forEach((key) => {
    formData.append(key, User[key as keyof registerForm] || "")
  });
  const registerConfig = {
    headers: {
      "content-Type": "multipart/form-data",
    },
  };
   const res = await apiClient.post("/register" , formData ,registerConfig)
  return res;
};

     
const loginUserService = async function (User:loginform) {
   const config = {
    headers:{
    'Content-Type': 'application/json'
    }
  }
  const res = apiClient.post("/login", User, config );   return res ;
};

export   {loginUserService ,registerUserService};
 