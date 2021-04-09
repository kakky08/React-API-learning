import React from "react";
import style from "./recipe.module.css";

// API のレシピからタイトル・カロリー・画像を取得し表示
const Recipe = ({title,calories,image,ingredients}) => {
    return(
      <div className={style.recipe}>
        <h1>{title}</h1>
        <ol>
          {ingredients.map(ingredient =>(
              <li>{ingredient.text}</li>
          ))}
        </ol>
        <p>{calories}</p>
        <img className={styleMedia.image} src ={image} alt=""></img>
      </div>
    )
}
export default Recipe;
