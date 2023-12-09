import React from "react";
import ReactPlayer from "react-player";

const Meal = ({ data }) => {
  const ingredients =
    data[0] &&
    Object.keys(data[0])
      .filter(
        (key) =>
          key.startsWith("strIngredient") &&
          data[0][key] && // Check if the property exists
          typeof data[0][key] === "string" // Check if the property is a string
      )
      .map((key) => data[0][key]);

  console.log(ingredients);

  return (
    <div>
      <div className="recipe container">
        <img className="pic" src={data[0].strMealThumb} alt={data[0].strMeal} />
        <div className="desc">
          <h4>{data[0].strMeal}</h4>
          <p className="my-3">{data[0].strInstructions}</p>
        </div>
      </div>

      <div className="container item" style={{ marginTop: "15px" }}>
        <strong>Category: </strong>
        <p>{data[0].strCategory}</p>
      </div>

      <div className="container item ">
        <strong>Area: </strong>
        <p>{data[0].strArea}</p>
      </div>

      <div className="container item ">
        <strong>Tags: </strong>
        <p>{data[0].strTags}</p>
      </div>

      <div className="container">
        <strong style={{ fontSize: "1.5rem" }}>Ingredients: </strong>
        <ul>
          {ingredients &&
            ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
        </ul>
      </div>

      {/* Use ReactPlayer to embed the YouTube video */}
      {data[0].strYoutube && (
        <div className="container">
          <strong style={{ fontSize: "1.5rem" }}>Video Recipe:</strong>
          <div style={{ height: "500px" }}>
            <ReactPlayer
              url={data[0].strYoutube}
              width="100%"
              height="100%"
              controls
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Meal;
