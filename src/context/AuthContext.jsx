import { createContext, useState } from "react";
import api from "../Axios/axios";
import toast from "react-hot-toast";


export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        email : '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
   
//Login function//
const login = async(email, password) => {
    try {
        setLoading(true);
        const response = await api.post("/login", { email, password });

          if (response.data.success) {
                setUser(response.data.user)
                setLoading(false)
                return response.data
            }

      
    } catch (error) {
        const msg = error.response?.data?.message
            setLoading(false)
            return { success: false, message: msg }
    }
}


const handleLogout = async () => {
    try {
        const response = await api.post('/logout')
    if(response.data.success) {
        return response.data
    }
    } catch (error) {
        toast.error(error.response.data.message)
    }
    
}





    return (
        <AuthContext.Provider value={{ user, login, loading, handleLogout}}>
{children}
        </AuthContext.Provider>
    )
}

