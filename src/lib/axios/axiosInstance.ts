import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:5000/v1/api/users",
  withCredentials: true,
  
});

// let instanceID: number | null = null;

// export function ejectAxiosInterceptor(){

//     apiClient.interceptors.request.eject(instanceID as number)
 
//  }

// export function injectAxiosInterceptor(token: string) {
//   if (instanceID != null) return;

//   instanceID = apiClient.interceptors.request.use((config) => {
//     config.headers.common["Authorization"] = `Bearer ${token}`;
   
//     return config;
//   });
// }
