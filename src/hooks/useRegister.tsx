 import registerUserService from "../api/register.Service.js";
import { useMutation } from "@tanstack/react-query";
function useRegister() {
  const Mutation =  useMutation({ mutationFn: registerUserService });
  return {Mutation }
}

export default useRegister;
