import axios from "axios";
import type { registerForm } from "../types/registerFormTypes";
import type { registerConfig } from "./axiosInstance";
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

  const res = await axios.post(
    "/register",
    formData,
    registerConfig as registerConfig,
  );
  return res;
};

export default registerUserService;
