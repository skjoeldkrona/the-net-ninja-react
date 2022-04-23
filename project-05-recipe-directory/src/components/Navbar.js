import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.js";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Shrimp</h1>
        </Link>
        <SearchBar />
        <Link className="anchor"to="/create">Create recipe</Link>

      </nav>
    </div>
  );
}
