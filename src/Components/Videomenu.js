import "../styles.css";
import "../Pages/Home/home.css";
import { useState } from "react";

export function Videomenu({menuVisible}) {

    const [state, setState] = useState(false);

    function menu(e) {
        console.log("clicked.....");
        setState(prev => !prev);
        e.stopPropagation();

    }

    return (
        <>
            <div className={`${menuVisible ? "" : "menuvisibility"} videomenu`} onClick={(e) => menu(e)}>
                <span className="material-icons light-grey">more_vert</span>
                <div className={`menu-popout ${state ? "" : "menuvisibility"}`}>Delete</div>
            </div>
        </>
    );


}