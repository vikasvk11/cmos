import { usePlaylist } from "../../Context/PlaylistProvider";
import { useNavigate } from "react-router-dom";
import "../../styles.css";
import "../Home/home.css";
import "./playlist.css";
import { MenuList } from "../../Components/MenuList";
import { Thumbnail } from "../../Components/Thumbnail";

export function Playlist() {
  const { playlistState, playlistDispatch } = usePlaylist();
  const navigate = useNavigate();

  const { videoData, playlist } = playlistState;

  return (
    <>
    <div className="playlist-page-container">
      <MenuList/>
      <div className="playlist-page">
      <h1 className="liked-header">Playlist Videos</h1>
      {playlist.map(({ _id, name, videos }) => {
        return (
          <div key={_id}>
            <div className="playlist-head">
              <h1 className="playlist-header">{name}</h1>
              <button
                className="btn-primary-outline playlist-delete-btn"
                onClick={() =>
                  playlistDispatch({ type: "DELETE_PLAYLIST", payload: _id })
                }
              >
                <span className="material-icons">delete_sweep</span>
              </button>
            </div>
            <ul className="video-list-container playlist">
              {[...videos.map((item) => videoData.find((el) => el._id === item))].map(
                (el) => {
                  return (
                    <Thumbnail 
                    key={el._id} 
                    videoId={el._id} 
                    videoTitle={el.title}
                    views={el.views} 
                    duration={el.duration} 
                    channelName={el.channelName}
                    />
                  );
                }
              )}
            </ul>
          </div>
        );
      })}
      </div>
      </div>
    </>
  );
}
