import { useNavigate } from "react-router-dom";
import "./styles.css";
import "./home.css";

export const data = [
  {
    id: "Bsoth9BhS9w",
    title: "Dozerpads | Brooklyn Nine-Nine"
  },
  {
    id: "Qhaz36TZG5Y",
    title: "10 CSS Pro Tips - Code this, NOT that!"
  },
  {
    id: "A9GyVeV1Yu8",
    title: "Friends: Funniest Moments of Season 3 (Mashup) | TBS"
  },
  {
    id: "4brSh0g4uK8",
    title: "American Dad: Holiday Clips (Mashup) | TBS"
  }
];

export function Home() {
  const navigate = useNavigate();

  return (
    <ul className="video-list-container">
      {data.map((item, index) => {
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
      })}
    </ul>
  );
}
