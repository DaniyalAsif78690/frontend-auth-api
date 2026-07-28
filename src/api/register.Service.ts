 import type {registerForm} from '../types/registerFormTypes'
const registerUserService = async function (User:registerForm){
    const formData = new FormData();
   formData.append("fullName" , User.fullName)
   formData.append("username",User.username)
   formData.append("password",User.password)
   formData.append("email",User.email)
   
    formData.append("avatar",User.avatar || ""  )

 
   
    formData.append("coverImage",User.coverImage || ""  )

 


    const res = await fetch("http://localhost:5000/v1/api/register",{
        method:"POST",
        
      body: formData,

    })
return res.json()
}


export default registerUserService