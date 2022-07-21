
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";


import "./Search.css"

import RecipeList from "../../components/RecipeList";
 
const Search = () => {
const location = useLocation();
const search = new URLSearchParams(location.search);
const term = search.get("q");
const url = "http://localhost:3000/recipes?q=" + term;

    const { data, isPending, error } = useFetch(url);


    return ( 
        <div>
            <h1 className="page-title">Recipies including "{term}"</h1>
            {error && <p>{error}</p>}
            {isPending && <p>Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
     );
}
 
export default Search;





