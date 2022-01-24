import { BsEnvelope, BsKey, BsPerson } from "react-icons/bs"

export const loginInputs = [
   { name: "email", label: "your email", type: "email", icon: BsEnvelope, placeholder: "johndoe@exemple.com" },
   { name: "password", label: "your password", type: "password", icon: BsKey, placeholder: "••••••••••" },
]

export const registerInputs = [
   { name: "username", label: "username", type: "text", icon: BsPerson, placeholder: "johndoe" },
   { name: "email", label: "your email", type: "email", icon: BsEnvelope, placeholder: "johndoe@exemple.com" },
   { name: "password", label: "your password", type: "password", icon: BsKey, placeholder: "••••••••••" },
   { name: "password2", label: "confirm password", type: "password", icon: BsKey, placeholder: "••••••••••" },
]
