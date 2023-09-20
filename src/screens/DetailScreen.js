import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";

function DetailScreen() {
  const location = useLocation();
  // const { id } = useParams();
  let restaurant = location.state.restaurant;

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Restaurant Details</h2>
      <p className="mb-2">Name: {restaurant.name}</p>
      <p className="mb-2">Notes: {restaurant.notes}</p>
      <p className="mb-4">
        Primary Location Address: {restaurant.locations[0].address_line_1}
      </p>
      <Button variant="contained">
        <Link to="/">Back to List</Link>
      </Button>
    </div>
  );
}

export default DetailScreen;
