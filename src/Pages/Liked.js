import { usePlaylist } from "../Context/PlaylistProvider";
import { useNavigate } from "react-router-dom";
import { data } from "../ConstantValues";
import "../styles.css";
import "./Home/home.css";
import "./Playlist/playlist.css";

export function Liked() {
  const { playlistState, playlistDispatch } = usePlaylist();
  const navigate = useNavigate();

  const { liked } = playlistState;

  return (
    <>
      <h1 className="liked-header">Liked Videos</h1>
      <ul className="video-list-container  liked">
        {[...liked.map((item) => data.find((el) => el.id === item))].map(
          (item, index) => {
            return (
              <li key={index} className="video-list-item">
                <div>
                  <div className="container16x9">
                    <img
                      className="responsive-img"
                      src={`http://img.youtube.com/vi/${item.id}/0.jpg`}
                      alt="video"
                    />
                  </div>
                  <h1
                    onClick={() => navigate(`/videos/${item.id}`)}
                    className="video-header"
                  >
                    {item.title}
                  </h1>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
}
