import React from "react";

const Recipecard = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className="border w-44 mb-8 flex-col items-center flex gap-3">
      <img className="w-48" src={recipe.strMealThumb} alt="" />
      <p>{recipe.strMeal}</p>
      <button className="bg-red-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full mb-3">
        Recipe
      </button>
    </div>
  );
};

export default Recipecard;
