import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { useLogin } from "./Context/AuthProvider";

export function PrivateRoute({path, ...props}) {
    const {isLogin, setIsLogin} = useLogin();
    console.log(isLogin);
    return isLogin ? <Route {...props} path={path}  /> : <Navigate state={{from: path}} replace to="/account"/>
  }