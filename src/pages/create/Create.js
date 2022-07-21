import "./Create.css";
import { useState, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredient] = useState([]);
  const history = useHistory()

const {mode} = useTheme()
  const ingInput = useRef()

  const handleSubmit = (e) => {
            e.preventDefault();

            const doc = { title, method, cookingTime : cookingTime + " minutes", ingredients }


            projectFirestore.collection("recipes").add(doc).then(() => {
              history.push("/")
            })
            .catch((err) => {
              console.log(err)
            })

              
  
  }


  const handleAdd = (e) => {
        e.preventDefault();
        const ing = newIngredient.trim().toLowerCase();

        if(ing && !ingredients.includes(ing)){
            setIngredient(prevState => [...prevState, ing])
        }
        setNewIngredient("");


        ingInput.current.focus();
  }

const handleIng = (ing) => {
  setIngredient(prevIng => prevIng.filter(prev => prev !== ing))
}

  return (
    <div className={`create ${mode}`}>
      <h2 className="">Add new recipe</h2>

      <form action="" className="" onSubmit={handleSubmit}>
        <label htmlFor="" className="">
          <span className="">Recipe Title</span>
          <input
            type="text"
            className=""
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label htmlFor="" className="ingredients">
            <span className="">Ingridients</span>
            <input type="text" className=""  onChange={(e) => setNewIngredient(e.target.value)} ref = {ingInput} value = {newIngredient}/>
            <button className="btn" onClick={handleAdd}>Add</button>
        </label>
        {ingredients && ingredients.map(ing => <p className="ing-list" key = {ing}> {ing} <span className="" onClick={() => handleIng(ing)}>X</span> </p>)}

        <label htmlFor="" className="">
          <span className="">Recipe Method</span>
          <textarea
            type="text"
            className=""
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label htmlFor="" className="">
          <span className="">Cooking Time (minutes)</span>
          <input
            type="number"
            className=""
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Create;
