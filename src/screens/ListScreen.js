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
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8 p-10 bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold underline text-gray-700">
          List of Active Restaurants
        </h1>
      </div>

      <RestaurantTable restaurants={restaurants} />
    </div>
  );
}

export default ListScreen;
