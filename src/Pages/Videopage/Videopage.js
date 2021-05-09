import {useParams} from "react-router-dom";
import {useState} from "react";
import {data} from "../../ConstantValues";
import {usePlaylist} from "../../Context/PlaylistProvider.js";
import "./videopage.css";
import "../../styles.css"
import {MenuList} from "../../Components/MenuList";

export function Videopage() {
    const {videoId} = useParams();
    const [input,
        setInputState] = useState("");
    const {id, title} = data.find((item) => item.id === videoId);
    const {playlistState, playlistDispatch} = usePlaylist();
    const [modalState,
        setModalState] = useState(false);
    const {liked, playlists} = playlistState;

    function inputHandler(e) {
        setInputState(e.target.value);
    }

    function createPlaylistBtn() {
        if (input.length !== 0) {
            playlistDispatch({type: "CREATE_PLAYLIST", payload: input});
        }
    }

    return ( 
        <> 
        <div className="videopage-main-container">
        <MenuList/>
        <div className="videopage-container_main">
        <div className="videopage-container">
            <div className="video-wrapper">
                <iframe
                    className="video"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            </div>
            <h1 className="videopage-header">{title}</h1>
            <button
                className="btn-primary-outline mg_1"
                onClick={() => playlistDispatch({
                type: liked.includes(id)
                    ? "REMOVE_FROM_LIKED"
                    : "ADD_TO_LIKED",
                payload: id
            })}>
                {liked.includes(id)
                    ? (
                        <span className="material-icons">thumb_up_alt</span>
                    )
                    : (
                        <span className="material-icons">thumb_up_off_alt</span>
                    )}
            </button>
            <button className="btn-primary-outline" onClick={() => setModalState(true)}>
                <span className="material-icons">playlist_add</span>
            </button>
        </div>
        </div>
    </div> 
    
    < div className = {
        `modal-bg ${modalState
            ? "modal-bg-active"
            : ""}`
    } > <div className="modal">
        <div className="modal-head">
            <h1 className="modal-header">Add to playlist</h1>
            <span
                className="material-icons modal-close"
                onClick={() => setModalState(false)}>
                close
            </span>
        </div>

        {playlists.map((item, index) => {
            return (
                <div className="modal-playlist-title" key={item.id}>
                    <label>
                        <input
                            type="checkbox"
                            name="playlist"
                            onChange={() => playlistDispatch({
                            type: item
                                .videos
                                .includes(videoId)
                                ? "REMOVE_FROM_PLAYLIST"
                                : "ADD_TO_PLAYLIST",
                            payload: {
                                playlistId: item.id,
                                videoId: videoId,
                                index: index
                            }
                        })}
                            checked={item
                            .videos
                            .includes(videoId)}/>{" "} {item.name}
                    </label>
                </div>
            );
        })}

        <div className="modal-footer">
            <input
                className="modal-input"
                type="text"
                name="createPlaylist"
                onChange={inputHandler}
                value={input}/>
            <button className="btn-primary modal-btn" onClick={createPlaylistBtn}>
                <span className="material-icons">add</span>
            </button>
        </div>
      </div> 
      </div>
    </>)
    ;
}
