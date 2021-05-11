import "../styles.css";
import "../Pages/Home/home.css"
import {useNavigate} from "react-router-dom";

export function Thumbnail({ videoId, videoTitle }) {

    const navigate = useNavigate();
    return (
        <>
        <li
            onClick={() => navigate(`/videos/${videoId}`)} 
            className="video-list-item">
            <div>
              <div className="container16x9">
                <img
                  className="responsive-img"
                  src={`http://img.youtube.com/vi/${videoId}/0.jpg`}
                  alt="video"
                />
              </div>
              <h1
                className="video-header"
              >
                {videoTitle}
              </h1>
            </div>
          </li>
        </>
    );
}