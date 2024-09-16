import {useNavigate} from "react-router-dom";
import { useLogin } from "../Context/AuthProvider";

export function NavBar() {

    const navigate = useNavigate();
    const {isLogin} = useLogin();

    return (
        <nav className="main-nav">
            <h1  onClick={() => navigate("/")} className="main-nav-header_1">
                ShutterStream
            </h1>
            <input className="main-nav-search" placeholder="Search">
            </input>
            <ul className="main-nav-list_1 flex-end">
                <li onClick={() => navigate("/")}
                className="nav-list-item">
                    <span className="material-icons">
                        search
                    </span>
                </li>
                <li onClick={() => navigate("/account")} 
                    className="nav-list-item">
                <span className="material-icons" style={{color: `${isLogin ? "#3ca1cd" : "" }`}}>
                        account_circle
                    </span>
                </li>
            </ul>
        </nav>
    );

}
