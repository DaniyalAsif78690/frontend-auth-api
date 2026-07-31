 import type {loginform} from "../types/registerFormTypes.js"
import { postLogin } from "../lib/axios/apiRequests.js";
import type {config} from "../lib/axios/apiRequests.js"
 
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
