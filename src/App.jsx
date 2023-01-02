import { useEffect, useState } from "react";
import Hero from "./component/Hero";

import Navbar from "./component/Navbar";
import Recipecard from "./component/Recipecard";
import SearchBar from "./component/Searchbar";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

export default function App() {
  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);

  const fetchRecipes = async () => {
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    setRecipe(data.meals);
  };
  useEffect(() => {
    fetchRecipes();
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    fetchRecipes();
  }
  return (
    <div className="">
      <Navbar />
      <Hero />
      <SearchBar
        handleSubmit={handleSubmit}
        query={query}
        setQuery={setQuery}
      />
      <div className="flex flex-wrap items-center justify-center gap-7 mt-24">
        {recipe
          ? recipe.map((recipe) => (
              <Recipecard recipe={recipe} key={recipe.idMeal} />
            ))
          : "Nothing to see here bro"}
      </div>
    </div>
  );
}
