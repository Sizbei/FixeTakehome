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
    <div className="min-h-screen items-center justify-center space-y-8 p-5 bg-gradient-to-b from-purple-400 to-blue-400">
      <div className="min-h-screen flex flex-col items-center justify-center space-y-8 p-10 bg-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-400 ">
            List of Active Restaurants
          </h1>
        </div>

        <RestaurantTable restaurants={restaurants} />
      </div>
    </div>
  );
}

export default ListScreen;
