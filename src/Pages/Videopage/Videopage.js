import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import {Youtube} from "react-youtube";
import {data} from "../../ConstantValues";
import {usePlaylist} from "../../Context/PlaylistProvider.js";
import "../../styles.css";
import "./videopage.css";
import {MenuList} from "../../Components/MenuList";
import {Thumbnail} from "../../Components/Thumbnail";


export function Videopage() {
    const navigate = useNavigate();
    const {videoId} = useParams();
    const [input, setInputState] = useState("");
    const {playlistState, playlistDispatch} = usePlaylist();
    const [modalState, setModalState] = useState(false);
    const [descriptionState, setDescriptionState] = useState(false);
    const {videoData, liked, playlists} = playlistState;
    const {_id, title, views, duration, channelName, description} = videoData.find((item) => item._id === videoId);
    const nextVideos = videoData
        .filter(item => item._id !== videoId)
        .slice(0, 6);

    function inputHandler(e) {
        setInputState(e.target.value);
    }

    function createPlaylistBtn() {
        if (input.length !== 0) {
            playlistDispatch({type: "CREATE_PLAYLIST", payload: input});
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    useEffect(() => {
        // window.scrollTo(0, 0);
        playlistDispatch({type: "ADD_TO_HISTORY", payload: videoId});
        shuffleArray(nextVideos);
    }, [videoId])

    return ( 
        <> 
        <div className="videopage-main-container">
        <MenuList/>
        <div className="videopage-container_main">
            <div className="videopage-container">
                <div className="video-wrapper">
                    <iframe
                        className="video"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <h1 className="videopage-header">{title}</h1>
                <div className="videoactions-bar">
                    <p className="videoactions-bar_views">{views} views</p>
                    <p className="channel-name">{channelName}</p>
                    <div className="videoactions-bar_btns">
                        <button
                            className="btn-primary-outline mg_1 videopage-btn"
                            onClick={() => playlistDispatch({
                            type: liked.includes(_id)
                                ? "REMOVE_FROM_LIKED"
                                : "ADD_TO_LIKED",
                            payload: _id
                        })}>
                            {liked.includes(_id)
                                ? (
                                    <span className="material-icons f5">thumb_up_alt</span>
                                )
                                : (
                                    <span className="material-icons f5">thumb_up_off_alt</span>
                                )}
                        </button>
                        <button
                            className="btn-primary-outline videopage-btn"
                            onClick={() => setModalState(true)}>
                            <span className="material-icons f5">playlist_add</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="video-description-container">
                <div onClick = {() => setDescriptionState(prevState => !prevState)}
                     className="video-description_header-container">
                    <h1 className="video-description_header">Description</h1>
                    <span className="material-icons video-description_icon">{descriptionState ? "expand_less" : "expand_more"}</span>
                </div>
                <p className={`video-description_text ${descriptionState ? "pop" : ""}`}>
                    {description}
                </p>
            </div>
        </div>
        <div className="videopage-morevideos-container">
            <h2 className="videopage-morevideos_header">More Videos</h2>
            <ul className="video-list-container mgt1">
                {nextVideos.map(videoItem => {
                    return (<Thumbnail
                        key={videoItem._id}
                        videoId={videoItem._id}
                        videoTitle={videoItem.title}
                        views={videoItem.views} 
                        duration={videoItem.duration} 
                        channelName={videoItem.channelName}/>);
                })}
            </ul>
        </div>
    </div> 
    <div className = {`modal-bg ${modalState ? "modal-bg-active" : ""}`}> 
        <div className="modal">
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
    </>);
}
