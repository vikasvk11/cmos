import { useNavigate } from "react-router-dom";
import "./styles.css";
import "./home.css";

export const data = [
  {
    id: "5PXCa6RCG28",
    title: "8 Camera HACKS in 90 SECONDS!!"
  },
  {
    id: "QHDhSidFhcQ",
    title: "AFTER EFFECTS BASICS"
  },
  {
    id: "GYud_W7Ou9E",
    title: "Make your footage look Cinematic FAST! Premiere Pro Tutorial"
  },
  {
    id: "hnMY1u7M90o",
    title: "What LENS should YOU BUY?!"
  },
  {
    id: "e6HZPmSlS5c",
    title: "What Frame Rate Should You Be Filming In?"
  },
  {
    id: "JNXmjTmuGNM",
    title: "10 MISTAKES EVERY BEGINNER FILMMAKER MAKES"
  },
  {
    id: "boeL109kC3A",
    title: "How I film a cinematic travel video - Sydney BTS and bloopers!"
  },
  {
    id: "r25IWquxe9s",
    title: "THE BUCKET SHOT"
  },
  {
    id: "CIrowsD7QBk",
    title: "Exploring Indonesia - The Last Paradise"
  },
  {
    id: "JcinvbS4Fi0",
    title: "Filming a SPICY Commercial with JUST A TRIPOD! | Behind the Scenes"
  },
  {
    id: "458I2hkaqjk",
    title: "In Camera Transitions: A Masterclass."
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
