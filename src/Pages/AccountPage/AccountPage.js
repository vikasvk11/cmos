import "../../styles.css";
import "./accountpage.css";
import "../Videopage/videopage.css"
import {useState} from "react";
import { SignUp } from "../../Components/SignUp";
import { Login } from "../../Components/Login";

export function AccountPage() {

    const [toggle, setToggle] = useState(false);
    
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
        </>
    );
}