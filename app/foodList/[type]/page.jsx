import React from "react";

import RecipeList from "@/components/RecipeList";

async function getRecipes(type = "indian") {
  // await new Promise((r) => setTimeout(r, 5000));
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`
  );
  const response = await res.json();
  return response;
}

export default async function Home(params) {
  const recipes = await getRecipes(params.type);

  return <RecipeList recipes={recipes.meals} type={params.type || ""} />;
}
