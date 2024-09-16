import "../styles.css";
import "../Pages/AccountPage/accountpage.css";
import "../Pages/Videopage/videopage.css";
import { useLogin } from "../Context/AuthProvider";
import {useNavigate} from "react-router-dom";
import { usePlaylist } from "../Context/PlaylistProvider";
import { RESET_STATE } from "../ConstantValues";

export function Logout() {

    const {isLogin, setIsLogin} = useLogin();
    const navigate = useNavigate();
    const {playlistDispatch, playlistState} = usePlaylist();

    function logoutHandler() {
        localStorage?.removeItem("login");
        setIsLogin(false)
        navigate("/");
        setTimeout(() => playlistDispatch({type: RESET_STATE}) , 1000)
    }

    return (
        <>
            <div className ="logout-container">
                <p className="logout-text">
                    Thank you for using ShutterStream. Hope you had a great experience. <br />
                    We are constantly striving to curate the best content for our users to watch and grow.
                </p>
                <button  onClick={logoutHandler} className="btn-primary-outline">Logout</button>
            </div>    
        </>
    )
}