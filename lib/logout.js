import axios from "axios"

const logout = async () => {
   await axios.get("/api/auth/logout")
   localStorage.removeItem("user")
   location.reload()
}

export default logout
