import { usePlaylist } from "./PlaylistProvider";
import { data } from "../Home";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import "../home.css";
import "./playlist.css";

export function Playlist() {
  const { playlistState, playlistDispatch } = usePlaylist();
  const navigate = useNavigate();

  const { playlists } = playlistState;

  return (
    <>
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
                <span class="material-icons">delete_sweep</span>
              </button>
            </div>
            <ul className="video-list-container playlist">
              {[...videos.map((item) => data.find((el) => el.id === item))].map(
                (el) => {
                  return (
                    <li key={el.id} className="video-list-item">
                      <div>
                        <div className="container16x9">
                          <img
                            className="responsive-img"
                            src={`http://img.youtube.com/vi/${el.id}/0.jpg`}
                            alt="video"
                          />
                        </div>
                        <h1
                          onClick={() => navigate(`/videos/${el.id}`)}
                          className="video-header"
                        >
                          {el.title}
                        </h1>
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        );
      })}
    </>
  );
}
