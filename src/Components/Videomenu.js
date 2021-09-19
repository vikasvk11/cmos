import "../styles.css";
import "../Pages/Home/home.css";
import { useState } from "react";
import { useLogin } from "../Context/AuthProvider";

export function Videomenu({menuVisible, Id, deleteFunction}) {

    const [state, setState] = useState(false);
    const { token } = useLogin();

    function menu(e) {
        console.log("clicked.....");
        setState(prev => !prev);
        e.stopPropagation();
    }

    function deleteHandler(e) {
        deleteFunction();
        console.log(Id);
        e.stopPropagation();
    }

    return (
        <>
            <div className={`${menuVisible ? "" : "menuvisibility"} videomenu`} onClick={(e) => menu(e)}>
                <span className="material-icons light-grey">more_vert</span>
                <div onClick={(e) => deleteHandler(e)} className={`menu-popout ${state ? "" : "menuvisibility"}`}>Delete</div>
            </div>
        </>
    );


}