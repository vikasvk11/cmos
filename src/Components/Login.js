import "../styles.css";
import "../Pages/AccountPage/accountpage.css";
import "../Pages/Videopage/videopage.css";

export function Login({toggle}) {
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
            </form>
        </>
    )
}