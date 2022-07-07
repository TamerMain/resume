import { useState, useEffect } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [dummyMeals, setDummyMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-dummybase-default-rtdb.firebaseio.com/Meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const DUMMY_MEALS = Object.values(responseData);
      setDummyMeals(DUMMY_MEALS);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (httpError) {
    return (
      <section>
        <p className={classes["meals-loading"]}>{httpError}</p>
      </section>
    );
  }

  const mealsList = dummyMeals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading ? (
          <div className={classes["meals-loading"]}>Loading menu...</div>
        ) : (
          <ul>{mealsList}</ul>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
