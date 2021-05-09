import "./styles.css";
import "./Pages/Home/home.css";
import { Router } from "./Router";
import { NavBar } from "./Components/NavBar";
import { PivotBar } from "./Components/PivotBar";

export default function App() {

  return (
    <>
      <div className="App">
        <NavBar/>
        <Router />
        <PivotBar/>
      </div>
    </>
  );
}
