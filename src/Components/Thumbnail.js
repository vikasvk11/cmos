import "../styles.css";
import "../Pages/Home/home.css"
import {useNavigate} from "react-router-dom";
import { Videomenu } from "./Videomenu";

export function Thumbnail({ videoId, videoTitle, views, duration, channelName, menu, deleteFunction, mainState, mainStateFunction}) {

    const navigate = useNavigate();

    return (
        <>
        <li
            onClick={() => navigate(`/videos/${videoId}`)} 
            className="video-list-item">
            <div className="thumbnail-container">
              <div className="container16x9">
                <img
                  className="responsive-img"
                  src={`http://img.youtube.com/vi/${videoId}/0.jpg`}
                  alt="video"
                />
                <div className="thumbnail_video-duration">
                  {duration}
                </div>
              </div>
              <div className="thumbnail-content">
                <div>
                  <h1 className="video-header">{videoTitle}</h1>
                  <p className="thumbnail_details">
                    {channelName} | {views} views
                  </p>
                </div>
                <Videomenu 
                menuVisible={menu} 
                Id={videoId} 
                deleteFunction={deleteFunction}
                mainState={mainState}
                mainStateFunction={mainStateFunction}
                />
              </div>
            </div>
          </li>
        </>
    );
}