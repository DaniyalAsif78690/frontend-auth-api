import { useMutation } from "@tanstack/react-query";
 import useRequestData from "../store/requestData";
//  import { ejectAxiosInterceptor } from "../lib/axios/axiosInstance";
import { testRequests } from "../api/testRoutes.Service.js";
export function useRequest() {
  const Mutation = useMutation({
    mutationFn: () => {
      const { Method, endPoint, requestBoady } = useRequestData.getState();

      const request = testRequests(Method, endPoint, requestBoady, {
        "content-Type": "application/json",
      });

      return request;
    },

     
         
      
  });
  return Mutation;
}
