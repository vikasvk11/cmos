import { usePlaylist } from "../../Context/PlaylistProvider";
import { data } from "../../ConstantValues";
import { useNavigate } from "react-router-dom";
import "../../styles.css";
import "../Home/home.css";
import "./playlist.css";
import { MenuList } from "../../Components/MenuList";
import { Thumbnail } from "../../Components/Thumbnail";

export function Playlist() {
  const { playlistState, playlistDispatch } = usePlaylist();
  const navigate = useNavigate();

  const { playlists } = playlistState;

  return (
    <>
    <div className="playlist-page-container">
      <MenuList/>
      <div className="playlist-page">
      <h1 className="liked-header">Playlist Videos</h1>
      {playlists.map(({ id, name, videos }) => {
        return (
          <div key={id}>
            <div className="playlist-head">
              <h1 className="playlist-header">{name}</h1>
              <button
                className="btn-primary-outline playlist-delete-btn"
                onClick={() =>
                  playlistDispatch({ type: "DELETE_PLAYLIST", payload: id })
                }
              >
                <span className="material-icons">delete_sweep</span>
              </button>
            </div>
            <ul className="video-list-container playlist">
              {[...videos.map((item) => data.find((el) => el.id === item))].map(
                (el) => {
                  return (
                    <Thumbnail key={el.id} videoId={el.id} videoTitle={el.title}/>
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
