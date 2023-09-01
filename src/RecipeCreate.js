import React, { useState } from "react";

function RecipeCreate({appendRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  //create React state objects for recipe props
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  //create event handlers
  const changeHandler = (e) => {
  switch (e.target.name) {
    case "name" : 
    setName(e.target.value);
    break;
    case "cuisine" : 
    setCuisine(e.target.value);
    break;
    case "photo" : 
    setPhoto(e.target.value);
    break;
    case "ingredients" : 
    setIngredients(e.target.value);
    break;
    case "preparation" : 
    setPreparation(e.target.value);
    break;
    default : 
    console.log("No matching fields. Check your inputs");
  }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    appendRecipe({name:name,cuisine:cuisine,photo:photo,ingredients:ingredients,preparation:preparation})
    
    //Log recipe for verification
    console.log(`Recipe: `,name, cuisine, photo, ingredients, preparation);

    //Reset input fields
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  }

  return (
    <form name="create">
      <table>
        <tbody>
          <tr>
            <td>
              <input
              id="name"
              name="name"
              type="text"
              required={true}
              onChange={changeHandler}
              value={name}
              placeholder="name"
              className="formInputs"
              />
            </td>
            <td>
              <input
              id="cuisine"
              name="cuisine"
              type="text"
              required={true}
              onChange={changeHandler}
              value={cuisine}
              placeholder="cuisine"
              className="formInputs"
              />
            </td>
            <td>
              <input
              id="photo"
              name="photo"
              type="url"
              required={false}
              onChange={changeHandler}
              value={photo}
              placeholder="url"
              className="formInputs"
              />
            </td>
            <td>
              <textarea
              id="ingedients"
              name="ingredients"
              required={true}
              onChange={changeHandler}
              value={ingredients}
              placeholder="ingredients"
              className="formInputs"
              />
            </td>
            <td>
              <textarea
              id="preparation"
              name="preparation"
              required={true}
              onChange={changeHandler}
              value={preparation}
              placeholder="preparation"
              className="formInputs"
              />
            </td>
            <td>
              <button type="submit" onClick={submitHandler}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
