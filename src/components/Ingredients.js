const ingredients = {
  ingredientsName: "Ingredients",
  ingredientsLists: [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
  ],
};

export function Ingredients() {
  return (
    <div className="ingredients">
      <ul>
        <h2 className="ingredients-name">{ingredients.ingredientsName}</h2>
        {ingredients.ingredientsLists.map(ingredients => (
          <li className="ingredients-lists">
            <span className="ingredients-lists-name">{ingredients}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
