import "./Create.css";
import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch.js"

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const history = useHistory()

  const { postData, data, error } = useFetch("http://localhost:3000/recipes", "POST")

  const handleSubmit = (event) => {
    event.preventDefault();
    postData({title, ingredients, method, cookingTime: cookingTime + " minutes"});
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const ingredient = newIngredient.trim();

    if (ingredient && !ingredients.includes(ingredient)) {
      setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  };

  useEffect(() => {
    if (data) {
      history.push("/")
    }
  }, [data])

  return (
    <div className="create">
      <h2 className="page-title">Add a new recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Add ingredients: </span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(event) => setNewIngredient(event.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">
              Add
            </button>
          </div>
        </label>
        <p>Added ingredients: {ingredients.map(i => <em key={i}>{i}, </em>)}</p>
        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={(event) => setMethod(event.target.value)}
            value={method}
          />
        </label>
        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={(event) => setCookingTime(event.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
