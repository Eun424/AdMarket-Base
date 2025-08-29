import { createContext, useState } from "react";
import api from "../Axios/axios";


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







    return (
        <AuthContext.Provider value={{ user, login, loading}}>
{children}
        </AuthContext.Provider>
    )
}

