import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/nav-bar/";
import ImageSlider from "./components/image-slider";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="div-container">
        <header>
          <h1>Wlecome to my Nb 1 Photo Gallery</h1>
        </header>
        <Link to="/image-slider/" className="show-image-slider">
          Show to Image Slider
        </Link>
        <Routes>
          <Route
            path="/image-slider/"
            element={
              <ImageSlider
                url={"https://picsum.photos/v2/list"}
                page={"1"}
                limit={"10"}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
