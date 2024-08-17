import { SimpleOmeletteRecipe } from "./SimpleOmeletteRecipe";
import { PreparationTime } from "./PreparationTime";
import { Ingredients } from "./Ingredients";
import { Instructions } from "./Instructions";
import { Nutrition } from "./Nutrition";

export default function App() {
  return (
    <div className="recipe-card">
      <SimpleOmeletteRecipe />
      <div className="mobile">
        <PreparationTime />
        <Ingredients />
        <hr />
        <Instructions />
        <hr />
        <Nutrition />
      </div>
    </div>
  );
}
