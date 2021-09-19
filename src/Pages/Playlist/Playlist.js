import { usePlaylist } from "../../Context/PlaylistProvider";
import { useNavigate } from "react-router-dom";
import "../../styles.css";
import "../Home/home.css";
import "./playlist.css";
import { MenuList } from "../../Components/MenuList";
import { Thumbnail } from "../../Components/Thumbnail";
import axios from "axios";
import jwt from "jsonwebtoken";
import { useLogin } from "../../Context/AuthProvider";

export function Playlist() {
  const { playlistState, playlistDispatch } = usePlaylist();
  const navigate = useNavigate();
  const { token } = useLogin();

  const { videoData, playlist } = playlistState;

  function deletePlaylist(_id) {

    (async function deleteWholePlaylist() {
      try {
            const decoded = await jwt.decode(token);
            const response = await axios.delete(`https://video-library-be.vikasvk1997.repl.co/playlist/${decoded.userId}/${_id}`, 
            {
              headers: {
                  authorization: token
                }
            });
            playlistDispatch({ type: "DELETE_PLAYLIST", payload: _id })
      } catch(err) {
          console.log(err);
      }
    })()
  }

  async function removeFromPlaylist(playlistId, videoId, index, videos, token) {
    try {
      if(videos.length === 1) {
        deletePlaylist(playlistId);
      } else {
        const decoded = await jwt.decode(token);
        const response = await axios.delete(`https://video-library-be.vikasvk1997.repl.co/playlist/${decoded.userId}/${playlistId}/${videoId}`,
        {
            headers: {
                authorization: token
            }
        })
        playlistDispatch({
          type: "REMOVE_FROM_PLAYLIST",
          payload: {
              playlistId: playlistId,
              videoId: videoId,
              index: index
          }
      })
     }
    } catch(err) {
        console.log(err);
        playlistDispatch({
            type: "ADD_TO_PLAYLIST",
            payload: {
              playlistId: playlistId,
              videoId: videoId,
              index: index
            }
        })
    }
  }

  return (
    <>
    <div className="playlist-page-container">
      <MenuList/>
      <div className="playlist-page">
      <h1 className="liked-header">Playlist Videos</h1>
      {playlist.map(({ _id, name, videos }, index) => {
        return (
          <div key={_id}>
            <div className="playlist-head">
              <h1 className="playlist-header">{name}</h1>
              <button
                className="btn-primary-outline playlist-delete-btn"
                onClick={() =>
                  deletePlaylist(_id)
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
                    menu={true}
                    deleteFunction={() => removeFromPlaylist(_id, el._id, index, videos, token)}
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
