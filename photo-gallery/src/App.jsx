import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1>Welcome to Your Nb 1 Photo Gallery</h1>
      <nav>
        <Link to="/signIn">Sign In</Link> | <Link to="/signUp">Sign Up</Link>
      </nav>
    </div>
  );
}
