import { usePlaylist } from "../Context/PlaylistProvider";
import { useNavigate } from "react-router-dom";
import { data } from "../ConstantValues";
import "../styles.css";
import "./Home/home.css";
import "./Playlist/playlist.css";
import { MenuList } from "../Components/MenuList";
import { Thumbnail } from "../Components/Thumbnail";

export function Liked() {
  const { playlistState, playlistDispatch } = usePlaylist();
  const navigate = useNavigate();

  const { videoData, liked } = playlistState;

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
              channelName={item.channelName} />
            );
          }
        )}
      </ul>
      </div>
      </div>
    </>
  );
}
