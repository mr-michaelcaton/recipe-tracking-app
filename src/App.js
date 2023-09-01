import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  //boilerplate state object - set by Thinkful
  const [recipes, setRecipes] = useState(RecipeData);
  
  //add new posts
  const appendRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  }
  //delete posts
  const deleteRecipe = (nameToDelete) => {
    setRecipes((recipes) => {
      return (
        recipes.filter((ignoredRecipe) => ignoredRecipe.name !== nameToDelete)
      )
    });
  }
  //create parent-level event handlers
  const deleteButtonHandler = (id) => {
    deleteRecipe(id);
  }



  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteButtonHandler={deleteButtonHandler} />
      <RecipeCreate appendRecipe={appendRecipe}/>
    </div>
  );
}

export default App;
