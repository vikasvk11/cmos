import { useContext, createContext, useState, useEffect } from 'react';

const SnackbarContext = createContext();

export function SnackbarProvider ({ children }) {
    const [snackPack, setSnackPack] = useState([]);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [messageInfo, setMessageInfo] = useState(undefined);
  
    useEffect(() => {
      if (snackPack.length && !messageInfo) {
        // Set a new snack when we don't have an active one
        setMessageInfo({ ...snackPack[0] });
        setSnackPack((prev) => prev.slice(1));
        setShowSnackbar(true);
        // console.log("useEffect 1");
      } else if (snackPack.length && messageInfo && showSnackbar) {
        // Close an active snack when a new one is added
        setMessageInfo(undefined);
        setShowSnackbar(false);
        // console.log("useEffect 2");
      }
    }, [snackPack, messageInfo, showSnackbar]);
  
    // console.log(messageInfo, showSnackbar);
  
    // if (snackPack.length) {
    //   console.log(true);
    // } else console.log(false);
  
    const handleClick = (message) => {
      setShowSnackbar(false);
      setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
    };
  
    const handleExited = () => {
      setMessageInfo(undefined);
    };
  
    const handleClose = () => {
      setShowSnackbar(false);
    };

    return (
        <SnackbarContext.Provider value={{ handleClick, handleClose, handleExited, showSnackbar, messageInfo }}>
            {children}
        </SnackbarContext.Provider>
    )
}

export function useSnackbar() {
    return useContext(SnackbarContext);
}