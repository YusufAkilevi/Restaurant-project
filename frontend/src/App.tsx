import { useEffect, useState } from "react";
import Meals from "./components/Meals";
import "./App.css";

const App: React.FC = () => {
  type Ingredient = { name: string; quantity: number; quantity_type: string };
  type Meal = {
    id: number;
    name: string;
    ingredients: Ingredient[];
  };
  const [meals, setMeals] = useState<Meal[]>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/meals");
      const data = await res.json();

      console.log(data);
      setMeals(data.meals);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Meals</h1>
      <Meals meals={meals} />
    </>
  );
};

export default App;
