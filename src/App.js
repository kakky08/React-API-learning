import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import './App.css';

const App = () => {

  // APIのID
  const App_ID = "2db12816";
  // APIのキー
  const App_Key = "c75ec282e143a8a3c4e569b08605c4a3";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  // レシピ検索のリクエスト

    useEffect(async() => {
        getRecipes();
    },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    // ページの更新を防ぐ
    e.preventDefault();
    // ユーザーが検索に入れた（入れ終わった）言葉をserQueryで更新
    setQuery(search);
    // 入力フォームの文字を消す
    setSearch("");
  }

  return (
    <div className="App">
      {/* onSubmitで送信された時にqueryの値が更新される */}
      <form onSubmit={getSearch} className="search-form">
        {/* valueが空文字だと入力されても反映されないので onChangeで入力されたものを反映させる */}
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      {/* mapを使ってrecipesの配列を出力 */}
      {recipes.map(recipe => (
        // API のレシピからタイトル・カロリー・画像を取得
        // keyがないとエラーが発生する
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}>
          </Recipe>

      ))}

    </div>
  );
}

export default App;
