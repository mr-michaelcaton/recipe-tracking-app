import React from 'react'

function Recipe({name,cuisine,photo,ingredients,preparation,deleteButtonHandler}) {
  
    return (
          <tr>
            <td>
              {name}
            </td>
            <td>
              {cuisine}
            </td>
            <td>
              <img src={photo} alt="recipe photo"/>
            </td>
            <td className='content_td'>
              <p>
                {ingredients}
              </p>
            </td>
            <td className='content_td'>
              <p>
                {preparation}
              </p>
            </td>
            <td>
              <button name="delete" onClick={() => deleteButtonHandler(name)}>Delete</button>
            </td>
          </tr>
  )
}

export default Recipe
