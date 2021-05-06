import { createContext, useReducer, useContext } from "react";
import { v4 } from "uuid";

const PlaylistContext = createContext();

export function PlaylistProvider({ children }) {
  function playlistReducer(state, action) {
    switch (action.type) {
      case "ADD_TO_LIKED":
        return { ...state, liked: [...state.liked, action.payload] };
      case "REMOVE_FROM_LIKED":
        return {
          ...state,
          liked: state.liked.filter((el) => el !== action.payload)
        };
      case "CREATE_PLAYLIST":
        return {
          ...state,
          playlists: [
            ...state.playlists,
            { id: v4(), name: action.payload, videos: [] }
          ]
        };
      case "DELETE_PLAYLIST":
        return {
          ...state,
          playlists: state.playlists.filter((el) => el.id !== action.payload)
        };
      case "ADD_TO_PLAYLIST":
        let pl = state.playlists.find(
          (item) => item.id === action.payload.playlistId
        );

        if (!pl.videos.includes(action.payload.videoId)) {
          pl.videos.unshift(action.payload.videoId);
        }
        const pls = state.playlists.filter(
          (item) => item.id !== action.payload.playlistId
        );
        return {
          ...state,
          playlists: [...pls, pl]
        };
      case "REMOVE_FROM_PLAYLIST":
        let plr = state.playlists.find(
          (item) => item.id === action.payload.playlistId
        );

        let videosArray = plr.videos.filter(
          (item) => item !== action.payload.videoId
        );

        const plsr = state.playlists.filter(
          (item) => item.id !== action.payload.playlistId
        );
        return {
          ...state,
          playlists: [...plsr, { ...plr, videos: videosArray }]
        };
      default:
        return state;
    }
  }

  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    liked: [],
    playlists: [
      {
        id: v4(),
        name: "Playlist 1",
        videos: ["QHDhSidFhcQ", "e6HZPmSlS5c"]
      }
    ]
  });

  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
}

export function usePlaylist() {
  return useContext(PlaylistContext);
}
