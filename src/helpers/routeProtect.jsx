import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router"
import { currentUser } from "../store/features/authSlice"


export const PrivateRoute = ({children}) => {
    const dispatch = useDispatch()
    const {users, error, loading} = useSelector((store) => store.auth)
console.log(users)




if (loading) return <div>Loading....</div>

return users ? children : <Navigate to ={'/login'} replace/>

}


export const PublicRoute = ({children}) => {
    // const dispatch = useDispatch()
    const {users, error, loading} = useSelector((store) => store.auth)
console.log(users)

if (loading) return <div>Loading....</div>

return !users ? children : <Navigate to ={'/dashboard'} replace/>

}