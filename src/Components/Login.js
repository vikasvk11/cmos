import "../styles.css";
import "../Pages/AccountPage/accountpage.css";
import "../Pages/Videopage/videopage.css";
import { useLogin } from "../Context/AuthProvider";
import {useNavigate, useLocation} from "react-router-dom";
import {useState} from "react";

export function Login({toggle}) {

    const {isLogin, loginUserWithCredentials, setIsLogin} = useLogin();
    const navigate = useNavigate();
    const { state } = useLocation();
    const [loginData, setLoginData] = useState({username: "", password: ""});

    async function loginHandler() {
        await loginUserWithCredentials(loginData.username, loginData.password);
        navigate(state?.from ? state.from : "/");
    }

    function usernameHandler(e) {
        setLoginData(prevState => ({...prevState, username: e.target.value}))
    }

    function passwordHandler(e) {
        setLoginData(prevState => ({...prevState, password: e.target.value}))
    }

    return (
        <>
            <form className={`form-container ${toggle ? "" : "visible"}`}>
                <h1 className="form-header">Log In to ShutterStream</h1>

                <div className="input-container">
                    <label htmlFor="email_input" className="form-label">Email Address</label>
                    <input onChange={(e) => usernameHandler(e)} type="email" id="email_input" className="input-bar"/>
                </div>

                <div className="input-container">
                    <label htmlFor="passoword_input" className="form-label">Password</label>
                    <input onChange={(e) => passwordHandler(e)} type="password" id="password_input" className="input-bar" required />
                </div>

                <div className="btn-submit-container">
                    <button onClick={loginHandler} className="btn-primary btn-submit" type="button">Log In</button>
                </div>
            </form>
        </>
    )
}