import "../styles.css";
import "../Pages/AccountPage/accountpage.css";
import "../Pages/Videopage/videopage.css";
import { useLogin } from "../Context/AuthProvider";
import {useNavigate, useLocation} from "react-router-dom";

export function Logout() {

    const {isLogin, setIsLogin} = useLogin();
    const navigate = useNavigate();

    function logoutHandler() {
        localStorage?.removeItem("login");
        setIsLogin(false);
        navigate("/");
    }

    return (
        <>
            <div className ="logout-container">
                <p>Thank you for using ShutterStream. Hope you had a great experience. 
                    We are constantly striving to curate the best content for our users to watch and grow.
                </p>
                <button  onClick={logoutHandler} className="btn-primary-outline">Logout</button>
            </div>    
        </>
    )
}