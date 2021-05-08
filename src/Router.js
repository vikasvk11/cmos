import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Liked } from "./Pages/Liked";
import { Playlist } from "./Pages/Playlist/Playlist";
import { Videopage } from "./Pages/Videopage/Videopage";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/playlists" element={<Playlist />} />
        <Route path="/videos/:videoId" element={<Videopage />} />
      </Routes>
    </>
  );
}
