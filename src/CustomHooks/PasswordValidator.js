import { useState, useEffect } from "react";

export function usePasswordValidator({ password1 , password2 }) {

    const [state, setState] = useState({
        isLongEnough: null, 
        hasNumber: null, 
        hasUpperCase: null, 
        hasLowerCase: null, 
        hasSpecialCharacters: null,
        isEqual: null,
        all: null
    });

    useEffect(() => {
       setState((prevState) => password1.length >= 8 ? {...prevState, isLongEnough: true} : {...prevState, isLongEnough: false});
       setState((prevState) => /[0-9]/.test(password1) ? {...prevState, hasNumber: true} : {...prevState, hasNumber: false});
       setState((prevState) => /[A-Z]/.test(password1) ? {...prevState, hasUpperCase: true} : {...prevState, hasUpperCase: false});
       setState((prevState) => /[a-z]/.test(password1) ? {...prevState, hasLowerCase: true} : {...prevState, hasLowerCase: false});
       setState((prevState) => /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password1) ? {...prevState, hasSpecialCharacters: true} : {...prevState, hasSpecialCharacters: false});
       setState((prevState) => password1 === password2 ? {...prevState, isEqual: true} : {...prevState, isEqual: false});
       setState((prevState) => prevState.isLongEnough && prevState.hasNumber && prevState.hasUpperCase && prevState.hasLowerCase 
                && prevState.hasSpecialCharacters && prevState.isEqual
                 ? {...prevState, all: true} : {...prevState, all: false});
    }, [password1, password2]);
    

    const { isLongEnough, hasNumber, hasUpperCase, hasLowerCase, hasSpecialCharacters, isEqual, all } = state;

    return { isLongEnough, hasNumber, hasUpperCase, hasLowerCase, hasSpecialCharacters, isEqual, all }

}