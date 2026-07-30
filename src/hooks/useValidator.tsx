import type {
  AdminSingup,
  AdminSingupReturn,
} from "../types/registerFormTypes";
export    const useValidator = function () {
  const REGEX = {
    fullName: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phoneNumber: /^\+?[1-9]\d{7,14}$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()_\-+=])[Aa-z\-Zd@$!%*?&#^()_\-+=]{12,128}$/,
  };
  function filedFillValidator(formData: AdminSingup): AdminSingupReturn {
    const { fullName, email, password, username } = formData;

    const isFullNameValid = REGEX.fullName.test(fullName);
    const isEmailValid = REGEX.email.test(email);
    const isUserNameValid = REGEX.fullName.test(username);
    const isPasswordValid = REGEX.password.test(password);

    let isValid = true;

    if (
      isFullNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isUserNameValid &&
      fullName != "" &&
      email != "" &&
      password != "" &&
      username != ""
    ) {
      isValid = false;
    }
 // check true , true , true , true == true
 //check field !=""  true , true if not get false and isvalid == true so user can't procced without the filling all fields
    return { isFullNameValid, isEmailValid, isPasswordValid, isUserNameValid,isValid };
  }
  return {filedFillValidator}
};
