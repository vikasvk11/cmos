import "../styles.css";
import "../Pages/AccountPage/accountpage.css";
import "../Pages/Videopage/videopage.css";
import { useLogin } from "../Context/AuthProvider";
import {useNavigate, useLocation} from "react-router-dom";
import {useState} from "react";
import { Loader } from "./Loader";

export function Login({toggle}) {

    const {isLogin, loginUserWithCredentials, setIsLogin} = useLogin();
    const navigate = useNavigate();
    const { state } = useLocation();
    const [loginData, setLoginData] = useState({username: "", password: ""});
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);

    async function loginHandler() {
        setLoader(true);
        try {
            const response = await loginUserWithCredentials(loginData.username, loginData.password);
            navigate(state?.from ? state.from : "/");
        } catch (error) {
            if(error.response.data.error === "Invalid Password") {
                setError("Wrong Password");
                setLoginData(prevState => ({...prevState, password: ""}))
            } else {
                setError("Email doesn't exist. Please Sign Up.")
                setLoginData({username: "", password: ""})
            }
        } finally {
            setLoader(false);
        }
    }

    function usernameHandler(e) {
        setLoginData(prevState => ({...prevState, username: e.target.value}));
        setError("");
    }

    function passwordHandler(e) {
        setLoginData(prevState => ({...prevState, password: e.target.value}));
        setError("");
    }

    function autoFill() {
        setLoginData({username: "viking123@gmail.com", password: "Viking1"});
    }

    return (
        <>
            <form className={`form-container ${toggle ? "" : "visible"}`}>
                <h1 className="form-header" onClick={autoFill}>Log In to ShutterStream</h1>

                <div className="input-container">
                    <label htmlFor="email_input" className="form-label">Email Address</label>
                    <input onChange={(e) => usernameHandler(e)} type="email" id="email_input" className="input-bar" value={loginData.username}/>
                </div>

                <div className="input-container">
                    <label htmlFor="passoword_input" className="form-label">Password</label>
                    <input onChange={(e) => passwordHandler(e)} type="password" id="password_input" className="input-bar" required value={loginData.password}/>
                </div>

                <p style={{color: "#cd3c3c", marginBottom: "1rem", fontSize: "0.8rem"}}>{error}</p>

                <div className="btn-submit-container">
                    <button disabled={loader} onClick={loginHandler} className="btn-primary btn-submit" type="button">{loader ? <Loader/> : "Log In"}</button>
                </div>
            </form>
        </>
    )
}