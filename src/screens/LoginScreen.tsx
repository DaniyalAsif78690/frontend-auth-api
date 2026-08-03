import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import type {loginform} from "../types/authTypes"
import {useState} from "react"
 import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  
  const [formData,setFormData] = useState<loginform>({
    email:"",
    password:"",
  })
  const navigate = useNavigate( )
const {loginMutation} = useAuth()
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">

        <h1 className="text-3xl font-bold">
          Welcome Back
        </h1>

        <p className="mt-2 text-gray-500">
          Login to your account
        </p>

        <form className="mt-8 space-y-5 "
onSubmit={(e)=>{
  e.preventDefault()
  loginMutation.mutate(formData, {
    onSuccess: () => {
      setFormData({email:"",password:""});
      navigate("/");
    },
   

  })
}}
>
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e)=>setFormData( (prev)=> ({...prev , email:e.target.value})
               
             )}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e)=>setFormData( (prev)=> ({...prev , password:e.target.value})
               
             )}
          />

          <div className="text-right">
            <button
              type="button"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          <Button type="submit">
            Login
          </Button>

        </form>

        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-black hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;