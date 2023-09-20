import React, { useEffect, useState } from "react";
import RestaurantTable from "../components/RestaurantTable";
import * as service from "../services/api.js";

function ListScreen() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    service.getRestaurants().then((res) => {
      let activeRestaurants = [];
      let restaurant = res.data;
      for (let i = 0; i < restaurant.length; i++) {
        if (restaurant[i].status === "active") {
          activeRestaurants.push(restaurant[i]);
        }
      }
      setRestaurants(activeRestaurants);
    });
  }, []);

  return (
    <div>
      <h1>List of Active Restaurants</h1>
      <RestaurantTable restaurants={restaurants} />
    </div>
  );
}

export default ListScreen;
