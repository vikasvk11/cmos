import "../styles.css";
import "../Pages/AccountPage/accountpage.css";
import "../Pages/Videopage/videopage.css";
import { useState } from "react";
import { usePasswordValidator } from "../CustomHooks/PasswordValidator";

export function SignUp({toggle}) {

    const [password, setPassword] = useState({password: "", confirmPassword: ""});

    const {isLongEnough} = usePasswordValidator({password1: password.password, password2: password.confirmPassword});

    function passwordValueHandler(e) {
        
        setPassword({
            ...password,
            password: e.target.value
        });

    }

    function confirmPasswordValueHandler(e) {
        
        setPassword({
            ...password,
            confirmPassword: e.target.value
        });

    }

    console.log(isLongEnough);

    return (
        <>
            <form className={`form-container ${toggle ? "visible" : ""}`}>
                    <h1 className="form-header">Join ShutterStream</h1>
                    <div className="input-container">
                        <label htmlFor="email_input" className="form-label">Email Address</label>
                        <input type="email" id="email_input" className="input-bar"/>
                    </div>

                    <div className="input-container">
                        <label htmlFor="passoword_input" className="form-label">Password</label>
                        <input type="password" id="password_input" className="input-bar" onChange={(e) => passwordValueHandler(e)} required />
                    </div>

                    <div className="input-container">
                        <label htmlFor="passoword_input" className="form-label">Confirm Password</label>
                        <input type="password" id="password_input" className="input-bar" onChange={(e) => confirmPasswordValueHandler(e)} required />
                    </div>

                    <div className="btn-submit-container">
                        <button className="btn-primary btn-submit" type="submit">Sign Up</button>
                    </div>
            </form>
        </>
    );
}