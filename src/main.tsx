import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 import "./App.css";
import {QueryClientProvider, QueryClient}  from "@tanstack/react-query"
import Home from "./screens/Home.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from "./screens/RegisterScreen.jsx";
import UserScreen from "./screens/UserScreen.jsx";
import {  CookiesProvider } from "react-cookie";
import axios from "axios";
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/user",
    element: <UserScreen />,
  },
]);

const queryClient = new  QueryClient()
 axios.interceptors.request.use((config)=>{

  config.headers.common["Authorization"] = `Bearer `
  return config
})
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CookiesProvider>
    <QueryClientProvider client={queryClient}> 
    <RouterProvider router={router} />
    </QueryClientProvider>
    </CookiesProvider>
  </React.StrictMode>
);