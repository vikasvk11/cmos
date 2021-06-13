import {createContext, useContext, useState, useEffect} from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthProvider({children}) {
    const  { isLogin: isUserLoggedIn , token : savedToken } = JSON.parse(localStorage?.getItem("login")) || { isLogin: false, token: null };

    const [isLogin, setIsLogin] = useState(isUserLoggedIn);
    const [token, setToken ] = useState(savedToken);


    async function loginUserWithCredentials(username, password) {
        try {
          const response = await axios.post("https://video-library-be.vikasvk1997.repl.co/login", 
          { username, password }
         );
          console.log("Auth Provider", response);
          if(response.data.success === true) {
            const token = response.data.token;
            setIsLogin(true);
            setToken(token);
            localStorage?.setItem(
                "login",
                JSON.stringify({ isLogin: true, token })
              );
          }
            
        } catch (error) {
          console.log("Sahi username password nahi pata kya?", error);
        }
      }

    return (
        <AuthContext.Provider value={{isLogin, loginUserWithCredentials, setIsLogin, token}}>
            {children}
        </AuthContext.Provider>
    );

}

export function useLogin() {
    return useContext(AuthContext);
}
