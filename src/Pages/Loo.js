import { usePlaylist } from "../Context/PlaylistProvider";
import { Navigate, useNavigate } from "react-router-dom";
import { data } from "../ConstantValues";
import "../styles.css";
import "./Home/home.css";
import "./Playlist/playlist.css";
import { MenuList } from "../Components/MenuList";
import { Thumbnail } from "../Components/Thumbnail";
import {useEffect, useState} from "react";
import axios from "axios";
import { useLogin } from "../Context/AuthProvider";

export function Loo() {

  const [ user, setUser ] = useState(null);
  const {token} = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    (async function getData() {
      try {
        const response = await axios.get("https://video-library-be.vikasvk1997.repl.co/user",
        {
          headers: {
            authorization: token
          }
        });
        setUser(response.data.user)
      } catch(error) {
        if(error.response.status === 401) navigate("/account")
        setUser("error")
      }
    })();
  }, []);
  

  return (
    <>
      <div className="playlist-page-container">
        <h1 className="liked-header">Looo</h1>
        {user === null && <p> loading.. </p>}
        {user === "error" && <p style={{ color: "red"}}> some error.. </p>}
        { user?.name && <p> { user.name} || { user.pincode} </p>}
      </div>
    </>
  );
}
