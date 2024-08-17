import React from "react";

const nutrition = {
  name: "Nutrition",
  description:
    "The table below shows nutritional values per serving without the additional fillings.",
  nutritional: ["Calories", "Carbs", "Protein", "Fat"],
  values: ["277kcal", "0g", "20g", "22g"],
};

export function Nutrition() {
  return (
    <div className="nutrition">
      <h2 className="nutrition-title">{nutrition.name}</h2>
      <p className="nutrition-description">{nutrition.description}</p>
      <div className="nutritionals">
        {nutrition.nutritional.map((item, index) => (
          <React.Fragment key={index}>
            <div className="nutritional-item">
              <span className="nutritional">{item}</span>
              <span className="value">{nutrition.values[index]}</span>
            </div>
            {index < nutrition.nutritional.length - 1 && (
              <hr className="nutrition-hr" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
