import { usePlaylist } from "../Context/PlaylistProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt from "jsonwebtoken";
import "../styles.css";
import "./Home/home.css";
import "./Playlist/playlist.css";
import { MenuList } from "../Components/MenuList";
import { Thumbnail } from "../Components/Thumbnail";
import { useLogin } from "../Context/AuthProvider";

export function Liked() {
  const { playlistState, playlistDispatch } = usePlaylist();
  const navigate = useNavigate();
  const { token } = useLogin();

  const { videoData, liked } = playlistState;

  async function removeLiked(Id, token) {
    const data = { videoId: Id };
    try {
        playlistDispatch({type: "REMOVE_FROM_LIKED", payload: Id})
        const decoded = await jwt.decode(token);
        const response = await axios.delete(`https://video-library-be.vikasvk1997.repl.co/liked/${decoded.userId}`, 
        {
            headers: {
                authorization: token
            },
            data : data
        });
    }
    catch(err) {
        console.log(err);
        playlistDispatch({type: "ADD_TO_LIKED", payload: Id})
    }
}
  return (
    <>
    <div className="playlist-page-container">
      <MenuList/>
      <div className="playlist-page">
        <h1 className="liked-header">Liked Videos</h1>
        <ul className="video-list-container  liked">
          {[...liked.map((item) => videoData.find((el) => el._id === item))].map(
            (item, index) => {
              return (
                <Thumbnail 
                key={item._id} 
                videoId={item._id} 
                videoTitle={item.title}
                views={item.views} 
                duration={item.duration} 
                channelName={item.channelName}
                menu={true} 
                deleteFunction={() => removeLiked(item._id, token)}
                />
              );
            }
          )}
        </ul>
      </div>
    </div>
    </>
  );
}
