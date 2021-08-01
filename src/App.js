import "./styles.css";
import "./Pages/Home/home.css";
import { Router } from "./Router";
import { NavBar } from "./Components/NavBar";
import { PivotBar } from "./Components/PivotBar";
import ScrollToTop from "./Components/ScrollToTop";
import { usePlaylist } from "./Context/PlaylistProvider";
import { useEffect } from "react";
import axios from "axios";
import { useLogin } from "./Context/AuthProvider";
import jwt from "jsonwebtoken";
import { ADD_USER_DATA, RESET_STATE } from "./ConstantValues";


export default function App() {

  const {playlistState, playlistDispatch} = usePlaylist();
  const {token, setIsLogin, isLogin} = useLogin();
  
  useEffect(() => {

    (async function getData() {
      try {
        const decoded = await jwt.decode(token);
        const response = await axios.get(`https://video-library-be.vikasvk1997.repl.co/user/${decoded.userId}`,
        {
          headers: {
            authorization: token
          }
        });
        playlistDispatch({type: ADD_USER_DATA, payload: response.data.userObj})
      }catch (err) {
        console.log(err);
        localStorage?.removeItem("login");
        setIsLogin(false);
        playlistDispatch({type: RESET_STATE});
      }
    })()
   
  },[isLogin])   

  useEffect( () => {
    console.log("Updating....", playlistState)
  },[playlistState]);

  return (
    <>
    <ScrollToTop />
      <div className="App">
        <NavBar/>
        <Router />
        <PivotBar/>
      </div>
    </>
  );
}
