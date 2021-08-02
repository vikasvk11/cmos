import "../styles.css";
import { useNavigate } from "react-router-dom";

export function PivotBar() {
    const navigate = useNavigate();
    return (
        <>
        <div className="pivotbar-container">
        <ul className="pivot-list">

            <li onClick={() => navigate("/")} className="nav-list-item">
              <span className="material-icons">home</span>
            </li>

            <li onClick={() => navigate("/liked")} className="nav-list-item">
              <span className="material-icons thumb_up">thumb_up</span>
            </li>

            <li
              onClick={() => navigate("/playlists")}
              className="nav-list-item"
            >
              <span className="material-icons">playlist_play</span>
            </li>

            <li
              onClick={() => navigate("/history")}
              className="nav-list-item"
            >
              <span className="material-icons history-icon">history</span>
            </li>

          </ul>
        </div>
        </>
    );
}