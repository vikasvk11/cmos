import "../styles.css";
import "../Pages/Home/home.css";
import { useEffect, useState } from "react";

export function Videomenu({menuVisible, Id, deleteFunction, mainState, mainStateFunction}) {

    const [state, setState] = useState(false);

    function menu(e) {
        setState(prev => !prev);
        mainStateFunction(Id);
        
        e.stopPropagation();
    }

    useEffect(() => {
        if(mainState === Id) {
            setState(true);
        } else setState(false);
    }, [mainState])

    function deleteHandler(e) {
        deleteFunction();
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