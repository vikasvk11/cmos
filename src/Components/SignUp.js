import "../styles.css";
import "../Pages/AccountPage/accountpage.css";
import "../Pages/Videopage/videopage.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePasswordValidator } from "../CustomHooks/PasswordValidator";

export function SignUp({toggle}) {

    const [email, setEmail] = useState({email: "", validation: null});
    const [password, setPassword] = useState({password: "", confirmPassword: ""});
    const [commentState, setCommentState] = useState({p1: false, p2: false, p3: false});
    const navigate = useNavigate();

    const {
        isLongEnough, 
        hasNumber, 
        hasUpperCase, 
        hasLowerCase, 
        hasSpecialCharacters, 
        isEqual,
        all
    } = usePasswordValidator({password1: password.password, password2: password.confirmPassword});


    function emailHandler(e) {
        setCommentState( prevState => ({...prevState, p3: true}))
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if(regex.test(e.target.value)) {
            setEmail((prevState) => ({...prevState, email: e.target.value, validation: true}));
        } else setEmail(prevState => ({...prevState, email: e.target.value, validation: false}));   
    }


    function passwordValueHandler(e) {
        setCommentState( prevState => ({...prevState, p1: true}) );
        setPassword({
            ...password,
            password: e.target.value
        });
    }

    function confirmPasswordValueHandler(e) {  
        setCommentState( prevState => ({...prevState, p2: true}) );
        setPassword({
            ...password,
            confirmPassword: e.target.value
        });
    }

    async function signUp() {
        try {
            const response = await axios.post("https://video-library-be.vikasvk1997.repl.co/signup", {
                _id: email.email,
                password: password.password
            })
            console.log(response);
        } catch(error) {
            console.log("error", error)
        }
    }

    return (
        <>
            <form className={`form-container ${toggle ? "visible" : ""}`}>

                    <h1 className="form-header">Join ShutterStream</h1>

                    <div className="input-container">
                        <label htmlFor="email_input" className="form-label">Email Address</label>
                        <input type="email" id="email_input" className="input-bar" onChange={(e) => emailHandler(e)} required/>
                        <p style={{visibility: `${commentState.p3 ? "" : "hidden"}`, 
                                    color: `${email.validation  ? "#3ca1cd" : "#cd3c3c"}`}} 
                            className="password-comment"> 
                            { email.validation ? "Valid Email": "Please enter a valid Email" } 
                        </p>
                    </div>

                    <div className="input-container">
                        <label htmlFor="passoword_input" className="form-label">Password</label>
                        <input type="password" id="password_input" className="input-bar" onChange={(e) => passwordValueHandler(e)} required />
                        <p style={{visibility: `${commentState.p1 ? "" : "hidden"}`, 
                                    color: `${isLongEnough && hasNumber && hasLowerCase && hasUpperCase && hasSpecialCharacters  ? "#3ca1cd" : "#cd3c3c"}`}} 
                            className="password-comment"> 
                            { isLongEnough && hasNumber && hasLowerCase && hasUpperCase && hasSpecialCharacters ? "Strong Password": "This is a weak Password" } 
                        </p>
                    </div>

                    <div className="input-container">
                        <label htmlFor="passoword_input" className="form-label">Confirm Password</label>
                        <input type="password" id="password_input" className="input-bar" onChange={(e) => confirmPasswordValueHandler(e)} required />
                        <p style={{visibility: `${commentState.p2 ? "" : "hidden"}`, color: `${isEqual ? "#3ca1cd" : "#cd3c3c"}`}} className="password-comment"> 
                            { isEqual ? "Passwords Match": "Passwords don't match" } 
                        </p>
                    </div>

                    <div className="btn-submit-container">
                        <button disabled={!all} className="btn-primary btn-submit" type="button" onClick={signUp}>Sign Up</button>
                    </div>
            </form>
        </>
    );
}