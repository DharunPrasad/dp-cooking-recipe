import "./Recipe.css";
import { useHistory, useParams } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";
const Recipe = () => {
  const history = useHistory()
  const { id } = useParams();

  const {mode} = useTheme()
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
const unSub = projectFirestore.collection("recipes").doc(id).onSnapshot(doc => {
  if(doc.exists){
    setIspending(false)
    setRecipe(doc.data())
    // console.log(doc.data())
  }
  else{
    setIspending(false)
    setError("What the hell is this ?")
  }
})
return () => unSub()
  },[id])


  const handleClick = (e) => {
e.target.textContent = "Please Wait"
    projectFirestore.collection("recipes").doc(id).delete().then(() => {
      history.push("/")
    })
  }

const handleUpdate = () => {

  projectFirestore.collection("recipes").doc(id).update({
    title : "idhu pudhusu"
  }).then(() => {
    history.push("/")
  })
}

  return (
    <div className={`recipe ${mode}`}>
      {isPending && <p className="">Loading....</p>}
      {error && <p>{error}</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
            <p className="">Takes {recipe.cookingTime}  to make</p>

            <ul className="">
                <span className="">Ingredients required : </span> {recipe.ingredients.map(ing =>  <li key = {ing}> { ing}</li>)}
            </ul>

            <p className="method">{recipe.method}</p>
            <button className="" onClick={handleClick}>Delete</button>
            <button className="" onClick={handleUpdate}>Update</button>
        </>
      )}
    </div>
  );
};

export default Recipe;
