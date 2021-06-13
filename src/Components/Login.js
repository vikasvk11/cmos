import "../styles.css";
import "../Pages/AccountPage/accountpage.css";
import "../Pages/Videopage/videopage.css";
import { useLogin } from "../Context/AuthProvider";
import {useNavigate, useLocation} from "react-router-dom";

export function Login({toggle}) {

    const {isLogin, loginUserWithCredentials, setIsLogin} = useLogin();
    const navigate = useNavigate();
    const { state } = useLocation();

  async function loginHandler() {
    await loginUserWithCredentials("user1","User1!78");
    navigate(state?.from ? state.from : "/");
    }

    function logoutHandler() {
        localStorage?.removeItem("login");
        setIsLogin(false);
        navigate("/");
    }

    return (
        <>
            <form className={`form-container ${toggle ? "" : "visible"}`}>
                    <h1 className="form-header">Log In to ShutterStream</h1>

                    <div className="input-container">
                        <label htmlFor="email_input" className="form-label">Email Address</label>
                        <input type="email" id="email_input" className="input-bar"/>
                    </div>

                    <div className="input-container">
                        <label htmlFor="passoword_input" className="form-label">Password</label>
                        <input type="password" id="password_input" className="input-bar" required />
                    </div>

                    <div className="btn-submit-container">
                        <button className="btn-primary btn-submit" type="submit">Log In</button>
                    </div>
                    <button onClick={loginHandler} style={{color: "black", marginTop: "1rem"}}>{ isLogin ? "Logged In" : "Logged Out" }</button>
                    <button onClick={logoutHandler} style={{color: "black", marginTop: "1rem"}}>Log Out</button>
            </form>

            
        </>
    )
}