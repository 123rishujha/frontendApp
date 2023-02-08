import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../Redux/store"


const RequireAuth = ({children}: {children: JSX.Element}) =>{
    const location = useLocation();
    console.log("RequireAuth-file",location)
    const isAuth = useAppSelector((store)=>store.authReducer.isAuth);
    if(isAuth===false){
        return <Navigate to='/login' replace state={{data: location.pathname}} />
    }
    return children;
}

export default RequireAuth;
