import "../../styles.css";
import "./accountpage.css";

export function SignUp() {

    return (
        <>
            <div className="signup-container">
                <form className="form-container">
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
            </div>
        </>
    );
}