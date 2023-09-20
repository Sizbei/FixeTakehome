import React, { useEffect, useState } from "react";
import RestaurantTable from "../components/RestaurantTable";

function ListScreen() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch(
      "https://dcxgxxl3oym6r3wslpzpmrpac40fjebf.lambda-url.us-east-1.on.aws/"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Filter out inactive restaurants
        const activeRestaurants = data.filter(
          (restaurant) => restaurant.status === "active"
        );
        setRestaurants(activeRestaurants);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>List of Active Restaurants</h1>
      <h1>List of Active Restaurants</h1>
      <RestaurantTable restaurants={restaurants} />
    </div>
  );
}

export default ListScreen;
