 import type { registerForm } from "../types/registerFormTypes.js";
import   {  postRegister } from "../lib/axios/apiRequests.js";
  

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
   const res = await postRegister(
      formData,
     registerConfig
     
  );
  return res;
};

export default registerUserService;
