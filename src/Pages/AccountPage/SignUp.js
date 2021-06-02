import "../../styles.css";
import "./accountpage.css";
import "../Videopage/videopage.css"
import {useState} from "react";

export function SignUp() {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="signup-container">
                <div className="accountpage-actions_btns">
                    <button onClick={() => setToggle(false)} className={`btn-primary-outline accountpage-btn ${toggle ? "" : "active"}`}>Log In</button>
                    <button onClick={() => setToggle(true)} className={`btn-primary-outline accountpage-btn ${toggle ? "active" : ""}`}>Sign Up</button>
                </div>
                <form className={`form-container ${toggle ? "visible" : ""}`}>
                    <h1 className="form-header">Join ShutterStream</h1>
                    <div className="input-container">
                        <label for="email_input" className="form-label">Email Address</label>
                        <input type="email" id="email_input" className="input-bar"/>
                    </div>

                    <div className="input-container">
                        <label for="passoword_input" className="form-label">Password</label>
                        <input type="password" id="password_input" className="input-bar" required />
                    </div>

                    <div className="input-container">
                        <label for="passoword_input" className="form-label">Confirm Password</label>
                        <input type="password" id="password_input" className="input-bar" required />
                    </div>

                    <div className="btn-submit-container">
                        <button className="btn-primary btn-submit" type="submit">Sign Up</button>
                    </div>
                </form>
                <form className={`form-container ${toggle ? "" : "visible"}`}>
                    <h1 className="form-header">Log In to ShutterStream</h1>

                    <div className="input-container">
                        <label for="email_input" className="form-label">Email Address</label>
                        <input type="email" id="email_input" className="input-bar"/>
                    </div>

                    <div className="input-container">
                        <label for="passoword_input" className="form-label">Password</label>
                        <input type="password" id="password_input" className="input-bar" required />
                    </div>

                    <div className="btn-submit-container">
                        <button className="btn-primary btn-submit" type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </>
    );
}