import { usePlaylist } from "../../Context/PlaylistProvider";
import { data } from "../../ConstantValues";
import { MenuList } from "../../Components/MenuList";
import { Thumbnail } from "../../Components/Thumbnail";
import "../../styles.css";
import "../Home/home.css";
import "../Playlist/playlist.css";


export function History() {

    const { playlistState, playlistDispatch } = usePlaylist();

    const { history } = playlistState;
    
    return (
        <>
            <div className="playlist-page-container">
                <MenuList/>
                <div className="playlist-page">
                    <h1 className="liked-header">History</h1>
                    <ul className="video-list-container  liked">
                        {[...history.map((item) => data.find((el) => el.id === item))].map(
                        item => {
                            return (
                            <Thumbnail key={item.id} videoId={item.id} videoTitle={item.title}/>
                            );
                        }
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}