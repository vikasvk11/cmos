import { useNavigate } from "react-router-dom";
import "../../styles.css";
import "./home.css";
import { data } from "../../ConstantValues";

export function Home() {
  const navigate = useNavigate();

  return (
    <ul className="video-list-container">
      {data.map((item, index) => {
        return (
          <li key={index}  
            onClick={() => navigate(`/videos/${item.id}`)} 
            className="video-list-item">
            <div>
              <div className="container16x9">
                <img
                  className="responsive-img"
                  src={`http://img.youtube.com/vi/${item.id}/0.jpg`}
                  alt="video"
                />
              </div>
              <h1
               
                className="video-header"
              >
                {item.title}
              </h1>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
