import "../styles.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function PivotBar() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [state, setState] = useState([true, false, false, false])

    useEffect(() => {
      switch(pathname) {
        case "/": 
          return setState([true, false, false, false]);
        case "/liked": 
          return setState([false, true, false, false]);
        case "/playlists": 
          return setState([false, false, true, false]);
        case "/history": 
          return setState([false, false, false, true]);
        default:
          return setState([true, false, false, false]);
      }
    },[pathname])
    
    return (
      <>
        <div className="pivotbar-container">
          <ul className="pivot-list">
            <li onClick={() => {
              navigate("/");
              }} className={`nav-list-item pivot-bar-item ${state[0] ? "active-item" : "" }`}>
              <span className="material-icons">home</span>
            </li>
            <li onClick={() => {
              navigate("/liked");
              }} className={`nav-list-item pivot-bar-item ${state[1] ? "active-item" : "" }`}>
              <span className="material-icons thumb_up">thumb_up</span>
            </li>
            <li onClick={() => {
              navigate("/playlists");
              }} className={`nav-list-item pivot-bar-item ${state[2] ? "active-item" : "" }`}>
              <span className="material-icons">playlist_play</span>
            </li>
            <li onClick={() => {
              navigate("/history");
              }} className={`nav-list-item pivot-bar-item ${state[3] ? "active-item" : "" }`}>
              <span className="material-icons history-icon">history</span>
            </li>
          </ul>
        </div>
      </>
    );
}