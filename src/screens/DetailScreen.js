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
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-blue-400 space-y-6 p-8 rounded-lg shadow-md flex justify-center">
      <div className=" w-1/4 h-1/3 bg-white space-y-8 p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-400 mb-2">
            Restaurant Details
          </h2>
        </div>
        <p className=" text-xl mb-2">
          <t className=" text-xl font-semibold mb-2 "> {restaurant.name}</t>,{" "}
          {restaurant.locations[0].address_line_1}
        </p>
        <p className="text-xl mb-8">Notes: {restaurant.notes}</p>
        <Button variant="contained" color="primary">
          <Link to="/">Back to List</Link>
        </Button>
      </div>
    </div>
  );
}

export default DetailScreen;
