import { Link } from "react-router-dom";
import "./App.css";
import ImageSlider from "./components/image-slider";

export default function App() {
  return (
    <div /* className="container" */>
      {
        /* <h1>Welcome to Your Nb 1 Photo Gallery</h1>
      <nav>
        <Link to="image-slider/">Sign In</Link> |{" "}
        <Link to="/signUp">Sign Up</Link>
      </nav> */
        <ImageSlider
          url={"https://picsum.photos/v2/list"}
          page={"1"}
          limit={"10"}
        />
      }
    </div>
  );
}
