import React from "react";

// API のレシピからタイトル・カロリー・画像を取得し表示
const Recipe = ({title,calories,image,ingredients}) => {
    return(
      <div>
        <h1>{title}</h1>
        <ol>
          {ingredients.map(ingredient =>(
              <li>{ingredient.text}</li>
          ))}
        </ol>
        <p>{calories}</p>
        <img src ={image} alt=""></img>
      </div>
    )
}
export default Recipe;
