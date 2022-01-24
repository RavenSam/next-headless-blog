import * as yup from "yup"

export const loginSchema = yup.object().shape({
   email: yup.string().email().required(),
   password: yup.string().min(8).max(32).required(),
})

export const signupSchema = yup.object().shape({
   username: yup.string().min(4).max(32).required(),
   email: yup.string().email().required(),
   password: yup.string().min(8).max(32).required(),
   password2: yup.string().oneOf([yup.ref("password"), null], "passwords must match"),
})
