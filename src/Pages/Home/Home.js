import { useNavigate } from "react-router-dom";
import "../../styles.css";
import "./home.css";
import { data } from "../../ConstantValues";
import { MenuList } from "../../Components/MenuList";
import { Thumbnail } from "../../Components/Thumbnail";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
    <div className="home-container">
      <MenuList/>
    <ul className="video-list-container">
      {data.map((item, index) => {
        return (
          <Thumbnail key={item.id} videoId={item.id} videoTitle={item.title}/>
        );
      })}
    </ul>
    </div>
    </>
  );
}
