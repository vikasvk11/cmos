import { createContext, useReducer, useContext } from "react";
import { v4 } from "uuid";
import {
        ADD_ALL_VIDEO_DATA,
        ADD_TO_LIKED, 
        REMOVE_FROM_LIKED,
        CREATE_PLAYLIST,
        DELETE_PLAYLIST,
        ADD_TO_PLAYLIST,
        REMOVE_FROM_PLAYLIST,
        ADD_TO_HISTORY
      } from "../ConstantValues";

const PlaylistContext = createContext();

export function PlaylistProvider({ children }) {
  function playlistReducer(state, action) {
    switch (action.type) {

      case ADD_ALL_VIDEO_DATA:
        return {...state, videoData: [...action.payload]}

      case ADD_TO_LIKED:
        return { ...state, liked: [...state.liked, action.payload] };

      case REMOVE_FROM_LIKED:
        return {
          ...state,
          liked: state.liked.filter((el) => el !== action.payload)
        };

      case CREATE_PLAYLIST:
        return {
          ...state,
          playlists: [
            ...state.playlists,
            { id: v4(), name: action.payload, videos: [] }
          ]
        };

      case DELETE_PLAYLIST:
        return {
          ...state,
          playlists: state.playlists.filter((el) => el.id !== action.payload)
        };

      case ADD_TO_PLAYLIST:
        let pl = state.playlists.find(
          (item) => item.id === action.payload.playlistId
        );

        if (!pl.videos.includes(action.payload.videoId)) {
          state.playlists[action.payload.index].videos.unshift(action.payload.videoId)
        }

        return {
          ...state
        };

      case REMOVE_FROM_PLAYLIST:

        let videoIndex = state.playlists[action.payload.index].videos.findIndex(item => item === action.payload.videoId);

        if(videoIndex !== -1) {
          state.playlists[action.payload.index].videos.splice(videoIndex, videoIndex + 1);
        }

        return {
          ...state
        };
        
      case ADD_TO_HISTORY:

        let videoIdHistory = action.payload;
        let videoIndexHistory = state.history.findIndex(item => item === action.payload);

        if(state.history.includes(videoIdHistory)) {
          state.history.splice(videoIndexHistory, videoIndexHistory + 1);
          state.history.unshift(videoIdHistory);
        } else {
          state.history.unshift(videoIdHistory);
        }
        
        return {
          ...state
        };

      default:
        return state;
    }
  }

  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    videoData: [],
    liked: [],
    playlists: [
      {
        id: v4(),
        name: "Playlist 1",
        videos: ["QHDhSidFhcQ", "e6HZPmSlS5c"]
      }
    ],
    history: []
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
