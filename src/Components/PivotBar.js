import "../styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function PivotBar() {
    const navigate = useNavigate();

    const [state, setState] = useState([true, false, false, false])

    return (
      <>
        <div className="pivotbar-container">
          <ul className="pivot-list">
            <li onClick={() => {
              navigate("/");
              setState([true, false, false, false]);
              }} className={`nav-list-item ${state[0] ? "active-item" : "" }`}>
              <span className="material-icons">home</span>
            </li>
            <li onClick={() => {
              navigate("/liked");
              setState([false, true, false, false]);
              }} className={`nav-list-item ${state[1] ? "active-item" : "" }`}>
              <span className="material-icons thumb_up">thumb_up</span>
            </li>
            <li onClick={() => {
              navigate("/playlists");
              setState([false, false, true, false]);
              }} className={`nav-list-item ${state[2] ? "active-item" : "" }`}>
              <span className="material-icons">playlist_play</span>
            </li>
            <li onClick={() => {
              navigate("/history");
              setState([false, false, false, true]);
              }} className={`nav-list-item ${state[3] ? "active-item" : "" }`}>
              <span className="material-icons history-icon">history</span>
            </li>
          </ul>
        </div>
      </>
    );
}