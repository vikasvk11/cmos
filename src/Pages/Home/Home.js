import "../../styles.css";
import "./home.css";
import axios from "axios";
import { MenuList } from "../../Components/MenuList";
import { Thumbnail } from "../../Components/Thumbnail";
import { useEffect, useState } from "react";
import { usePlaylist } from "../../Context/PlaylistProvider";
import { ADD_ALL_VIDEO_DATA } from "../../ConstantValues";

export function Home() {

  const [loader, setLoader] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const {playlistState, playlistDispatch} = usePlaylist();

  useEffect(() => {
    (async function getData() {
      try {
        setLoader(true);
        const response = await axios.get("https://video-library-be.vikasvk1997.repl.co/videos")
        setData(response.data.videoData);
        playlistDispatch({type: ADD_ALL_VIDEO_DATA, payload: response.data.videoData})
      } catch (error) {
        console.log("error", error);
        setError("Data fetch failed");
      } finally {
        setLoader(false);
      }
    })()
  }, [])

  return (
    <>
    <div className="home-container">
      <MenuList/>
      <ul className="video-list-container">
        {loader && <div className="loadingio-spinner-pulse-t56omb8t4b"><div className="ldio-73f28sgtk6j">
                    <div></div><div></div><div></div>
                    </div></div>
        }
        {data && data.map(item => {
          return (
            <Thumbnail 
            key={item._id} 
            videoId={item._id} 
            videoTitle={item.title} 
            views={item.views} 
            duration={item.duration} 
            channelName={item.channelName}/>
          );
        })}
        {error && <p>{error}</p>}
      </ul>
    </div>
    </>
  );
}
