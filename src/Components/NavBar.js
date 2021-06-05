import { useState } from "react";
import {useNavigate} from "react-router-dom";

export function NavBar() {

    const navigate = useNavigate();

    return (
        <nav className="main-nav">
            <h1  onClick={() => navigate("/")} className="main-nav-header_1">
                ShutterStream
            </h1>
            <input className="main-nav-search" placeholder="Search">
            </input>
            <ul className="main-nav-list_1 flex-end">
                <li onClick={() => navigate("/loo")}
                className="nav-list-item">
                    <span className="material-icons">
                        search
                    </span>
                </li>
                <li onClick={() => navigate("/account")} 
                    className="nav-list-item">
                <span className="material-icons">
                        account_circle
                    </span>
                </li>
            </ul>
        </nav>
    );

}
