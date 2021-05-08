import "./styles.css";
import "./Pages/Home/home.css";
import { Router } from "./Router";
import { NavBar } from "./Components/NavBar";

export default function App() {

  return (
    <>
      <div className="App">
        <NavBar/>
      </div>
      <Router />
    </>
  );
}
