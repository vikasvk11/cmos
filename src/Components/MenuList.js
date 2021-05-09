import { useNavigate } from "react-router-dom";
import "../styles.css";
import "../Pages/Home/home.css";

export function MenuList() {
    const navigate = useNavigate();
    return (
        <ul className="menu-container">
        <li className="menu-list-item" onClick={() => navigate("/")}>
          <span className="material-icons">home</span>
          Home
        </li>
        <li className="menu-list-item" onClick={() => navigate("/liked")}>
        <span className="material-icons">thumb_up</span>
          Liked Videos
        </li>
        <li className="menu-list-item" onClick={() => navigate("/playlists")}>
        <span className="material-icons">playlist_play</span>
          Playlist
        </li>
        <li className="menu-list-item" onClick={() => navigate("/history")}>
        <span className="material-icons">history</span>
          History
        </li>
      </ul>
    );
}