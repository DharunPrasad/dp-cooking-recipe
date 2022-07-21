import { useEffect, useState } from "react";
import RecipeList from "../../components/RecipeList";
import { projectFirestore } from "../../firebase/config";

import "./Home.css";
const Home = () => {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
     const unSub = projectFirestore
      .collection("recipes").
     onSnapshot((snapshot) => {
        if (snapshot.empty) {
          setIspending(false);
          setError("Oops there is no data available");
        } else {
          let result = [];
          snapshot.docs.forEach((doc) => {
            result.push({ id: doc.id, ...doc.data() });
          });
          setData(result);
          setIspending(false);
        }
      }, (err) => {
        setError(err.message)
        setIspending(false)
      })

      return () => unSub()
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading....</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
