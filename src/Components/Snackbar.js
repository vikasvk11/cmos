import { useEffect, useRef } from "react";
import "./snackbar.css";

const Snackbar = (props) => {
  const timer = useRef(null);
  // console.log("Snackbar Component ", props.open);

  const setTimer = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      // console.log("timeout");
      props.close();
      props.onExit();
    }, 3000);
    // console.log("Timer set ", timer.current);
  };

  useEffect(() => {
    if (props.open) {
      setTimer();
    } else {
      props.close();
      props.onExit();
      clearTimeout(timer.current);
    }
    return () => {
      clearTimeout(timer.current);
    };
  }, [props.open]);

  return (
    <div className="snackbar" id={props.open ? "show" : "hide"}>
      <div className="message">{props.message}</div>
      <div className="symbol">
        <span onClick={props.close}>X</span>
      </div>
    </div>
  );
};

export default Snackbar;
