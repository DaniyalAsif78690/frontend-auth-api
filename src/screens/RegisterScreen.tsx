import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import FileInput from "../components/ui/FileInput";
import useRegister from "../hooks/useRegister";
import type { registerForm } from "../types/registerFormTypes";
 import {useNavigate} from "react-router-dom"
const initialFormData: registerForm = {
  fullName: "",
  username: "",
  email: "",
  password: "",
  avatar: null,
  coverImage: null,
};



const Register = () => {
  const [formData, setFormData] = useState<registerForm>(initialFormData);
  const { Mutation } = useRegister();
const navigate = useNavigate()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    console.log(name, files, files?.[0]);

    setFormData((prev) => ({
      ...prev,
      [name]: files?.[0] ?? null,
    }));
  };

  
 
 

  
 
  
 

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold">Create Account</h1>

        <p className="mt-2 text-gray-500">Join us and start shopping today.</p>

        <form
          className="mt-8 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            Mutation.mutate(formData, {
              onSuccess: () => {
                setFormData(initialFormData);
                navigate("/login");
              },
            });
          
           }}
        >
          <Input
            label="Full Name"
            name="fullName"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
          />

          <Input
            label="Username"
            name="username"
            placeholder="john_doe"
            value={formData.username}
            onChange={handleChange}
          />

          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            label="Password"
            type="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
          />

          <FileInput label="Avatar" name="avatar" onChange={handleFileChange} />

          <FileInput
            label="Cover Image"
            name="coverImage"
            onChange={handleFileChange}
          />

          <Button type="submit"  >Create Account</Button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <span className="cursor-pointer font-semibold text-black hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
