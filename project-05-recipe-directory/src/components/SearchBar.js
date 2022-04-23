import "./SearchBar.css";
import { useState } from "react";
import { useHistory } from "react-router-dom"

export default function SearchBar() {
  const [term, setTerm] = useState("");
  const history = useHistory();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          onChange={(event) => setTerm(event.target.value)}
          required
        />
      </form>
    </div>
  );
}
