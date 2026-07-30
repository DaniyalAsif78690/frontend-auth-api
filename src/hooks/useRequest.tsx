import { useMutation } from "@tanstack/react-query";
import { testRequests } from "../api/testRoutes.Service";
import useRequestData from "../store/requestData";

 

export function useRequest (){
const Mutation = useMutation({mutationFn:()=> {
    const {Method,endPoint , requestBoady} =useRequestData.getState()

   return  testRequests(Method, endPoint , requestBoady , {"content-Type":"application/json"})}})
return Mutation;
}

