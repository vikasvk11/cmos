import { NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Liked } from "./Liked";
import { Playlist } from "./Playlist";
import { Videopage } from "./Videopage";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/playlists" element={<Playlist />} />
        <Route path="/videos/:vid" element={<Videopage />} />
      </Routes>
    </>
  );
}
