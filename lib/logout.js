import axios from "axios"
import Cookies from "js-cookie"

const logout = async () => {
   await axios.get("/api/auth/logout")
   Cookies.remove("user")
}

export default logout
