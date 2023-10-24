const Meals: React.FC<Meal[]> = (props) => {
  return (
    <>
      {meals?.map((meal) => {
        return <li key={meal.id}>{meal.name}</li>;
      })}
    </>
  );
};
export default Meals;
