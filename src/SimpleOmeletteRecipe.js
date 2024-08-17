const simpleOmeletteRecipe = {
  recipeImage: "./assets/images/image-omelette.jpeg",
  recipeName: "Simple Omelette Recipe",
  recipeDescription:
    "An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
};
export function SimpleOmeletteRecipe() {
  return (
    <div>
      <img
        src={simpleOmeletteRecipe.recipeImage}
        alt={simpleOmeletteRecipe.recipeName}
        className="recipe-image"
      />
      <div className="recipe-mobile">
        <h2 className="recipe-title">{simpleOmeletteRecipe.recipeName}</h2>
        <p className="recipe-description">
          {simpleOmeletteRecipe.recipeDescription}
        </p>
      </div>
    </div>
  );
}
