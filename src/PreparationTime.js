const preparationTime = {
  preparationName: "Preparation time",
  preparationNameLists: ["Total", "Preparation", "Cooking"],
  preparationDescriptionLists: [
    "Approximately 10 minutes",
    "5 minutes",
    "5 minutes",
  ],
};

export function PreparationTime() {
  return (
    <div className="preparation">
      <h2 className="preparation-title">{preparationTime.preparationName}</h2>
      <ul>
        {preparationTime.preparationNameLists.map((name, index) => (
          <li key={index} className="preparation-description">
            <span className="preparation-name">{name}: </span>
            {preparationTime.preparationDescriptionLists[index]}
          </li>
        ))}
      </ul>
    </div>
  );
}
