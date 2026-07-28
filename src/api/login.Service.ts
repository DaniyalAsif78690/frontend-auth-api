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
};

export default loginUserService;
