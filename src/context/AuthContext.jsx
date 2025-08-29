import { createContext, useState } from "react";
import api from "../Axios/axios";

export const authContext = createContext()

export const AuthProvider = ({ children }) => {
   








    return (
        <authContext.Provider value={{}}>
{children}
        </authContext.Provider>
    )
}

