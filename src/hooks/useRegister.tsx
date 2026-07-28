import type { registerForm } from "../types/registerFormTypes";
import registerUserService from "../api/register.Service.ts";
import { useMutation } from "@tanstack/react-query";
function useRegister() {
  const Mutation =  useMutation({ mutationFn: registerUserService });
  return {Mutation }
}

export default useRegister;
