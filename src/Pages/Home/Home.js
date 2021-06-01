import "../../styles.css";
import "./home.css";
import { data } from "../../ConstantValues";
import { MenuList } from "../../Components/MenuList";
import { Thumbnail } from "../../Components/Thumbnail";

export function Home() {

  return (
    <>
    <div className="home-container">
      <MenuList/>
      <ul className="video-list-container">
        {data.map(item => {
          return (
            <Thumbnail key={item.id} videoId={item.id} videoTitle={item.title}/>
          );
        })}
      </ul>
    </div>
    </>
  );
}
