import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.js";
import { useTheme } from "../hooks/useTheme.js"

export default function Navbar() {

  const { color } = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Shrimp</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create recipe</Link>

      </nav>
    </div>
  );
}
