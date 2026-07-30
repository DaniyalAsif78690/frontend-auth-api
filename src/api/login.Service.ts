<<<<<<< HEAD
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
=======
import type {loginform} from "../types/registerFormTypes"
const loginUserService = async function (User:loginform) {
  const res = await fetch("http://localhost:5000/v1/api/login", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(User),
  });
  return res.json();
>>>>>>> b68e33deb9fe387fd33e297dcc87de0f65abc835
};

export default loginUserService;
