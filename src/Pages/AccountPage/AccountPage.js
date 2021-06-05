import "../../styles.css";
import "./accountpage.css";
import "../Videopage/videopage.css"
import {useState} from "react";
import { SignUp } from "../../Components/SignUp";
import { Login } from "../../Components/Login";
import { useLogin } from "../../Context/AuthProvider";
import {useNavigate, useLocation} from "react-router-dom";

export function AccountPage() {

    const [toggle, setToggle] = useState(false);
    const {isLogin, setIsLogin} = useLogin();
    const navigate = useNavigate();
    const { state } = useLocation();

    return (
        <>
            <div className="signup-container">
                <div className="accountpage-actions_btns">
                    <button onClick={() => setToggle(false)} className={`btn-primary-outline accountpage-btn ${toggle ? "" : "active"}`}>Log In</button>
                    <button onClick={() => setToggle(true)} className={`btn-primary-outline accountpage-btn ${toggle ? "active" : ""}`}>Sign Up</button>
                </div>
                <SignUp toggle={toggle}/>
                <Login toggle={toggle}/>
            </div>

            <button onClick={() => {
                setIsLogin(prevState => !prevState)
                navigate(state?.from ? state.from : "/")
            }} style={{color: "black"}}>{ isLogin ? "Logged In" : "Logged Out" }</button>
        </>
    );
}