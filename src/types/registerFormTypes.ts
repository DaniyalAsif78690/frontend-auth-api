export interface registerForm  {
    fullName:string,
    username:string,
    password:string,
    email:string,
    avatar: File  |  string,
    coverImage?:File  | string,
    
}

export type AdminSingupReturn = {
    isFullNameValid: boolean
    isEmailValid: boolean
     isPasswordValid: boolean
     isUserNameValid:boolean
     isValid: boolean
  }
  export type AdminSingup = {
    fullName: string
    email: string
    username:string
    password: string
   }
  
  export type loginform = {
    email: string;
    password: string;
  }