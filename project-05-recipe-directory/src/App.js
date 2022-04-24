import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home.js";
import Recipe from "./pages/recipe/Recipe.js";
import Search from "./pages/search/Search.js";
import Create from "./pages/create/Create.js";
import Navbar from "./components/Navbar.js"
import ThemeSelector from "./components/ThemeSelector.js";
import { useTheme } from "./hooks/useTheme.js"



function App() {

  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar />
      <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
