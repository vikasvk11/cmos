import {createContext, useContext, useState} from "react";
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
          if(response.data.success === true) {
            const token = response.data.token;
            setToken(token);
            localStorage?.setItem("login", JSON.stringify({ isLogin: true, token }));
            setIsLogin(true);
          }
        } catch (error) {
          throw(error);
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
