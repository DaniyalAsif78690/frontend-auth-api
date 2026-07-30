 import type {loginform} from "../types/registerFormTypes.js"
import { postLogin } from "./axiosInstance.js";
import type {config} from "./axiosInstance.js"
const loginUserService = async function (User:loginform) {
  const config = {
    headers:{
    'Content-Type': 'application/json'
    }
  }
  const res = await  postLogin(User,config as config)
  return res ;
};

export default loginUserService;
