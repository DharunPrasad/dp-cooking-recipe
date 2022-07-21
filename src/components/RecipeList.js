import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import trash from "../assets/trashCan.svg"
import "./RecipeList.css";
import { projectFirestore } from "../firebase/config";
const RecipeList = ({ recipes }) => {
  // console.log(recipes)
  const { mode } = useTheme();

  if (recipes && recipes.length === 0) {
    return <div style={{ textAlign: "center" }}>No recipes found</div>;
  }

  const handleClick = (id) => {
 
    projectFirestore.collection("recipes").doc(id).delete()
  }
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className={`card ${mode}`} key={recipe.id}>
          <h1 className="">{recipe.title}</h1>
          <p className="">{recipe.cookingTime}</p>
          <div className="">{recipe.method.substring(0, 100)}....</div>
          <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
          <img src={trash} alt="trash" className="delete" onClick={() => handleClick(recipe.id)}/>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
