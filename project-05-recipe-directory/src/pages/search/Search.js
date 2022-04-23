import "./Search.css";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch.js"
import RecipeList from "../../components/RecipeList.js"

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/recipes?q=" + query;

  const {error, isPending, data } = useFetch(url)

  return <div>
    <h2 className="title">Recipes including "{query}"</h2>
    {error && <p className="error">{error.message}</p>}
    {isPending && <p className="loading">Loading...</p>}
    {data && <RecipeList recipes={data} />}
  </div>;
}
