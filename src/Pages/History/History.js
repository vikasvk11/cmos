import { usePlaylist } from "../../Context/PlaylistProvider";
import { data } from "../../ConstantValues";
import { useNavigate } from "react-router-dom";
import "../../styles.css";
import "../Home/home.css";
import "../Playlist/playlist.css";

export function History() {
    
    return (
        <div>
            <h1 style={{marginTop: "3.5rem"}}>History</h1>
        </div>
    );
}