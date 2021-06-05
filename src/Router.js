import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Liked } from "./Pages/Liked";
import { History } from "./Pages/History/History";
import { Playlist } from "./Pages/Playlist/Playlist";
import { Videopage } from "./Pages/Videopage/Videopage";
import { AccountPage } from "./Pages/AccountPage/AccountPage";
import { Loo } from "./Pages/Loo";
import {PrivateRoute} from "./PrivateRoute";



export function Router() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/playlists" element={<Playlist />} />
        <Route path="/history" element={<History />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/videos/:videoId" element={<Videopage />} />
        <PrivateRoute path="/loo" element={<Loo />}/>
      </Routes>
    </>
  );
}
