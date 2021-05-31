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
            <div className="thumbnail-container">
              <div className="container16x9">
                <img
                  className="responsive-img"
                  src={`http://img.youtube.com/vi/${videoId}/0.jpg`}
                  alt="video"
                />
                <div className="thumbnail_video-duration">
                  11:02
                </div>
              </div>
              <h1
                className="video-header"
              >
                {videoTitle}
              </h1>
              <p className="thumbnail_details">
                Benn TK | 1,213,452 views
              </p>
            </div>
          </li>
        </>
    );
}