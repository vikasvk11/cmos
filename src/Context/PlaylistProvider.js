import { createContext, useReducer, useContext } from "react";
import { v4 } from "uuid";
import {
        ADD_ALL_VIDEO_DATA,
        ADD_USER_DATA,
        ADD_TO_LIKED, 
        REMOVE_FROM_LIKED,
        CREATE_PLAYLIST,
        DELETE_PLAYLIST,
        ADD_TO_PLAYLIST,
        REMOVE_FROM_PLAYLIST,
        ADD_TO_HISTORY,
        RESET_STATE
      } from "../ConstantValues";

const PlaylistContext = createContext();

export function PlaylistProvider({ children }) {

  function playlistReducer(state, action) {
    
    switch (action.type) {

      case ADD_ALL_VIDEO_DATA:
        return {...state, videoData: [...action.payload]}

      case ADD_USER_DATA: 
        return {...state, ...action.payload};
      
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
          playlist: [
            ...state.playlist,
            { _id: v4(), name: action.payload, videos: [] }
          ]
        };

      case DELETE_PLAYLIST:
        return {
          ...state,
          playlist: state.playlist.filter((el) => el._id !== action.payload)
        };

      case ADD_TO_PLAYLIST:
        let pl = state.playlist.find(
          (item) => item._id === action.payload.playlistId
        );

        if (!pl.videos.includes(action.payload.videoId)) {
          state.playlist[action.payload.index].videos.unshift(action.payload.videoId)
        }

        return {
          ...state
        };

      case REMOVE_FROM_PLAYLIST:

        let videoIndex = state.playlist[action.payload.index].videos.findIndex(item => item === action.payload.videoId);

        if(videoIndex !== -1) {
          state.playlist[action.payload.index].videos.splice(videoIndex, videoIndex + 1);
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

      case RESET_STATE:
        console.log("resetting....")
        return {
          ...state,
          liked: [],
          playlist: [],
          history: []
        };

      default:
        console.log("default")
        return {
          ...state
        };
    }
  }

  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    videoData: [],
    liked: [],
    playlist: [],
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
