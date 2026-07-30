import { create } from 'zustand'
import  type {  registerForm } from "../types/registerFormTypes"
type State ={
    formData:registerForm,
}

type Action ={
    UpdateFormData: (state:registerForm) => void
}
const initialState: registerForm = {
    fullName: "",
    username: "",
    email: "",
    password: "",
    avatar: null,
    coverImage: null,
  };
  
export const useRegisterForm = create<State & Action>((set) =>({
    formData:initialState,
    UpdateFormData: (data:registerForm ) => {
        set((state)=>({
            formData:{
                ...data
            }
         })
    ) 
    
    }
}))