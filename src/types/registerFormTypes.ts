export interface registerForm  {
    fullName:string,
    username:string,
    password:string,
    email:string,
<<<<<<< HEAD
    avatar: File  |  string,
    coverImage?:File  | string,
=======
    avatar: File |  null,
    coverImage?:File | null,
>>>>>>> b68e33deb9fe387fd33e297dcc87de0f65abc835
    
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