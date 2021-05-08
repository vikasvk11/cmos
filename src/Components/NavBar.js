import { useNavigate } from "react-router-dom";

export function NavBar () {

    const navigate = useNavigate();

    return (
        <nav className="main-nav">
          <h1 onClick={() => navigate("/")} className="main-nav-header_1">
            ShutterStream
          </h1>
          <ul className="main-nav-list_1">
            <li onClick={() => navigate("/liked")} className="nav-list-item">
              <span className="material-icons">thumb_up</span>
            </li>
            <li
              onClick={() => navigate("/playlists")}
              className="nav-list-item"
            >
              <span className="material-icons">playlist_play</span>
            </li>
          </ul>
        </nav>
    );

}

