import "./styles.css";
import "./Pages/Home/home.css";
import { Router } from "./Router";
import { NavBar } from "./Components/NavBar";
import { PivotBar } from "./Components/PivotBar";
import ScrollToTop from "./Components/ScrollToTop";

export default function App() {

  return (
    <>
    <ScrollToTop />
      <div className="App">
        <NavBar/>
        <Router />
        <PivotBar/>
      </div>
    </>
  );
}
