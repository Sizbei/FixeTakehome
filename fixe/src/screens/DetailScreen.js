import React from "react";
import { useParams, Link } from "react-router-dom";

function DetailScreen({ restaurants }) {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <h2>Restaurant Details</h2>
      <p>Name: {restaurant.name}</p>
      <p>Notes: {restaurant.notes}</p>
      <p>Primary Location Address: {restaurant.locations[0].address}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
}

export default DetailScreen;
