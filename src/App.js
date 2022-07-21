import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import Navbar from "./components/Navbar";
import ThemeSelector from "./components/ThemeSelector";
import useTheme from "./hooks/useTheme";

function App() {

  const {mode} = useTheme()

  return (
    <BrowserRouter>
 
      <div className={`App ${mode}`}>
      <Navbar />
    <ThemeSelector/>
        <h1 className="" style = {{marginLeft : "10px"}}>Cooking Recipie</h1>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/search">
            <Search />
          </Route>

          <Route path="/recipe/:id">
            <Recipe />
          </Route>
          <Route path = "/search">
<Search />
            </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
