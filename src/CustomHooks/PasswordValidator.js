import { useState, useEffect } from "react";

export function usePasswordValidator({ password1 , password2 }) {

    const isLongEnough = false;

    useEffect(() => {
       isLongEnough = password1.length >= 8 ? true : false;
    }, [password1, password2])
    


    return { isLongEnough, hasNumber, hasUpperCase, hasLowerCase, hasSpecialCharacters, isEqual }


}