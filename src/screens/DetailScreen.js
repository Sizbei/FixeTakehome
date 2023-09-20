import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

function DetailScreen() {
  const location = useLocation();
  // const { id } = useParams();
  let restaurant = location.state.restaurant;

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div>
      <h2>Restaurant Details</h2>
      <p>Name: {restaurant.name}</p>
      <p>Notes: {restaurant.notes}</p>
      <p>Primary Location Address: {restaurant.locations[0].address_line_1}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
}

export default DetailScreen;
