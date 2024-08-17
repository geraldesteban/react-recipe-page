const instructions = {
  instructionsName: "Instructions",
  instructionsNameLists: [
    "Beat the eggs",
    "Heat the pan",
    "Cook the omelette",
    "Add fillings (optional)",
    "Fold and serve",
    "Enjoy",
  ],
  instructionsDescriptionLists: [
    "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    "Place a non-stick frying pan over medium heat and add butter or oil.",
    "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    "Serve hot, with additional salt and pepper if needed.",
  ],
};

export function Instructions() {
  return (
    <div>
      <ul>
        <h2 className="instructions-title">{instructions.instructionsName}</h2>
        {instructions.instructionsNameLists.map((name, index) => (
          <li key={name} className="instructions-description">
            <span className="instructions-number">{index + 1}.</span>{" "}
            <span className="instructions-name">{name}: </span>
            {instructions.instructionsDescriptionLists[index]}
          </li>
        ))}
      </ul>
    </div>
  );
}
